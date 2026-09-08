import { useEffect, useRef, useState } from 'react';

export function RaceScene({ paused }: { paused: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (paused || !mountRef.current) return;
    let disposed = false;
    let frame = 0;
    const cleanups: Array<() => void> = [];
    let cleaned = false;
    const dispose = () => { if (cleaned) return; cleaned = true; cleanups.splice(0).reverse().forEach((cleanup) => cleanup()); };
    setReady(false); setFailed(false);
    Promise.all([import('three'), import('gsap'), import('gsap/ScrollTrigger')]).then(([THREE, { gsap }, { ScrollTrigger }]) => {
      const host = mountRef.current;
      if (!host || disposed) return;
      try {
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x0b0c0d, 8, 28);
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(7.8, 3.8, 8.8);
        camera.lookAt(0, 0.5, 0);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 761 ? 1 : 1.5));
        renderer.setSize(host.clientWidth, host.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        host.appendChild(renderer.domElement);
        cleanups.push(() => { renderer.dispose(); renderer.domElement.remove(); });
        const contextLost = (event: Event) => { event.preventDefault(); active = false; cancelAnimationFrame(frame); frame = 0; if (!disposed) setFailed(true); };
        renderer.domElement.addEventListener('webglcontextlost', contextLost, false);
        cleanups.push(() => renderer.domElement.removeEventListener('webglcontextlost', contextLost));
        const objects: import('three').Object3D[] = [];
        const geometries: import('three').BufferGeometry[] = [];
        const materials: import('three').Material[] = [];
        cleanups.push(() => { objects.forEach((obj) => scene.remove(obj)); geometries.forEach((geometry) => geometry.dispose()); materials.forEach((material) => material.dispose()); });
        const car = new THREE.Group(); scene.add(car);
        const material = (color: number, metalness = 0.7, roughness = 0.3) => {
          const value = new THREE.MeshStandardMaterial({ color, metalness, roughness }); materials.push(value); return value;
        };
        const carbon = material(0x101215, 0.9, 0.28), red = material(0xff3c22, 0.5, 0.25), tire = material(0x050505, 0.1, 0.85), alloy = material(0x8d9297, 0.9, 0.18), lime = material(0xc5ff4a, 0.3, 0.3);
        const mesh = (geometry: import('three').BufferGeometry, mat: import('three').Material, position: [number, number, number], scale?: [number, number, number]) => {
          geometries.push(geometry); const part = new THREE.Mesh(geometry, mat); part.position.set(...position); if (scale) part.scale.set(...scale); car.add(part); objects.push(part); return part;
        };
        // A sculptural, deliberately exposed open-wheel car: monocoque, wheels, wings and suspension.
        const chassis = mesh(new THREE.CapsuleGeometry(0.62, 3.7, 10, 20), carbon, [0, 0.72, 0], [1, 0.7, 1]);
        chassis.rotation.x = Math.PI / 2;
        mesh(new THREE.SphereGeometry(0.78, 24, 16), carbon, [0, 1.05, 0.65], [0.92, 0.62, 1.3]);
        mesh(new THREE.BoxGeometry(3.8, 0.12, 0.72), red, [0, 0.47, 2.55]);
        mesh(new THREE.BoxGeometry(2.8, 0.09, 0.32), carbon, [0, 0.6, 2.1]);
        mesh(new THREE.BoxGeometry(3.15, 0.18, 0.45), carbon, [0, 1.22, -2.15]);
        mesh(new THREE.BoxGeometry(0.1, 1.1, 0.28), carbon, [-1.3, 1.0, -2.1]);
        mesh(new THREE.BoxGeometry(0.1, 1.1, 0.28), carbon, [1.3, 1.0, -2.1]);
        [[-1.45, 0.48, 1.55], [1.45, 0.48, 1.55], [-1.45, 0.52, -1.45], [1.45, 0.52, -1.45]].forEach(([x,y,z]) => {
          const wheel = mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.38, 28), tire, [x, y, z]); wheel.rotation.z = Math.PI / 2;
          const hub = mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.41, 20), alloy, [x, y, z]); hub.rotation.z = Math.PI / 2;
          const arm = mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.12, 8), alloy, [x / 2.1, 0.7, z]); arm.rotation.z = Math.PI / 2;
        });
        mesh(new THREE.TorusGeometry(0.46, 0.06, 8, 20), alloy, [0, 1.55, 0.9]);
        mesh(new THREE.BoxGeometry(0.22, 0.05, 0.1), lime, [0, 0.8, 2.7]);
        const light = new THREE.PointLight(0xff3c22, 18, 9); light.position.set(-2, 3, 3); scene.add(light);
        const cool = new THREE.PointLight(0xc5ff4a, 12, 8); cool.position.set(3, 2, -2); scene.add(cool);
        scene.add(new THREE.HemisphereLight(0xd9dedf, 0x121316, 2.2));
        const floor = mesh(new THREE.PlaneGeometry(40, 40), material(0x101113, 0, 0.8), [0, 0, 0]); car.remove(floor); scene.add(floor); floor.rotation.x = -Math.PI / 2;
        const streakGeometry = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 80 }, (_, i) => new THREE.Vector3((i % 8 - 4) * 2, 0.08, -12 + Math.floor(i / 8) * 2)));
        const streakMaterial = new THREE.PointsMaterial({ color: 0xff3c22, size: 0.045 }); materials.push(streakMaterial); geometries.push(streakGeometry); const streaks = new THREE.Points(streakGeometry, streakMaterial); scene.add(streaks);
        const resize = () => { if (!host.clientWidth) return; camera.aspect = host.clientWidth / host.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(host.clientWidth, host.clientHeight); };
        const observer = new ResizeObserver(resize); observer.observe(host); cleanups.push(() => observer.disconnect()); resize();
        const clock = new THREE.Clock();
        const view = { x: 7.8, y: 3.8, z: 8.8, lx: 0, ly: 0.55, lz: 0 };
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add('(min-width: 1000px)', () => {
          const hero = host.closest('#home');
          if (!hero) return;
          const timeline = gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 } });
          timeline.to(view, { x: 3, y: 5.5, z: 6, lx: 0, ly: 0.6, lz: 0, duration: 0.55 }, 0).to(view, { x: -2.5, y: 3, z: 8, lx: 0, ly: 0.45, lz: 0, duration: 0.45 }, 0.55).to(car.rotation, { y: Math.PI * 0.55, duration: 1 }, 0);
        });
        let onscreen = true;
        let active = document.visibilityState === 'visible';
        const render = () => { if (!active || !onscreen) { frame = 0; return; } const t = clock.getElapsedTime(); camera.position.set(view.x, view.y, view.z); camera.lookAt(view.lx, view.ly, view.lz); if (window.innerWidth < 1000) car.rotation.y = Math.sin(t * 0.2) * 0.08; streaks.rotation.y = t * 0.035; renderer.render(scene, camera); frame = requestAnimationFrame(render); };
        const syncLoop = () => { const shouldRun = active && onscreen; if (shouldRun && !frame) render(); if (!shouldRun && frame) { cancelAnimationFrame(frame); frame = 0; } };
        const visibility = () => { active = document.visibilityState === 'visible'; syncLoop(); };
        const intersection = new IntersectionObserver(([entry]) => { onscreen = entry.isIntersecting; syncLoop(); }, { threshold: 0.05 }); intersection.observe(host); cleanups.push(() => intersection.disconnect());
        document.addEventListener('visibilitychange', visibility);
        cleanups.push(() => document.removeEventListener('visibilitychange', visibility));
        render();
        cleanups.push(() => { active = false; onscreen = false; media.revert(); cancelAnimationFrame(frame); });
        if (!disposed) { setReady(true); setFailed(false); }
      } catch { dispose(); if (!disposed) setFailed(true); }
    }).catch(() => { dispose(); if (!disposed) setFailed(true); });
    return () => { disposed = true; dispose(); };
  }, [paused]);
  return <div className="f1-canvas" ref={mountRef}>{(!ready || paused || failed) && <div className="f1-canvas-fallback">HV-01<br /><span>OPEN WHEEL SYSTEM</span></div>}</div>;
}

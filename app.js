/**
 * macOS Liquid Glass Portfolio Controller
 * Real-time mouse specular tracking, tab navigation, and window controls.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const liveClockEl = document.getElementById('liveClock');
  const portfolioWindow = document.getElementById('portfolioWindow');

  // Traffic Lights
  const btnClose = document.getElementById('btnTrafficClose');
  const btnMin = document.getElementById('btnTrafficMin');
  const btnZoom = document.getElementById('btnTrafficZoom');

  // Navigation Items
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const dockItems = document.querySelectorAll('.dock-item');
  const menuItems = document.querySelectorAll('.menu-item');
  const contentPanels = document.querySelectorAll('.content-panel');
  const searchInput = document.getElementById('searchInput');

  // 1. Live Clock
  function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    if (liveClockEl) {
      liveClockEl.textContent = `${day} ${hours}:${minutes}`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 2. Liquid Glass Mouse Tracking (Dynamic Specular Glow)
  const dynamicLiquidElements = document.querySelectorAll(
    '.menu-item, .dock-item, .sidebar-item, .skeleton-card, .project-card, .chip, .tool-item, .hobby-pill, .status-badge'
  );

  dynamicLiquidElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    });

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--mouse-x', `50%`);
      el.style.setProperty('--mouse-y', `50%`);
    });
  });

  // 3. Tab Navigation Synchronization
  function switchTab(tabId) {
    // Sidebar
    sidebarItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Dock
    dockItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Menubar
    menuItems.forEach(item => {
      if (item.getAttribute('data-action') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Panels
    contentPanels.forEach(panel => {
      if (panel.id === `panel-${tabId}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Ensure window is visible if minimized
    if (portfolioWindow && portfolioWindow.classList.contains('minimized')) {
      portfolioWindow.classList.remove('minimized');
    }
  }

  // Bind Sidebar
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  // Bind Dock
  dockItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  // Bind Menubar
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      if (action) switchTab(action);
    });
  });

  // 4. Traffic Light Controls
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      portfolioWindow.classList.toggle('minimized');
    });
  }

  if (btnMin) {
    btnMin.addEventListener('click', () => {
      portfolioWindow.classList.toggle('minimized');
    });
  }

  if (btnZoom) {
    btnZoom.addEventListener('click', () => {
      portfolioWindow.classList.toggle('maximized');
    });
  }

  // 5. Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        document.querySelectorAll('.skeleton-card, .project-card, .timeline-node, .chip, .tool-item').forEach(el => {
          el.style.opacity = '1';
        });
        return;
      }

      const activePanel = document.querySelector('.content-panel.active');
      if (activePanel) {
        const searchableItems = activePanel.querySelectorAll('.skeleton-card, .project-card, .timeline-node, .chip, .tool-item');
        searchableItems.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.opacity = '1';
          } else {
            item.style.opacity = '0.25';
          }
        });
      }
    });
  }
});

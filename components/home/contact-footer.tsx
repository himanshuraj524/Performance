"use client";

import { useEffect, useState } from "react";

const formatIndiaTime = () => new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());

export function ContactFooter() {
  const [indiaTime, setIndiaTime] = useState("");
  useEffect(() => { setIndiaTime(formatIndiaTime()); const timer = window.setInterval(() => setIndiaTime(formatIndiaTime()), 1000); return () => window.clearInterval(timer); }, []);
  return (
    <footer className="contact shell" id="contact">
      <div className="contact-topline"><span>Contact / 07</span><span>India · {indiaTime || "IST"} · UTC+05:30</span></div>
      <p className="contact-prelude">Have an experience worth making?</p>
      <h2>Let’s build<br /><em>the memorable</em><br />part.</h2>
      <div className="contact-links">
        <a href="mailto:himanshurajverma549@gmail.com">Email <span>↗</span></a>
        <a href="https://linkedin.com/in/himanshu-raj-verma" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        <a href="https://github.com/himanshuraj524" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      </div>
      <div className="contact-bottom">
        <span>© {new Date().getFullYear()} Himanshu Raj Verma</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

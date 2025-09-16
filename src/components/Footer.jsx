import React from "react";
import "./homepage.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="/terms">Terms and Agreement</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
      </ul>
      <p>© 2025 Soberano</p>
    </footer>
  );
}

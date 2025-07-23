import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCompass,
} from "react-icons/fa";

import "./CompassDock.css"; // Assuming your styles are here

export default function CompassDock() {
  const nodeRef = useRef(null);
  const [showMobileDock, setShowMobileDock] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (showMobileDock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileDock]);

  return (
    <>
      {/* 🖥 Desktop Dock - Draggable */}
      <Draggable nodeRef={nodeRef}>
        <div className="social-compass-dock" ref={nodeRef} aria-label="Social links">
          <div className="compass-circle">
            <a
              href="https://github.com/wroteformenace"
              className="compass-point github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="compass-point linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className="compass-point instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <span className="compass-arrow" aria-hidden="true" />
          </div>
        </div>
      </Draggable>

      {/* 📱 Mobile Compass Toggle */}
      <div className="mobile-compass-container">
        <button
          className="mobile-compass-toggle"
          onClick={() => setShowMobileDock(true)}
          aria-label="Open social menu"
        >
          <FaCompass />
        </button>

        {/* 📱 Mobile Compass Overlay + Dock */}
        {showMobileDock && (
          <div
            className="mobile-compass-overlay"
            onClick={() => setShowMobileDock(false)}
            aria-label="Close social menu"
          >
            <div
              className="compass-circle mobile"
              onClick={(e) => e.stopPropagation()}
              aria-label="Social links (Mobile)"
            >
              <a
                href="https://github.com/wroteformenace"
                className="compass-point github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="compass-point linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="compass-point instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <span className="compass-arrow" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

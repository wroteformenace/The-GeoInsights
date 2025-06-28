import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./About.css";

function Earth() {
  const earthRef = useRef();
  const texture = useTexture("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/img/earthmap.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && (
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    );
  } catch (e) {
    return false;
  }
}


export default function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    const animate = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 50;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animate, 20);
        } else {
          counter.innerText = target;
        }
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      });
    });

    counters.forEach(counter => observer.observe(counter));
  }, []);

  return (
    <section className="about-page">
      <h1 className="about-heading">About Our Mission</h1>

      <div className="globe-wrapper">
        <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Earth />
        </Suspense>
      </Canvas>

      </div>

      <div className="about-mission">
        <h2 className="mission-text">
          Empowering insights on global events through verified analysis,
          curated videos, and data-driven perspectives.
        </h2>
      </div>

      <div className="about-stats">
        {[
          { number: 28, label: "Countries Covered" },
          { number: 130, label: "Videos Curated" },
          { number: 12, label: "Active Contributors" },
          { number: 50, label: "Sources Integrated" },
        ].map((stat, index) => (
          <div className="stat-box" key={index}>
            <h2 className="stat-number" data-target={stat.number}>0</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <footer className="social-dock">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </footer>
    </section>
  );
}

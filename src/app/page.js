'use client';

import { useEffect } from 'react';

// ============================
// COMPONENT IMPORTS
// ============================
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import PropertyGrid from '@/components/PropertyGrid';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * =========
 * Main page component that composes all sections.
 * Marked as 'use client' to enable useEffect for
 * scroll-based animations (IntersectionObserver,
 * parallax, counters, timeline, navbar, progress bar).
 *
 * The property filtering logic is encapsulated in
 * PropertyGrid using useState + .filter() + .map().
 */
export default function Home() {
  /**
   * Initialize scroll-based animations and effects.
   * This useEffect consolidates all scroll behavior from
   * the original app.js into a single React-compatible setup.
   */
  useEffect(() => {
    // ================================
    // 1. SCROLL REVEAL (IntersectionObserver)
    // ================================
    const revealElements = document.querySelectorAll(
      '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)'
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // ================================
    // 2. ANIMATED COUNTERS
    // ================================
    const countersAnimated = new Set();
    const counterElements = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
            countersAnimated.add(entry.target);
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const duration = 2000;
            const start = performance.now();

            /** Ease-out cubic counter animation */
            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(eased * target);
              if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((el) => counterObserver.observe(el));

    // ================================
    // 3. SCROLL EFFECTS (throttled via rAF)
    // ================================
    const scrollProgress = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const heroBg = document.querySelector('.hero__bg img');
    const timeline = document.getElementById('timeline');
    const timelineProgress = document.getElementById('timeline-progress');
    const timelineMarkers = document.querySelectorAll('.timeline__marker');
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll progress bar
          if (scrollProgress) {
            const docHeight =
              document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.style.width =
              ((window.scrollY / docHeight) * 100).toFixed(1) + '%';
          }

          // Navbar transparent-to-white transition
          if (navbar) {
            navbar.classList.toggle('navbar--scrolled', window.scrollY > 80);
          }

          // Hero parallax
          if (heroBg && window.scrollY < window.innerHeight) {
            heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.3}px)`;
          }

          // Timeline progress line and marker activation
          if (timeline && timelineProgress) {
            const rect = timeline.getBoundingClientRect();
            const windowCenter = window.innerHeight * 0.6;
            const progress = Math.max(
              0,
              Math.min(1, (windowCenter - rect.top) / rect.height)
            );
            timelineProgress.style.height = (progress * 100).toFixed(1) + '%';

            timelineMarkers.forEach((marker) => {
              marker.classList.toggle(
                'active',
                marker.getBoundingClientRect().top < windowCenter
              );
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial call

    // ================================
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Navbar height
          const position =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener('click', handleAnchorClick)
    );

    // ================================
    // CLEANUP
    // ================================
    return () => {
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
      counterObserver.disconnect();
      anchors.forEach((anchor) =>
        anchor.removeEventListener('click', handleAnchorClick)
      );
    };
  }, []);

  // ============================
  // RENDER — Compose all sections
  // ============================
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Process />
      <PropertyGrid />
      <Metrics />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}

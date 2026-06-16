document.addEventListener("DOMContentLoaded", () => {
  // --- Custom Cursor ---
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");

  if (cursor && ring) {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    });

    const animateRing = () => {
      // Easing calculation for organic inertia
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(animateRing);
    };

    animateRing();

    // Attach hovering effect listeners
    const hoverables = document.querySelectorAll(
      "a, button, select, input, textarea, .service-card, .testimonial-card, .faq-item, .about-card, #back-top, .hamburger",
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("hovering"),
      );
    });
  }

  // --- Scroll Actions: Navbar, Progress, Back-to-Top ---
  const navbar = document.getElementById("navbar");
  const progressBar = document.getElementById("progress-bar");
  const backTop = document.getElementById("back-top");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Progress indicator
      if (progressBar && docHeight > 0) {
        const scrolledPct = (scrollY / docHeight) * 100;
        progressBar.style.width = `${scrolledPct}%`;
      }

      // Sticky Nav transition
      if (navbar) {
        if (scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }

      // Back-to-Top display
      if (backTop) {
        if (scrollY > 400) {
          backTop.classList.add("visible");
        } else {
          backTop.classList.remove("visible");
        }
      }
    },
    { passive: true },
  );

  // Back-to-Top Click Handler
  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Mobile Hamburger Menu ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");

      // Toggle aria-expanded for screen-readers
      const isOpen = navLinks.classList.contains("open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile links on link clicks
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Smooth Accordion Toggle (FAQ) ---
  window.toggleFaq = (el) => {
    const isOpen = el.classList.contains("open");

    // Close other open tabs for accordion effect
    document.querySelectorAll(".faq-item.open").forEach((item) => {
      if (item !== el) {
        item.classList.remove("open");
        const panel = item.querySelector(".faq-a");
        if (panel) panel.style.maxHeight = null;
      }
    });

    // Toggle target tab
    el.classList.toggle("open");
    const panel = el.querySelector(".faq-a");
    if (panel) {
      if (el.classList.contains("open")) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      } else {
        panel.style.maxHeight = null;
      }
    }
  };

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // --- Stat Numbers Count-up Animation ---
  const statsSection = document.querySelector(".hero-stats");
  const statNumbers = document.querySelectorAll(".stat-num");

  if (statsSection && statNumbers.length > 0) {
    const animateStats = () => {
      statNumbers.forEach((el) => {
        const fullText = el.textContent.trim();
        const valueNum = parseInt(fullText, 10);
        const suffix = fullText.replace(/[0-9]/g, ""); // e.g., '+', '%'

        let startVal = 0;
        const duration = 2000; // ms
        let startTime = null;

        const updateVal = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentVal = Math.floor(progress * valueNum);

          el.innerHTML = `${currentVal}<span class="plus">${suffix}</span>`;

          if (progress < 1) {
            requestAnimationFrame(updateVal);
          }
        };

        requestAnimationFrame(updateVal);
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect(); // Trigger once
        }
      },
      {
        threshold: 0.4,
      },
    );

    statsObserver.observe(statsSection);
  }

  // --- Form Submission Mockup ---
  const contactForm = document.getElementById("contactFormBtn");
  const formMsg = document.getElementById("formMsg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("click", (e) => {
      e.preventDefault();

      // Simple visual validation
      const fields = document.querySelectorAll(
        "#contactForm input, #contactForm select, #contactForm textarea",
      );
      let valid = true;

      fields.forEach((field) => {
        // Skip optional fields or fields that don't have standard checks
        if (field.hasAttribute("required") && !field.value.trim()) {
          valid = false;
          field.style.borderColor = "red";
        } else {
          field.style.borderColor = "";
        }
      });

      formMsg.style.color = "var(--accent-gold)";
      formMsg.textContent = "Sending message...";

      setTimeout(() => {
        formMsg.style.color = "var(--primary)";
        formMsg.textContent =
          "✓ Message sent successfully! We will get in touch shortly.";

        // Reset form inputs
        fields.forEach((field) => {
          if (field.tagName === "SELECT") {
            field.selectedIndex = 0;
          } else {
            field.value = "";
          }
        });
      }, 1500);
    });
  }
});

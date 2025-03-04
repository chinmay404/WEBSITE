// Initialize AOS
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })
  
  // Typed.js
  document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed("#typed", {
      strings: ["Software Engineer", "Generative AI Enthusiast", "Problem Solver", "Continuous Learner"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    })
  })
  
  // Particles.js
  // particlesJS("particles-js", {
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //     },
  //     color: {
  //       value: "#4361ee",
  //     },
  //     shape: {
  //       type: "circle",
  //       stroke: {
  //         width: 0,
  //         color: "#000000",
  //       },
  //       polygon: {
  //         nb_sides: 5,
  //       },
  //     },
  //     opacity: {
  //       value: 0.5,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 1,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: 3,
  //       random: true,
  //       anim: {
  //         enable: false,
  //         speed: 40,
  //         size_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 150,
  //       color: "#4361ee",
  //       opacity: 0.4,
  //       width: 1,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 2,
  //       direction: "none",
  //       random: false,
  //       straight: false,
  //       out_mode: "out",
  //       bounce: false,
  //       attract: {
  //         enable: false,
  //         rotateX: 600,
  //         rotateY: 1200,
  //       },
  //     },
  //   },
  //   interactivity: {
  //     detect_on: "canvas",
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: "grab",
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 140,
  //         line_linked: {
  //           opacity: 1,
  //         },
  //       },
  //       bubble: {
  //         distance: 400,
  //         size: 40,
  //         duration: 2,
  //         opacity: 8,
  //         speed: 3,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //       push: {
  //         particles_nb: 4,
  //       },
  //       remove: {
  //         particles_nb: 2,
  //       },
  //     },
  //   },
  //   retina_detect: true,
  // })
  
  // Custom Cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")
  
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })
  
  document.addEventListener("mousedown", () => {
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursorFollower.style.width = "25px"
    cursorFollower.style.height = "25px"
  })
  
  document.addEventListener("mouseup", () => {
    cursor.style.width = "10px"
    cursor.style.height = "10px"
    cursorFollower.style.width = "30px"
    cursorFollower.style.height = "30px"
  })
  
  // Sticky Header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 100)
  
    // Back to Top Button
    const backToTop = document.querySelector(".back-to-top")
    backToTop.classList.toggle("active", window.scrollY > 500)
  })
  
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn")
  const nav = document.querySelector("nav")
  
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open")
    nav.classList.toggle("active")
  })
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open")
      nav.classList.remove("active")
    })
  })
  
  // Active Navigation Link
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })
  
  // Dark Mode Toggle
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.querySelector("body")
  
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
  
    if (body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      localStorage.setItem("theme", "dark")
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      localStorage.setItem("theme", "light")
    }
  })
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark-mode")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }
  
  // Back to Top Button Click
  const backToTop = document.querySelector(".back-to-top")
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  
  // Download CV Button
  // const downloadCvBtn = document.getElementById("download-cv")
  // downloadCvBtn.addEventListener("click", (e) => {
  //   e.preventDefault()
  //   // In a real implementation, this would link to an actual CV file
  //   alert("CV download would start here in a real implementation.")
  // })
  
  // Form Submission
  const contactForm = document.getElementById("contactForm")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`)
  
    // Reset form
    contactForm.reset()
  })
  
  // Project Card Hover Effect for Mobile
  const projectCards = document.querySelectorAll(".project-card")
  if ("ontouchstart" in window) {
    projectCards.forEach((card) => {
      card.addEventListener("click", function () {
        const cardInner = this.querySelector(".project-card-inner")
        cardInner.style.transform = cardInner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)"
      })
    })
  }
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Preloader
  window.addEventListener("load", () => {
    const preloader = document.createElement("div")
    preloader.className = "preloader"
    preloader.innerHTML = '<div class="loader"></div>'
    document.body.appendChild(preloader)
  
    setTimeout(() => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.remove()
      }, 500)
    }, 1000)
  })
  
  
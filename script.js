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
  // Form Submission with Toast Notifications
// Form Submission with Custom Toast Notifications
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    const formData = {
      name: name,
      email: email,
      message: message,
      toEmail: "chinmaypisal1718@gmail.com"
    };
    

    if (!name || !email || !message) {
      showToast('Please fill in all fields.', 'danger');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showToast('Please enter a valid email address.', 'danger');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }



    if (message.length < 10) {
      showToast('Please enter a message with at least 10 characters.', 'danger');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;}
    // Use your API endpoint
    const response = await fetch('https://vawrr3pkm4.execute-api.ap-south-1.amazonaws.com/default/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result);
    
    if (response.ok) {
      showToast(`Thank you for your message, ${name}! I'll get back to you soon.`, 'success');
      contactForm.reset();
    } else {
      console.error('API Error:', result);
      showToast('Sorry, there was an error sending your message. Please try again later.', 'danger');
    }
  } catch (error) {
    console.error('Network Error:', error);
    showToast('Unable to connect to the server. Please check your internet connection and try again.', 'danger');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
    contactForm.reset();
  }
});

// Toast notification function
function showToast(message, type = 'primary') {
  // Get toast container or create if doesn't exist
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `custom-toast toast-${type}`;
  
  // Create toast content
  toast.innerHTML = `
    <div class="toast-body">${message}</div>
    <button class="toast-close">&times;</button>
  `;
  
  // Add toast to container
  toastContainer.appendChild(toast);
  
  // Close button functionality
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toast);
  });
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 5000);
  
  return toast;
}

// Function to remove toast with animation
function removeToast(toast) {
  toast.style.animation = 'fadeOut 0.3s forwards';
  
  // Remove from DOM after animation completes
  setTimeout(() => {
    if (toast.parentElement) {
      toast.parentElement.removeChild(toast);
    }
  }, 300); // Animation duration
}
  
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
  
  

  // Projects section interactive background - Ultra Subtle Premium Version
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('projects-bg');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouseX = 0;
  let mouseY = 0;
  
  // Set canvas size
  function setCanvasSize() {
    const projectsSection = document.getElementById('projects');
    width = projectsSection.offsetWidth;
    height = projectsSection.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }
  
  // Create particles
  function initParticles() {
    particles = [];
    // Reduced particle count for subtlety
    const particleCount = Math.floor(width * height / 30000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Smaller size for subtlety
        size: Math.random() * 2 + 0.5,
        // Slower movement
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.15 + 0.02,
        color: getRandomColor()
      });
    }
  }
  
  // Get ultra subtle color palette
  function getRandomColor() {
    const colors = [
      'rgba(18, 24, 38, 0.4)',   // Very dark blue
      'rgba(22, 30, 46, 0.3)',   // Dark slate
      'rgba(30, 41, 59, 0.25)',  // Dark blue gray
      'rgba(51, 65, 85, 0.2)',   // Medium slate
      'rgba(71, 85, 105, 0.15)'  // Light slate
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Draw very subtle connections between nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Shorter connection distance
        if (distance < 100) {
          ctx.beginPath();
          // Ultra subtle line opacity
          ctx.strokeStyle = `rgba(71, 85, 105, ${0.05 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.3;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Draw canvas
  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Almost invisible gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0.01)');
    gradient.addColorStop(1, 'rgba(30, 41, 59, 0.02)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Draw connections first (behind particles)
    drawConnections();
    
    // Draw and update particles
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Create extremely subtle interaction with mouse
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 180;
      
      if (distance < maxDistance) {
        // Gentler force
        const force = (1 - distance / maxDistance) * 0.6;
        particle.x += dx * force * 0.005;
        particle.y += dy * force * 0.005;
      }
      
      // Regular movement
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
    });
    
    requestAnimationFrame(draw);
  }
  
  // Track mouse position
  document.addEventListener('mousemove', function(e) {
    const projectsSection = document.getElementById('projects');
    const rect = projectsSection.getBoundingClientRect();
    
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouseX = e.clientX;
      mouseY = e.clientY - rect.top;
    }
  });
  
  // Initialize
  window.addEventListener('resize', function() {
    setCanvasSize();
    initParticles();
  });
  
  setCanvasSize();
  initParticles();
  draw();
});
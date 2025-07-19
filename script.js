document.addEventListener('DOMContentLoaded', function() {
    // Particles.js initialization
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00f0ff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00a8b5",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Modal functionality
    const modalBtns = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modals.forEach(modal => modal.classList.remove('active'));
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    overlay.addEventListener('click', closeModal);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Project carousel
    const projects = document.querySelectorAll('.project');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentProject = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.remove('active');
            if (i === index) {
                project.classList.add('active');
            }
        });
    }

    function nextProject() {
        currentProject = (currentProject + 1) % projects.length;
        showProject(currentProject);
    }

    function prevProject() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(currentProject);
    }

    nextBtn.addEventListener('click', nextProject);
    prevBtn.addEventListener('click', prevProject);

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Easter egg for Solo Leveling fans
    const easterEgg = document.querySelector('.easter-egg');
    if (easterEgg) {
        easterEgg.addEventListener('click', function() {
            this.textContent = "System: [Player Keerthi Prasath] has reached max level!";
            this.style.color = "#ff0000";
            this.style.textShadow = "0 0 10px #ff0000";
            
            setTimeout(() => {
                this.textContent = "Shadow Monarch Mode: Activated";
                this.style.color = "#00f0ff";
                this.style.textShadow = "none";
            }, 3000);
        });
    }
});

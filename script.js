        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Highlight active section tab
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav ul li a");
    
        function highlightCurrentSection() {
            let current = "";
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });
    
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        }
    
        window.addEventListener("scroll", highlightCurrentSection);
    
        // Set "Home" tab as active on page load
        window.addEventListener("DOMContentLoaded", () => {
            const homeLink = document.querySelector('nav ul li a[href="#home"]');
            homeLink.classList.add("active");
            highlightCurrentSection();
        });

        // ABOUT ME SECTION
        document.addEventListener("DOMContentLoaded", () => {
            const aboutMeSection = document.getElementById("about");
            const smallText = document.querySelector(".small-text");
            const largeText = document.querySelector(".large-text");
            const aboutMeImage = document.querySelector(".about-image");
            const introText = document.querySelector(".intro-text");
            const description = document.querySelector(".description");
            const resume = document.querySelector(".resume");
            const aboutMeLeft = document.querySelector(".about-left");
            const aboutMeRight = document.querySelector(".about-right");
            const greenBorder = document.querySelector(".green-border");

            const animateElement = (element, transform, opacity) => {
                element.style.transform = transform;
                element.style.opacity = opacity;
                element.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
            };

            const handleScroll = () => {
                const sectionTop = aboutMeSection.getBoundingClientRect().top;
                const sectionBottom = aboutMeSection.getBoundingClientRect().bottom;
                const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

                if (isVisible) {
                    animateElement(smallText, "translateX(0)", "2");
                    animateElement(largeText, "translateX(0)", "2");
                    animateElement(aboutMeImage, "translateY(0)", "2");
                    animateElement(introText, "translateX(0)", "2");
                    animateElement(description, "translateX(0)", "2");
                    animateElement(resume, "translateX(0)", "3");
                    animateElement(aboutMeLeft, "translateY(0)", "2");
                    animateElement(aboutMeRight, "translateX(0)", "2");
                    animateElement(greenBorder, "translateX(0)", "2");

                } else {
                    animateElement(smallText, "translateX(-100%)", "0");
                    animateElement(largeText, "translateX(-100%)", "0");
                    animateElement(aboutMeImage, "translateY(100%)", "0");
                    animateElement(introText, "translateX(100px)", "0");
                    animateElement(description, "translateX(100px)", "0");
                    animateElement(resume, "translateX(100px)", "0");
                    animateElement(aboutMeLeft, "translateY(100px)", "0");
                    animateElement(aboutMeRight, "translateX(100px)", "0");
                    animateElement(greenBorder, "translateX(-100%)", "0");
                }
            };

            window.addEventListener("scroll", handleScroll);
        });

        // SKILLS SECTION
        document.addEventListener("DOMContentLoaded", () => {
            const skillsSection = document.getElementById("skills");
            const skillssmallText = document.querySelector(".skills-heading .skills-small-text");
            const skillslargeText = document.querySelector(".skills-heading .skills-large-text");
            const skillssmallIcon = document.querySelector(".skills-heading .small-icon");
            const skillslargeIcon = document.querySelector(".skills-heading .large-icon");
        
            const animateElement = (element, transform, opacity) => {
                element.style.transform = transform;
                element.style.opacity = opacity;
                element.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
            };
        
            const handleScroll = () => {
                const sectionTop = skillsSection.getBoundingClientRect().top;
                const sectionBottom = skillsSection.getBoundingClientRect().bottom;
                const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;
        
                if (isVisible) {
                    animateElement(skillssmallText, "translateX(0)", "2");
                    animateElement(skillslargeText, "translateX(0)", "2");
                    animateElement(skillssmallIcon, "translateX(0)", "2");
                    animateElement(skillslargeIcon, "translateX(0)", "2");
                } else {
                    animateElement(skillssmallText, "translateX(-100%)", "0");
                    animateElement(skillslargeText, "translateX(-100%)", "0");
                    animateElement(skillssmallIcon, "translateX(-100%)", "0");
                    animateElement(skillslargeIcon, "translateX(-100%)", "0");
                }
            };
        
            window.addEventListener("scroll", handleScroll);
        });
        
        document.addEventListener("DOMContentLoaded", function() {
            const iconBoxes = document.querySelectorAll(".icon-box");
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = "translateY(0)";
                    } else {
                        entry.target.style.opacity = 0;
                        entry.target.style.transform = "translateY(80px)";
                    }
                });
            }, observerOptions);
            iconBoxes.forEach(box => {
                observer.observe(box);
                });
        });
        document.addEventListener("DOMContentLoaded", function() {
            const iconBoxes = document.querySelectorAll(".icon-box");
          
            iconBoxes.forEach(box => {
              box.addEventListener("mouseover", function() {
                this.style.transform = "scale(1.1)"; // Increase size on hover
              });
          
              box.addEventListener("mouseout", function() {
                this.style.transform = "scale(1)"; // Reset size on mouse out
              });
            });
          }); 

        // PROJECTS SECTION
        document.addEventListener("DOMContentLoaded", () => {
            const projectsSection = document.getElementById("projects");
            const projectsSmallText = document.querySelector(".projects-heading .projects-small-text");
            const projectsLargeText = document.querySelector(".projects-heading .projects-large-text");
            const projectsSmallPic = document.querySelector(".projects-heading .projects-small-pic");
            const projectsLargePic = document.querySelector(".projects-heading .projects-large-pic");
        
            const animateElement = (element, transform, opacity) => {
                element.style.transform = transform;
                element.style.opacity = opacity;
                element.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
            };
        
            const handleScroll = () => {
                const sectionTop = projectsSection.getBoundingClientRect().top;
                const sectionBottom = projectsSection.getBoundingClientRect().bottom;
                const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;
        
                if (isVisible) {
                    animateElement(projectsSmallText, "translateX(0)", "2");
                    animateElement(projectsLargeText, "translateX(0)", "2");
                    animateElement(projectsSmallPic, "translateX(0)", "2");
                    animateElement(projectsLargePic, "translateX(0)", "2");
                } else {
                    animateElement(projectsSmallText, "translateX(-100%)", "0");
                    animateElement(projectsLargeText, "translateX(-100%)", "0");
                    animateElement(projectsSmallPic, "translateX(-100%)", "0");
                    animateElement(projectsLargePic, "translateX(-100%)", "0");
                }
            };
        
            window.addEventListener("scroll", handleScroll);
        });
        
        
        document.addEventListener('DOMContentLoaded', () => {
            const projectBlocks = document.querySelectorAll('.project-block');
            const delayStep = 0.2; // Adjust the delay step as needed
            projectBlocks.forEach((block, index) => {
                const delay = index * delayStep + 's';
                block.style.setProperty('--delay', delay);
            });
            
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, observerOptions);
            
            projectBlocks.forEach(block => {
                observer.observe(block);
            });        
            
            projectBlocks.forEach(block => {
            block.addEventListener('mouseover', () => {
                const hoverBox = block.querySelector('.hover-box');
                const greyBox = block.querySelector('.grey-box');
                // hoverBox.style.bottom = '50px'; // Adjust to how much it should float up
                greyBox.style.height = '160px'; // Adjust to the expanded height
            });
            
            block.addEventListener('mouseout', () => {
                const hoverBox = block.querySelector('.hover-box');
                const greyBox = block.querySelector('.grey-box');
                hoverBox.style.bottom = '0';
                greyBox.style.height = '0';
            });
        });
    });

    // CONTACT SECTION
    document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.getElementById("contact");
    const contactSmallText = document.querySelector(".contact-heading .contact-small-text");
    const contactLargeText = document.querySelector(".contact-heading .contact-large-text");
    const contactSmallIcon = document.querySelector(".contact-heading .small-icon");
    const contactLargeIcon = document.querySelector(".contact-heading .large-icon");

    const animateElement = (element, transform, opacity) => {
        element.style.transform = transform;
        element.style.opacity = opacity;
        element.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
    };

    const handleScroll = () => {
        const sectionTop = contactSection.getBoundingClientRect().top;
        const sectionBottom = contactSection.getBoundingClientRect().bottom;
        const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

        if (isVisible) {
            animateElement(contactSmallText, "translateX(0)", "2");
            animateElement(contactLargeText, "translateX(0)", "2");
            animateElement(contactSmallIcon, "translateX(0)", "2");
            animateElement(contactLargeIcon, "translateX(0)", "2");
        } else {
            animateElement(contactSmallText, "translateX(-100%)", "0");
            animateElement(contactLargeText, "translateX(-100%)", "0");
            animateElement(contactSmallIcon, "translateX(-100%)", "0");
            animateElement(contactLargeIcon, "translateX(-100%)", "0");
        }
    };

    window.addEventListener("scroll", handleScroll);
});

    document.addEventListener("DOMContentLoaded", () => {
        const contactSection = document.getElementById("contact");
        const ContactBox = document.querySelector(".contact-box");
        const animateElement = (element, transform, opacity) => {
            element.style.transform = transform;
            element.style.opacity = opacity;
            element.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
        };
        const handleScroll = () => {
            const sectionTop = contactSection.getBoundingClientRect().top;
            const sectionBottom = contactSection.getBoundingClientRect().bottom;
            const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;
            if (isVisible) {
                animateElement(ContactBox, "translateY(0)", "2");
            } else {
                animateElement(ContactBox, "translateY(100%)", "0");
            }
        };
        window.addEventListener("scroll", handleScroll);
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('name').value;     // Name validation
        const nameError = document.getElementById('nameError');
        nameError.textContent = '';
        if (/[^a-zA-Z\s]/.test(name)) {
            nameError.textContent = 'Invalid Name entered. Only letters and spaces are allowed.';
            isValid = false;
        }
        const email = document.getElementById('email').value;     // Email validation
        const emailError = document.getElementById('emailError');
        emailError.textContent = '';
        if (!email.includes('@') || (!email.endsWith('.com') && !email.endsWith('.co.in'))) {
            emailError.textContent = 'Invalid Email. "@" and ".com" or ".co.in" are required.';
            isValid = false;
        }
        const phone = document.getElementById('phone').value;     // Phone validation
        const phoneError = document.getElementById('phoneError');
        phoneError.textContent = '';
        if (/[^0-9]/.test(phone)) {
            phoneError.textContent = 'Invalid number entered. Only digits are allowed.';
            isValid = false;
        }
        if (isValid) {
            alert('Form submitted successfully!');
            // Handle form submission here (e.g., send the data to a server)
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(formGroup => {
            formGroup.addEventListener('click', function(event) {
                event.stopPropagation();             // Stop propagation to prevent the document click listener from being triggered
                formGroups.forEach(group => {             // Remove 'active' class from all form groups except the clicked one
                    if (group !== formGroup) {
                        group.classList.remove('active');
                    }
                });        
                formGroup.classList.toggle('active');             // Toggle 'active' class on the clicked form group
            });
        });
        document.addEventListener('click', function(event) {     // Add a click event listener to the document to detect clicks outside form groups
            const isClickInsideForm = Array.from(formGroups).some(group => group.contains(event.target));
            if (!isClickInsideForm) {
                formGroups.forEach(group => group.classList.remove('active'));
            }
        });
    });

    // FOOTER SECTION
    document.querySelectorAll('.footer-column ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'very smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const currentYearElement = document.getElementById('currentYear');
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    });


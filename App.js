 // Navbar scroll effect
 const navbar = document.getElementById('navbar');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });

 // Mobile menu toggle
 const burger = document.getElementById('burger');
 const navLinks = document.getElementById('navLinks');
 burger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking on a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Typing animation
 const texts = [
     'Développeur Full Stack',
     'Créateur d\'Expériences Web',
     'Passionné de Technologie',
     'Problem Solver'
 ];
 let textIndex = 0;
 let charIndex = 0;
 let isDeleting = false;
 const typingElement = document.getElementById('typingText');

 function type() {
     const currentText = texts[textIndex];
     
     if (isDeleting) {
         typingElement.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor"></span>';
         charIndex--;
     } else {
         typingElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
         charIndex++;
     }

     let typeSpeed = isDeleting ? 50 : 100;

     if (!isDeleting && charIndex === currentText.length) {
         typeSpeed = 2000;
         isDeleting = true;
     } else if (isDeleting && charIndex === 0) {
         isDeleting = false;
         textIndex = (textIndex + 1) % texts.length;
         typeSpeed = 500;
     }

     setTimeout(type, typeSpeed);
 }

 type();

 // Scroll reveal animation
 const reveals = document.querySelectorAll('.reveal');
 
 function revealOnScroll() {
     reveals.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         
         if (elementTop < windowHeight - 100) {
             element.classList.add('active');
         }
     });
 }

 window.addEventListener('scroll', revealOnScroll);
 revealOnScroll();

 // Smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Form submission
 document.getElementById('contactForm').addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Message envoyé ! (Ceci est une démo)');
     e.target.reset();
 });
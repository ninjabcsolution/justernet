import React, { useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">LOGO</div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <motion.h1 variants={fadeInUp}>
                We're a Team of Engineers, Designers, Product Managers, and Problem Solvers.
              </motion.h1>
              <motion.p variants={fadeInUp}>
                We are bound by our commitment to help Teams succeed and our culture of Innovation
                Software Development and Services, we at JusterNet Guide You Through Your Company's
                Digital Transformation. We Provide Expert Consulting, Development, & Implementation
                of Tomorrows Technology Today! We deliver exceptional custom technology and digital
                experiences for the enterprise.​We design, develop and implement ground breaking
                software development with our dedicated team to help you through the transition.
                Working on Micro-services, Docker, Kubernetes or DevOps, we at Justernet can provide
                you the solution.​We expertise in Microsoft's Azure cloud platform to build, deploy,
                and scale your apps. Transitioning from On-Premise to Hybrid environment or entirely
                on Cloud? Our Team can help you with cost effective manner. ETL (Etract Transform
                and Load) or ELT (Extract Load and Transform)? We provide data transformation using
                Azure Data Factory, Azure Data Bricks, Azure DataLake, Spark, Machine Learning and
                Data Science and PowerBI tools
              </motion.p>
              <motion.div className="hero-buttons" variants={fadeInUp}>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <motion.div
                className="hero-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="circle-inner"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                ></motion.div>
                <div className="circle-dots">
                  <motion.div
                    className="dot"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  ></motion.div>
                  <motion.div
                    className="dot"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="dot"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  <motion.div
                    className="dot"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              We help you to build high-quality digital solutions and products as well as deliver a
              wide range of related professional services. We are providing world-class service to
              our clients.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Web App Development</h3>
              <p>
                Our Custom Web Development Services Include Both Front-End And Back-End Development.
                Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our
                Developers Are Up For The Challenge.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2.18"
                    ry="2.18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line x1="7" y1="2" x2="7" y2="22" stroke="currentColor" strokeWidth="2" />
                  <line x1="17" y1="2" x2="17" y2="22" stroke="currentColor" strokeWidth="2" />
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Mobile App Development</h3>
              <p>
                We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android
                And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile
                App That Runs Smoothly On Multiple Platforms.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8 14s1.5 2 4 2 4-2 4-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="9"
                    y1="9"
                    x2="9.01"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="15"
                    y1="9"
                    x2="15.01"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Game Development</h3>
              <p>
                Our bespoke Game Development services offer comprehensive solutions for designing,
                building, and launching engaging and interactive games. From concept art to
                full-fledged game design, our expert team specializes in both 2D and 3D game
                development.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.5 2A2.5 2.5 0 0 1 12 4.5V9a2.5 2.5 0 0 1-4.96.44L7 9.5A2.5 2.5 0 0 1 9.5 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M14.5 6A2.5 2.5 0 0 1 17 8.5a2.5 2.5 0 0 1-2.5 2.5h-.5A2.5 2.5 0 0 1 12 8.5V6a2.5 2.5 0 0 1 2.5 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 12.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M8.5 12H12" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 16.5H8.5A2.5 2.5 0 1 1 8.5 12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Artificial Intelligence</h3>
              <p>
                Leveraging cutting-edge AI, we offer solutions that transform business landscapes.
                Our services include machine learning, automated analytics, and cognitive
                technologies to enhance decision-making and operational efficiency. We build
                intelligent systems that are not only innovative but also integral to driving
                business value and competitive edge.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Data Extraction/Transformation</h3>
              <p>
                Data Is Every Thing And Every Where. We Have An Expert Architects And Developers For
                Handling Large Amount Of Data. We Have Migrated Data From On-Premises To Cloud, From
                FTP File Share To Cloud. We Have Experience Is Using Databricks, Snowflake, Azure
                Data Factory, Many More Tools.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 19v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Cloud Computing</h3>
              <p>
                We Have Cloud Certified Architects And Developers Who Can Provide Complex Solution
                To The Cloud Problems. We Design And Develop Using The Best Cloud Practises And
                Cloud Design Patterns. We Can Provide On-Prem To Cloud Migration, Or We Can Provide
                Cost Effective Solution For Hosting On Cloud.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Blockchain Development</h3>
              <p>
                We specialize in blockchain technology and decentralized applications (DApps). Our
                expertise includes smart contract development, cryptocurrency solutions, NFT
                platforms, and Web3 integration. We help businesses leverage blockchain for
                transparency, security, and innovation in their digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>
              The objective of IT Company is to enable a large number of youth to take up
              industry-relevant skill training that will help them in securing a better livelihood.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Errands App</h3>
                <p>
                  Errands Is A Shopping Organization App Which Gives Customers Better Experience
                  With Shopping. Customers Can Add Their Favorite Stores, Add Items, Check Real Time
                  Price, Geo Fence The Items When Near The Store.
                </p>
                <div className="project-tags">
                  <span>Mobile App</span>
                  <span>Shopping</span>
                  <span>Real-time</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>PDF Chat</h3>
                <p>
                  PDF Chat transforms your document interactions, offering an embedded chat feature
                  within PDF files. Collaborate effortlessly, highlight text, and discuss changes in
                  real-time, ensuring clarity and swift feedback for teams and clients alike. It's
                  the perfect tool for enhancing communication on documents without ever leaving the
                  PDF environment.
                </p>
                <div className="project-tags">
                  <span>Document</span>
                  <span>Collaboration</span>
                  <span>Real-time Chat</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M7 8L10 11L17 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Card Game</h3>
                <p>
                  Our Card Game service reshapes digital entertainment, presenting a collection of
                  card games that blend strategic depth with ease of play. Users can build decks,
                  challenge opponents, and experience new twists to beloved classics. Engaging
                  design and interactive elements bring the virtual tabletop to life, making every
                  match memorable.
                </p>
                <div className="project-tags">
                  <span>Gaming</span>
                  <span>Strategy</span>
                  <span>Multiplayer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Channel Section */}
      <section className="video-channel">
        <div className="container">
          <div className="section-header">
            <h2>Our Channel</h2>
            <p>Watch our latest content and insights</p>
          </div>

          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/mGptIB1dEZ0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How We Partner Section */}
      <section className="partnership">
        <div className="container">
          <div className="section-header">
            <h2>How we partner</h2>
          </div>

          <div className="partnership-grid">
            <div className="partnership-card">
              <div className="partnership-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 11H15M9 15H15M17 21V7A2 2 0 0 0 15 5H9A2 2 0 0 0 7 7V21L12 18L17 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Discovery</h3>
              <p>
                We start by understanding your business goals, target audience, and project
                requirements through detailed consultation.
              </p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <polygon
                    points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Strategy</h3>
              <p>
                We develop a comprehensive strategy and roadmap tailored to your specific needs and
                objectives.
              </p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2.18"
                    ry="2.18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line x1="7" y1="2" x2="7" y2="22" stroke="currentColor" strokeWidth="2" />
                  <line x1="17" y1="2" x2="17" y2="22" stroke="currentColor" strokeWidth="2" />
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Execution</h3>
              <p>
                Our expert team brings your vision to life with precision, quality, and attention to
                detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Got an idea you want to bring to life?</h2>
            <p>Let's discuss your project and see how we can help you achieve your goals.</p>
            <button className="btn-primary">Start a project</button>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-process">
        <div className="container">
          <div className="section-header">
            <h2>Work process</h2>
            <p>Our streamlined approach ensures efficient delivery and exceptional results</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Consultation & Discovery</h3>
              <p>
                We begin with understanding your vision, goals, and requirements through detailed
                consultation sessions.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Strategy & Planning</h3>
              <p>
                We develop a comprehensive strategy and project roadmap tailored to your specific
                needs.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design & Development</h3>
              <p>
                Our team creates beautiful designs and develops robust solutions using cutting-edge
                technologies.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Testing & Launch</h3>
              <p>
                Rigorous testing ensures quality, followed by a smooth launch and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries">
        <div className="container">
          <div className="section-header">
            <h2>Industries</h2>
            <p>We serve diverse industries with tailored solutions</p>
          </div>

          <div className="industries-grid">
            <div className="industry-card healthcare">
              <h3>Healthcare</h3>
              <p>
                Digital solutions for healthcare providers, improving patient care and operational
                efficiency.
              </p>
            </div>

            <div className="industry-card fintech">
              <h3>Fintech</h3>
              <p>
                Secure and innovative financial technology solutions for modern banking and
                payments.
              </p>
            </div>

            <div className="industry-card ecommerce">
              <h3>E-commerce</h3>
              <p>
                Comprehensive e-commerce platforms that drive sales and enhance customer experience.
              </p>
            </div>

            <div className="industry-card education">
              <h3>Education</h3>
              <p>
                Educational technology solutions that transform learning experiences and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <motion.section
        className="technologies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Technologies</h2>
            <p>We work with cutting-edge technologies to deliver exceptional results</p>
          </motion.div>

          <motion.div
            className="tech-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="tech-category" variants={scaleIn}>
              <motion.h3 variants={fadeInUp} whileHover={{ scale: 1.05, color: '#8b5cf6' }}>
                Frontend
              </motion.h3>
              <motion.div className="tech-list" variants={staggerContainer}>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  React
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Vue.js
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Angular
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  TypeScript
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <motion.h3 variants={fadeInUp} whileHover={{ scale: 1.05, color: '#8b5cf6' }}>
                Backend
              </motion.h3>
              <motion.div className="tech-list" variants={staggerContainer}>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Node.js
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Python
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Java
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  PHP
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <motion.h3 variants={fadeInUp} whileHover={{ scale: 1.05, color: '#8b5cf6' }}>
                Database
              </motion.h3>
              <motion.div className="tech-list" variants={staggerContainer}>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  MongoDB
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  PostgreSQL
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  MySQL
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Redis
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <motion.h3 variants={fadeInUp} whileHover={{ scale: 1.05, color: '#8b5cf6' }}>
                Cloud
              </motion.h3>
              <motion.div className="tech-list" variants={staggerContainer}>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  AWS
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Azure
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Google Cloud
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Docker
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <motion.h3 variants={fadeInUp} whileHover={{ scale: 1.05, color: '#8b5cf6' }}>
                Blockchain
              </motion.h3>
              <motion.div className="tech-list" variants={staggerContainer}>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Ethereum
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Solidity
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Web3.js
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                >
                  Smart Contracts
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Team Members</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>What our clients say about working with us</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Working with this team was an absolute pleasure. They delivered exactly what we
                  needed and exceeded our expectations in every way."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>CEO, TechStart Inc.</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The attention to detail and quality of work is outstanding. Our new platform has
                  significantly improved our business operations."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>CTO, InnovateCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2>Success stories</h2>
            <p>Real results for real businesses</p>
          </div>

          <div className="stories-grid">
            <div className="story-card">
              <h3>E-commerce Platform Redesign</h3>
              <p>
                Increased conversion rates by 40% through improved UX design and performance
                optimization.
              </p>
              <button className="btn-link">Read More</button>
            </div>

            <div className="story-card">
              <h3>Healthcare Management System</h3>
              <p>
                Streamlined operations for a major healthcare provider, reducing administrative time
                by 60%.
              </p>
              <button className="btn-link">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Connect with us</h2>
              <p>Ready to start your next project? Get in touch with our team.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <h4>Our Office</h4>
                  <p>
                    1755 Park Street Suite 200
                    <br />
                    Naperville, IL 60563
                    <br />
                    United States
                  </p>
                </div>

                <div className="contact-item">
                  <h4>Contact Info</h4>
                  <p>
                    Phone: 630.754.8898
                    <br />
                    Fax: 877.990.4251
                  </p>
                </div>

                <div className="contact-item">
                  <h4>Email Contacts</h4>
                  <p>
                    HR: Hr@JusterNet.com
                    <br />
                    Accounts: Account@JusterNet.com
                    <br />
                    Support: Support@JusterNet.com
                    <br />
                    General: Naina@JusterNet.com
                  </p>
                </div>
              </div>

              <button className="btn-primary">Get Started</button>
            </div>

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-map">
            <div className="section-header">
              <h3>Our Location</h3>
              <p>Visit us at our Naperville office</p>
            </div>
            <div className="map-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298070.9880645587!2d-88.204126991756!3d41.75083941438359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5a5b5f4c6e5b%3A0xafe0b0b8b8ae8c87!2sNaperville%2C%20IL%2C%20USA!5e0!3m2!1sen!2sca!4v1646061293099!5m2!1sen!2sca"
                  title="JusterNet Office Location"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">LOGO</div>
              <p>Creating digital experiences that drive business growth and success.</p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#web-dev">Web Development</a>
                </li>
                <li>
                  <a href="#ui-ux">UI/UX Design</a>
                </li>
                <li>
                  <a href="#mobile">Mobile Apps</a>
                </li>
                <li>
                  <a href="#strategy">Digital Strategy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="#documentation">Documentation</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slider from 'react-slick';
import Header from './Header';
import JusterNetLogo from './JusterNetLogo_V1';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import emailjs from '@emailjs/browser';
import { sendContactEmail } from './sendgridService';

const SERVICE_ID = 'service_nvwgzc6';
const TEMPLATE_ID = 'template_3uc9jyo';
const PUBLIC_KEY = 'QEM1vHqgf3x2SPtnR';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      subject: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      message: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
  });

  // Go to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
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

  // Testimonials slider settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formik.isValid, formik.errors);
    if (formik.touched && formik.isValid) {
      try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formik.values, {
          publicKey: PUBLIC_KEY,
        });

        if (response.status !== 200) {
          return Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: `Failed to send email. Please try again later.`,
          });
        }

        formik.resetForm();

        return Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `Your email was sent successfully!`,
        });
      } catch (error) {
        // Handle specific EmailJS errors
        if (error && error.message && typeof error.message === 'string') {
          if (error.message.includes('Invalid template')) {
            return Swal.fire({
              icon: 'error',
              title: 'Failed!',
              text: `Email template configuration error. Please contact support.`,
            });
          }
          if (error.message.includes('Invalid service')) {
            return Swal.fire({
              icon: 'error',
              title: 'Failed!',
              text: `Email service configuration error. Please contact support.`,
            });
          }
          if (error.message.includes('Invalid public key')) {
            return Swal.fire({
              icon: 'error',
              title: 'Failed!',
              text: `Email service configuration error. Please contact support.`,
            });
          }
        }
      }
    }

    // try {
    //   const result = await sendContactEmail(formik.values);

    //   if (result.success) {
    //     formik.resetForm();
    //     return Swal.fire({
    //       icon: 'success',
    //       title: 'Success!',
    //       text: `Your email was sent successfully!`,
    //     });
    //   } else {
    //     return Swal.fire({
    //       icon: 'error',
    //       title: 'Failed!',
    //       text: result.message || 'Failed to send message. Please try again later.',
    //     });
    //   }
    // } catch (error) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Failed!',
    //     text: 'An unexpected error occurred. Please try again later.',
    //   });
    // } finally {
    // }
    // }
  };

  // Work Process Step Component
  const ProcessStep = ({ number, badge, title, description, className, variants }) => (
    <motion.div className={`process-step ${className}`}>
      <motion.div className="step-number" whileHover={{ scale: 1.1, rotate: 5 }}>
        {number}
      </motion.div>
      <div className="step-badge">{badge}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="step-connector"></div>
    </motion.div>
  );

  return (
    <div className="App">
      {/* Go to Top Button */}
      <motion.button
        className={`go-to-top ${showGoToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showGoToTop ? 1 : 0,
          scale: showGoToTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M5 12L12 5L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <Header />

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <motion.h1 variants={fadeInUp}>
                Transforming Ideas Into
                <span className="gradient-text"> Digital Reality</span>
              </motion.h1>
              <motion.p variants={fadeInUp}>
                We're a team of passionate engineers, designers, and innovators dedicated to
                building cutting-edge digital solutions. From AI-powered applications to blockchain
                platforms, we turn your vision into scalable, future-ready technology that drives
                real business growth.
              </motion.p>
              <motion.div className="hero-buttons" variants={fadeInUp}>
                {/* <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button> */}
                <motion.a
                  href="#portfolio"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div className="section-header">
            <h2>Our Services</h2>
            <p>
              We help you to build high-quality digital solutions and products as well as deliver a
              wide range of related professional services. We are providing world-class service to
              our clients.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Artificial Intelligence</h3>
              <p>
                We design and deploy AI-driven solutions that revolutionize how businesses operate.
                From predictive analytics and natural language processing to computer vision and
                intelligent automation, our expertise helps organizations unlock deeper insights,
                streamline processes, and accelerate innovation.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Node */}
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                  {/* Top Left Node */}
                  <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                  {/* Top Right Node */}
                  <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                  {/* Bottom Left Node */}
                  <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                  {/* Bottom Right Node */}
                  <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />

                  {/* Connections */}
                  <line x1="8" y1="6" x2="10" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="6" x2="14" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="18" x2="10" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="18" x2="14" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="6"
                    y1="18"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </svg>
              </motion.div>
              <h3>Machine Learning</h3>
              <p>
                We design, build, and deploy machine learning solutions that transform data into
                actionable insights. Our expertise spans supervised and unsupervised learning, deep
                learning, natural language processing, and predictive analytics. From data
                preprocessing and feature engineering to model training, optimization, and
                deployment, we create scalable ML systems that enable accurate predictions, uncover
                hidden patterns, and automate complex decision-making—empowering businesses to
                innovate with confidence.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 6V18" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 6V18" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 10H20" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 14H20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
              <h3>Blockchain Development</h3>
              <p>
                We deliver end-to-end blockchain solutions, from smart contract development and
                decentralized applications (DApps) to NFT platforms, cryptocurrency systems, and
                Web3 integration. Our expertise ensures secure, scalable, and transparent
                implementations that drive innovation, enhance efficiency, and build trust through
                distributed ledger technology.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Web App Development</h3>
              <p>
                Our Custom Web Development Services Include Both Front-End And Back-End Development.
                Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our
                Developers Are Up For The Challenge.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Mobile App Development</h3>
              <p>
                We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android
                And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile
                App That Runs Smoothly On Multiple Platforms.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Game Development</h3>
              <p>
                Our bespoke Game Development services offer comprehensive solutions for designing,
                building, and launching engaging and interactive games. From concept art to
                full-fledged game design, our expert team specializes in both 2D and 3D game
                development.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Data Engineering</h3>
              <p>
                Expert data architects and engineers for handling large-scale data operations. We
                specialize in ETL/ELT processes, cloud migration, and advanced analytics using
                Databricks, Snowflake, Azure Data Factory, and modern data science tools.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={scaleIn}>
              <motion.div className="service-icon" whileHover={{ scale: 1.1, rotate: 5 }}>
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
              </motion.div>
              <h3>Cloud Solutions</h3>
              <p>
                Cloud-certified architects providing comprehensive cloud solutions. We design and
                develop using best practices and cloud design patterns for AWS, Azure, and Google
                Cloud. Specializing in migration, optimization, and cost-effective hosting
                solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="projects" id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>
              Showcasing innovative solutions that drive business growth and deliver exceptional
              user experiences.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6H4V4H2V6H3L6.6 14.59L5.25 16.04C5.09 16.22 5 16.47 5 16.75C5 17.44 5.56 18 6.25 18H19V16H6.42C6.28 16 6.17 15.89 6.17 15.75C6.17 15.68 6.2 15.61 6.25 15.55L7.1 14.5H15.55C16.3 14.5 16.96 14.05 17.25 13.37L20.88 5.99C20.95 5.84 21 5.67 21 5.5C21 4.67 20.33 4 19.5 4H6.21L5.27 2H2V4H4L6 6ZM7.16 12.5L6 9H18.31L15.9 12.5H7.16ZM7 20C6.45 20 6 20.45 6 21C6 21.55 6.45 22 7 22C7.55 22 8 21.55 8 21C8 20.45 7.55 20 7 20ZM17 20C16.45 20 16 20.45 16 21C16 21.55 16.45 22 17 22C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="project-content">
                <h3>ShopErrands</h3>
                <p>
                  ShopErrands is a smart shopping and productivity app designed to streamline your
                  errands. Users can add favorite stores, create itemized lists, view real-time
                  prices, and receive geo-fenced alerts when near a relevant store.
                </p>
                <div className="project-tags">
                  <span>Shopping</span>
                  <span>Productivity</span>
                  <span>Smart Lists</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  {/* Barcode Icon */}
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <rect x="1" y="4" width="1" height="16" fill="currentColor" />
                    <rect x="3" y="4" width="0.5" height="16" fill="currentColor" />
                    <rect x="5" y="4" width="1" height="16" fill="currentColor" />
                    <rect x="7" y="4" width="0.5" height="16" fill="currentColor" />
                    <rect x="9" y="4" width="1.5" height="16" fill="currentColor" />
                    <rect x="12" y="4" width="0.5" height="16" fill="currentColor" />
                    <rect x="14" y="4" width="1" height="16" fill="currentColor" />
                    <rect x="16" y="4" width="0.5" height="16" fill="currentColor" />
                    <rect x="18" y="4" width="1" height="16" fill="currentColor" />
                    <rect x="20" y="4" width="0.5" height="16" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="project-content">
                <h3>BarCodeScanner</h3>
                <p>
                  BarCode Scanner is a fast and lightweight app for scanning barcodes on products,
                  packages, and documents. Instantly retrieve data, prices, or share scanned content
                  with others.
                </p>
                <div className="project-tags">
                  <span>Barcode</span>
                  <span>Scan</span>
                  <span>Productivity</span>
                  <span>Share</span>
                </div>
              </div>
            </div>

            {/* Blockchain & Crypto Projects */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="project-content">
                <h3>KrumFi</h3>
                <p>
                  Blockchain and AI Development Service providing comprehensive crypto solutions and
                  smart contract development for decentralized applications.
                </p>
                <div className="project-tags">
                  <span>Blockchain</span>
                  <span>AI</span>
                  <span>Smart Contracts</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="7.5,4.21 12,6.81 16.5,4.21"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="7.5,19.79 7.5,14.6 3,12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="21,12 16.5,14.6 16.5,19.79"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="3.27,6.96 12,12.01 20.73,6.96"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="22.08"
                      x2="12"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div className="project-content">
                <h3>HIxLo (HighVsLow)</h3>
                <p>
                  A crypto-based P2P Trading Game enabling players to predict BTC price movements in
                  real-time and earn rewards through market analysis skills.
                </p>
                <div className="project-tags">
                  <span>P2P Trading</span>
                  <span>Crypto Game</span>
                  <span>Real-time</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
              </div>
              <div className="project-content">
                <h3>Online Casino Platform</h3>
                <p>
                  Full-featured online casino platform at bet999.io with secure payment processing,
                  game management, and user authentication systems.
                </p>
                <div className="project-tags">
                  <span>Gaming</span>
                  <span>Payment Processing</span>
                  <span>Security</span>
                </div>
              </div>
            </div>

            {/* NFT & Digital Art Projects */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
                    <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Archetypes NFT Collection</h3>
                <p>
                  Dynamic generative AI NFT collection featuring synthesis, mutation, and animation
                  capabilities with burn-to-redeem mechanics on Manifold and OpenSea.
                </p>
                <div className="project-tags">
                  <span>NFT</span>
                  <span>Generative AI</span>
                  <span>Smart Contracts</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Dan Hawk NFT Editions</h3>
                <p>
                  Multiple ERC-1155 NFT editions featuring professional photography collections with
                  smart contract integration and marketplace presence.
                </p>
                <div className="project-tags">
                  <span>ERC-1155</span>
                  <span>Photography</span>
                  <span>Digital Art</span>
                </div>
              </div>
            </div>

            {/* DeFi & Protocol Projects */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Story Protocol</h3>
                <p>
                  Innovative blockchain protocol for intellectual property management and creative
                  content monetization with decentralized governance.
                </p>
                <div className="project-tags">
                  <span>Protocol</span>
                  <span>IP Management</span>
                  <span>DeFi</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="3.27,6.96 12,12.01 20.73,6.96"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="22.08"
                      x2="12"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Mythic Protocol</h3>
                <p>
                  Advanced DeFi protocol providing innovative financial instruments and yield
                  optimization strategies for the decentralized finance ecosystem.
                </p>
                <div className="project-tags">
                  <span>DeFi Protocol</span>
                  <span>Yield Farming</span>
                  <span>Smart Contracts</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="9,22 9,12 15,12 15,22"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Layer N</h3>
                <p>
                  High-performance blockchain infrastructure solution providing scalable layer-2
                  solutions for enterprise applications and DeFi protocols.
                </p>
                <div className="project-tags">
                  <span>Layer 2</span>
                  <span>Infrastructure</span>
                  <span>Scalability</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Range Protocol</h3>
                <p>
                  Multi-chain protocol supporting EVMs, Solana, and Cosmos ecosystems with advanced
                  liquidity management and cross-chain functionality.
                </p>
                <div className="project-tags">
                  <span>Multi-chain</span>
                  <span>Cross-chain</span>
                  <span>Liquidity</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
              </div>
              <div className="project-content">
                <h3>DeFi Instadapp</h3>
                <p>
                  Comprehensive DeFi management platform with both full-featured and lite versions
                  for seamless interaction with decentralized finance protocols.
                </p>
                <div className="project-tags">
                  <span>DeFi</span>
                  <span>Portfolio Management</span>
                  <span>Protocol Integration</span>
                </div>
              </div>
            </div>

            {/* Mobile & Web Applications */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Money Minder App</h3>
                <p>
                  Comprehensive budgeting and expense tracking application with categorization,
                  spending analysis, and financial goal management features.
                </p>
                <div className="project-tags">
                  <span>Mobile App</span>
                  <span>Finance</span>
                  <span>Budget Tracking</span>
                </div>
              </div>
            </div>

            {/* Business & Enterprise Solutions */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Secure Bailment Solution</h3>
                <p>
                  Enterprise-grade secure bailment management system providing comprehensive legal
                  and financial safeguards for asset custody services.
                </p>
                <div className="project-tags">
                  <span>Enterprise</span>
                  <span>Legal Tech</span>
                  <span>Asset Management</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
              </div>
              <div className="project-content">
                <h3>Sydney Chocolate Ball</h3>
                <p>
                  Premium event management and e-commerce platform for Sydney's premier
                  chocolate-themed social events with booking and payment integration.
                </p>
                <div className="project-tags">
                  <span>Event Management</span>
                  <span>E-commerce</span>
                  <span>Payment Integration</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12h-4l-3 9L9 3l-3 9H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>FSHD Global</h3>
                <p>
                  Global healthcare platform dedicated to Facioscapulohumeral Dystrophy research,
                  patient support, and medical resource management.
                </p>
                <div className="project-tags">
                  <span>Healthcare</span>
                  <span>Research Platform</span>
                  <span>Patient Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <motion.section
        className="work-process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div className="section-header">
            <h2>Our Work Process</h2>
            <p>A streamlined approach that ensures efficient delivery and exceptional results</p>
          </motion.div>

          <motion.div
            className="process-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProcessStep
              number="01"
              badge="Preparation"
              title="Consultation & Vision Identify"
              description="We get acquainted with your needs and outline the goals and desired results through comprehensive discovery sessions."
              className="preparation"
              variants={scaleIn}
            />

            <ProcessStep
              number="02"
              badge="Planning"
              title="Estimation, Budget & Contract"
              description="We provide detailed project estimation, timeline, and budget based on the information gathered during consultation."
              className="estimation"
              variants={scaleIn}
            />

            <ProcessStep
              number="03"
              badge="Start"
              title="UI/UX Design + Features"
              description="You receive smart design mockups and detailed feature specifications that align with your product vision."
              className="design"
              variants={scaleIn}
            />

            <ProcessStep
              number="04"
              badge="Development"
              title="Implementation & Coding"
              description="Our developers handle application implementation, coding, and optimization using best practices and modern technologies."
              className="development"
              variants={scaleIn}
            />

            <ProcessStep
              number="05"
              badge="Quality Assurance"
              title="Testing & Validation"
              description="Comprehensive testing ensures your product is bug-free, secure, and performs optimally across all platforms."
              className="testing"
              variants={scaleIn}
            />

            <ProcessStep
              number="06"
              badge="Finish"
              title="Delivery & Launch"
              description="Final stage where we deliver the completed project with all documentation, training, and ongoing support."
              className="delivery"
              variants={scaleIn}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="technologies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div className="section-header">
            <h2>Technologies</h2>
            <p>
              Cutting-edge technologies and frameworks we use to build exceptional digital solutions
            </p>
          </motion.div>

          <motion.div
            className="tech-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Blockchain & Web3</h3>
              <div className="tech-list">
                <span>Ethereum</span>
                <span>Solidity</span>
                <span>Web3.js</span>
                <span>Ethers.js</span>
                <span>Hardhat</span>
                <span>Truffle</span>
                <span>IPFS</span>
                <span>MetaMask</span>
                <span>Smart Contracts</span>
                <span>DeFi Protocols</span>
                <span>NFT Development</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Frontend Development</h3>
              <div className="tech-list">
                <span>React.js</span>
                <span>Next.js</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>JavaScript ES6+</span>
                <span>HTML5/CSS3</span>
                <span>Sass/SCSS</span>
                <span>Tailwind CSS</span>
                <span>Material-UI</span>
                <span>Ant Design</span>
                <span>Framer Motion</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Backend Development</h3>
              <div className="tech-list">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Python</span>
                <span>Django</span>
                <span>FastAPI</span>
                <span>Java Spring</span>
                <span>C# .NET</span>
                <span>PHP Laravel</span>
                <span>Ruby on Rails</span>
                <span>Go</span>
                <span>Rust</span>
                <span>GraphQL</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Mobile Development</h3>
              <div className="tech-list">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift (iOS)</span>
                <span>Kotlin (Android)</span>
                <span>Xamarin</span>
                <span>Ionic</span>
                <span>PhoneGap</span>
                <span>Progressive Web Apps</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Database & Storage</h3>
              <div className="tech-list">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
                <span>Firebase</span>
                <span>Supabase</span>
                <span>Amazon DynamoDB</span>
                <span>Cassandra</span>
                <span>Neo4j</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Cloud & DevOps</h3>
              <div className="tech-list">
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Microsoft Azure</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Jenkins</span>
                <span>GitHub Actions</span>
                <span>Terraform</span>
                <span>Ansible</span>
                <span>Nginx</span>
                <span>Apache</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>AI & Machine Learning</h3>
              <div className="tech-list">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Scikit-learn</span>
                <span>OpenAI GPT</span>
                <span>Hugging Face</span>
                <span>LangChain</span>
                <span>Computer Vision</span>
                <span>Natural Language Processing</span>
                <span>Deep Learning</span>
                <span>MLOps</span>
              </div>
            </motion.div>

            <motion.div className="tech-category" variants={scaleIn}>
              <h3>Data Engineering</h3>
              <div className="tech-list">
                <span>Apache Spark</span>
                <span>Apache Kafka</span>
                <span>Databricks</span>
                <span>Snowflake</span>
                <span>Azure Data Factory</span>
                <span>Apache Airflow</span>
                <span>dbt</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Jupyter</span>
                <span>Power BI</span>
                <span>Tableau</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="stat-item" variants={scaleIn}>
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                150+
              </motion.div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>

            <motion.div className="stat-item" variants={scaleIn}>
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                10+
              </motion.div>
              <div className="stat-label">Years Experience</div>
            </motion.div>

            <motion.div className="stat-item" variants={scaleIn}>
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                20+
              </motion.div>
              <div className="stat-label">Technologies Mastered</div>
            </motion.div>

            <motion.div className="stat-item" variants={scaleIn}>
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                50+
              </motion.div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section with Slider */}
      <motion.section
        className="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      ></motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div className="contact-content" variants={staggerContainer}>
            <motion.div className="contact-info" variants={slideInLeft}>
              <h2>Get an idea? Let's bring it to life!</h2>
              <p>
                Ready to transform your vision into reality? Let's discuss your project and explore
                how we can help you achieve your goals.
              </p>

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
                    Email: hello@justernet.com
                    <br />
                    Phone: +1 (630) 754-8898
                    <br />
                    Skype: justernet.team
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form" variants={slideInRight}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    {...formik.getFieldProps('fullName')}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <span className="min-h-[20px] absolute start-0 top-[100%] text-sm text-[#ff0000] error_message">
                      {formik.errors.fullName}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    {...formik.getFieldProps('email')}
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="min-h-[20px] absolute start-0 top-[100%] text-sm text-[#ff0000] error_message">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    {...formik.getFieldProps('subject')}
                    type="text"
                    placeholder="Subject"
                    required
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <span className="min-h-[20px] absolute start-0 top-[100%] text-sm text-[#ff0000] error_message">
                      {formik.errors.subject}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    {...formik.getFieldProps('message')}
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <span className="min-h-[20px] absolute start-0 top-[100%] text-sm text-[#ff0000] error_message">
                      {formik.errors.message}
                    </span>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <JusterNetLogo />
              </div>
              <p>
                Transforming ideas into digital reality through innovative technology solutions.
                We're your trusted partner in building the future.
              </p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Mobile Apps</a>
                </li>
                <li>
                  <a href="#services">AI Solutions</a>
                </li>
                <li>
                  <a href="#services">Blockchain</a>
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
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 JusterNet Corporation. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

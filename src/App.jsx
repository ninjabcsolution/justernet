import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <div className="hero-text">
              <h1>UI/UX Design and custom software solutions</h1>
              <p>
                We create beautiful, functional, and user-friendly digital experiences that help
                your business grow and succeed in the digital world.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-circle">
                <div className="circle-inner"></div>
                <div className="circle-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>We offer comprehensive digital solutions to help your business thrive</p>
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
              <h3>Web Development</h3>
              <p>
                Custom web applications built with modern technologies and best practices for
                optimal performance.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
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
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Beautiful and intuitive user interfaces designed to provide exceptional user
                experiences.
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
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications for iOS and Android devices.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M19.4 15A1.65 1.65 0 0 0 21 13.35A1.65 1.65 0 0 0 19.4 11.65A1.65 1.65 0 0 0 18 13A1.65 1.65 0 0 0 19.4 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Digital Strategy</h3>
              <p>
                Comprehensive digital strategies to help your business achieve its goals and
                objectives.
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
                </svg>
              </div>
              <h3>Content Management</h3>
              <p>
                Powerful content management systems that make it easy to manage your digital
                content.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock technical support to ensure your systems are always running
                smoothly.
              </p>
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
      <section className="technologies">
        <div className="container">
          <div className="section-header">
            <h2>Technologies</h2>
            <p>We work with cutting-edge technologies to deliver exceptional results</p>
          </div>

          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-list">
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-list">
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>PHP</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-list">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Cloud</h3>
              <div className="tech-list">
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>

                <div className="contact-item">
                  <h4>Contact Info</h4>
                  <p>
                    Phone: (555) 123-4567
                    <br />
                    Email: hello@company.com
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

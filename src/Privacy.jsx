import React from 'react';
import { motion } from 'framer-motion';
import './Privacy.css';

function Privacy() {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="privacy-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">LOGO</div>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <motion.main
        className="privacy-main"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="privacy-header" variants={fadeInUp}>
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: 2023</p>
          </motion.div>

          <motion.div className="privacy-content" variants={fadeInUp}>
            <motion.section className="privacy-section" variants={fadeInUp}>
              <p className="intro-text">
                This privacy policy applies to Justernet Corporation ("Company," "we," "us," or
                "our"), which includes "Errands" app, "Shop Errand" app, describes how and why we
                might collect, store, use, and/or share ("process") your information when you use
                our services ("Services"). We are committed to protecting and respecting your
                privacy.
              </p>
              <p className="contact-info">
                Questions or concerns? Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our policies and practices,
                please do not use our Services. If you still have any questions or concerns, please
                contact us at
                <a href="mailto:Naina@justernet.com"> Naina@justernet.com</a>.
              </p>
            </motion.section>

            <motion.section className="privacy-section" variants={fadeInUp}>
              <h2>Summary of Key Points</h2>
              <p>
                This summary provides key points from our privacy notice, but you can find out more
                details about any of these topics by clicking the link following each key point or
                by using our table of contents below to find the section you are looking for.
              </p>

              <div className="key-points">
                <div className="key-point">
                  <h3>What personal information do we process?</h3>
                  <p>
                    When you visit, use, or navigate our Services, we may process personal
                    information depending on how you interact with Justernet Corporation and the
                    Services, the choices you make, and the products and features you use.
                  </p>
                </div>

                <div className="key-point">
                  <h3>Do we process any sensitive personal information?</h3>
                  <p>We do not process sensitive personal information.</p>
                </div>

                <div className="key-point">
                  <h3>Do we receive any information from third parties?</h3>
                  <p>We do not receive any information from third parties.</p>
                </div>

                <div className="key-point">
                  <h3>How do we process your information?</h3>
                  <p>
                    We process your information to provide, improve, and administer our Services,
                    communicate with you, for security and fraud prevention, and to comply with law.
                    We may also process your information for other purposes with your consent.
                  </p>
                </div>

                <div className="key-point">
                  <h3>How do we keep your information safe?</h3>
                  <p>
                    We have organizational and technical processes and procedures in place to
                    protect your personal information. However, no electronic transmission over the
                    internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section className="privacy-section" variants={fadeInUp}>
              <h2>Table of Contents</h2>
              <ol className="table-of-contents">
                <li>
                  <a href="#section-1">What Information Do We Collect?</a>
                </li>
                <li>
                  <a href="#section-2">How Do We Process Your Information?</a>
                </li>
                <li>
                  <a href="#section-3">What Legal Bases Do We Rely On?</a>
                </li>
                <li>
                  <a href="#section-4">When and With Whom Do We Share Information?</a>
                </li>
                <li>
                  <a href="#section-5">Third-Party Websites</a>
                </li>
                <li>
                  <a href="#section-6">Social Logins</a>
                </li>
                <li>
                  <a href="#section-7">How Long Do We Keep Your Information?</a>
                </li>
                <li>
                  <a href="#section-8">How Do We Keep Your Information Safe?</a>
                </li>
                <li>
                  <a href="#section-9">Information From Minors</a>
                </li>
                <li>
                  <a href="#section-10">Your Privacy Rights</a>
                </li>
                <li>
                  <a href="#section-11">Do-Not-Track Features</a>
                </li>
                <li>
                  <a href="#section-12">California Privacy Rights</a>
                </li>
                <li>
                  <a href="#section-13">Virginia Privacy Rights</a>
                </li>
                <li>
                  <a href="#section-14">Updates to This Notice</a>
                </li>
                <li>
                  <a href="#section-15">Contact Us</a>
                </li>
                <li>
                  <a href="#section-16">Review, Update, or Delete Data</a>
                </li>
              </ol>
            </motion.section>

            <motion.section id="section-1" className="privacy-section" variants={fadeInUp}>
              <h2>1. What Information Do We Collect?</h2>
              <h3>Personal information you disclose to us</h3>
              <p>
                <strong>In Short:</strong> We collect personal information that you provide to us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to us when you register
                on the Services, express an interest in obtaining information about us or our
                products and Services, when you participate in activities on the Services, or
                otherwise when you contact us.
              </p>
              <p>
                <strong>Personal Information Provided by You.</strong> The personal information that
                we collect depends on the context of your interactions with us and the Services, the
                choices you make, and the products and features you use. The personal information we
                collect may include the following:
              </p>
              <ul>
                <li>names</li>
                <li>email addresses</li>
                <li>usernames</li>
                <li>phone numbers</li>
              </ul>
              <p>
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
            </motion.section>

            <motion.section id="section-2" className="privacy-section" variants={fadeInUp}>
              <h2>2. How Do We Process Your Information?</h2>
              <p>
                <strong>In Short:</strong> We process your information to provide, improve, and
                administer our Services, communicate with you, for security and fraud prevention,
                and to comply with law.
              </p>
              <p>
                We process your personal information for a variety of reasons, depending on how you
                interact with our Services, including:
              </p>
              <ul>
                <li>
                  To facilitate account creation and authentication and otherwise manage user
                  accounts
                </li>
                <li>To respond to user inquiries/offer support to users</li>
                <li>To fulfill and manage your orders</li>
              </ul>
            </motion.section>

            <motion.section id="section-8" className="privacy-section" variants={fadeInUp}>
              <h2>8. How Do We Keep Your Information Safe?</h2>
              <p>
                <strong>In Short:</strong> We aim to protect your personal information through a
                system of organizational and technical security measures.
              </p>
              <p>
                We have implemented appropriate and reasonable technical and organizational security
                measures designed to protect the security of any personal information we process.
                However, despite our safeguards and efforts to secure your information, no
                electronic transmission over the Internet or information storage technology can be
                guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your information.
              </p>
            </motion.section>

            <motion.section id="section-9" className="privacy-section" variants={fadeInUp}>
              <h2>9. Do We Collect Information From Minors?</h2>
              <p>
                <strong>In Short:</strong> We do not knowingly collect data from or market to
                children under 18 years of age.
              </p>
              <p>
                We do not knowingly solicit data from or market to children under 18 years of age.
                By using the Services, you represent that you are at least 18 or that you are the
                parent or guardian of such a minor and consent to such minor dependent's use of the
                Services. If we learn that personal information from users less than 18 years of age
                has been collected, we will deactivate the account and take reasonable measures to
                promptly delete such data from our records.
              </p>
            </motion.section>

            <motion.section id="section-10" className="privacy-section" variants={fadeInUp}>
              <h2>10. What Are Your Privacy Rights?</h2>
              <p>
                <strong>In Short:</strong> In some regions, such as Canada, you have rights that
                allow you greater access to and control over your personal information.
              </p>
              <p>
                In some regions (like Canada), you have certain rights under applicable data
                protection laws. These may include the right (i) to request access and obtain a copy
                of your personal information, (ii) to request rectification or erasure; (iii) to
                restrict the processing of your personal information; and (iv) if applicable, to
                data portability.
              </p>
            </motion.section>

            <motion.section id="section-15" className="privacy-section" variants={fadeInUp}>
              <h2>15. How Can You Contact Us About This Notice?</h2>
              <p>
                If you have questions or comments about this notice, you may email us at{' '}
                <a href="mailto:Naina@justernet.com">Naina@justernet.com</a> or by post to:
              </p>
              <div className="contact-address">
                <p>
                  <strong>Justernet Corporation</strong>
                </p>
                <p>1755 Park Street</p>
                <p>STE 200</p>
                <p>Naperville, IL 60563</p>
                <p>United States</p>
              </div>
            </motion.section>

            <motion.section className="privacy-section company-info" variants={fadeInUp}>
              <div className="company-details">
                <h3>JusterNet Corporation</h3>
                <p>1755 Park Street Suite 200, Naperville, IL 60563</p>
                <div className="contact-methods">
                  <p>
                    <strong>Phone:</strong> 630.754.8898
                  </p>
                  <p>
                    <strong>Fax:</strong> 877.990.4251
                  </p>
                </div>
                <div className="email-contacts">
                  <p>
                    <strong>HR:</strong> <a href="mailto:Hr@JusterNet.com">Hr@JusterNet.com</a>
                  </p>
                  <p>
                    <strong>Accounts:</strong>{' '}
                    <a href="mailto:Account@JusterNet.com">Account@JusterNet.com</a>
                  </p>
                  <p>
                    <strong>Support:</strong>{' '}
                    <a href="mailto:Support@JusterNet.com">Support@JusterNet.com</a>
                  </p>
                </div>
                <p className="copyright">
                  Copyright 2023 - www.JusterNet.com - All rights reserved
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">JusterNet</div>
              <p>Creating digital experiences that drive business growth and success.</p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#web-dev">Web Development</a>
                </li>
                <li>
                  <a href="#mobile">Mobile Apps</a>
                </li>
                <li>
                  <a href="#blockchain">Blockchain</a>
                </li>
                <li>
                  <a href="#ai">Artificial Intelligence</a>
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
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:Naina@justernet.com">Naina@justernet.com</a>
                </li>
                <li>
                  <a href="tel:630.754.8898">630.754.8898</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 JusterNet Corporation. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;

import React from 'react';
import JusterNetLogo from './JusterNetLogo_V1';
import './App.css';

const LogoShowcase = () => {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        minHeight: '100vh',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          JusterNet Logo Showcase
        </h1>

        <div
          style={{
            display: 'grid',
            gap: '3rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {/* Default Logo Variants */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#8b5cf6' }}>Default Network Logo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Small</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="default" size="small" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Medium</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="default" size="medium" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Large</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="default" size="large" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                Extra Large
              </h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="default" size="xlarge" />
              </div>
            </div>
          </div>

          {/* Minimal Logo */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#8b5cf6' }}>Minimal Logo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Small</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="minimal" size="small" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Medium</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="minimal" size="medium" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Large</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="minimal" size="large" />
              </div>
            </div>
          </div>

          {/* Tech Logo */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#06b6d4' }}>Tech Circuit Logo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Small</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="tech" size="small" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Medium</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="tech" size="medium" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Large</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="tech" size="large" />
              </div>
            </div>
          </div>

          {/* Blockchain Logo */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#f59e0b' }}>Blockchain Logo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Small</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="blockchain" size="small" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Medium</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="blockchain" size="medium" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Large</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="blockchain" size="large" />
              </div>
            </div>
          </div>

          {/* AI Logo */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#ec4899' }}>AI Neural Network Logo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Small</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="ai" size="small" />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Medium</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="ai" size="medium" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Large</h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <JusterNetLogo variant="ai" size="large" />
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              gridColumn: '1 / -1',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', color: '#8b5cf6' }}>Usage Examples</h2>

            <div
              style={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              }}
            >
              {/* Header Example */}
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                  Header Navigation
                </h3>
                <div
                  style={{
                    background: 'rgba(10, 10, 15, 0.95)',
                    padding: '1rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <JusterNetLogo variant="default" size="small" />
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>

              {/* Footer Example */}
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                  Footer
                </h3>
                <div
                  style={{
                    background: 'rgba(10, 10, 15, 0.95)',
                    padding: '1rem',
                    borderRadius: '8px',
                  }}
                >
                  <JusterNetLogo variant="minimal" size="medium" />
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#94a3b8' }}>
                    © 2024 JusterNet Corporation
                  </p>
                </div>
              </div>

              {/* Business Card Example */}
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                  Business Card
                </h3>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                    padding: '1rem',
                    borderRadius: '8px',
                    color: 'white',
                  }}
                >
                  <JusterNetLogo variant="tech" size="small" />
                  <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    <div>John Doe</div>
                    <div>CEO & Founder</div>
                    <div>john@justernet.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div
          style={{
            marginTop: '3rem',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem', color: '#8b5cf6' }}>Implementation Guide</h2>

          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <div>
              <h3 style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Basic Usage</h3>
              <pre
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  overflow: 'auto',
                }}
              >
                {`import JusterNetLogo from './JusterNetLogo_V1';

// Default logo
<JusterNetLogo />

// With specific variant and size
<JusterNetLogo 
  variant="tech" 
  size="large" 
  className="my-logo" 
/>`}
              </pre>
            </div>

            <div>
              <h3 style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Available Variants</h3>
              <ul style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                <li>
                  <strong>default</strong> - Network-themed with nodes and connections
                </li>
                <li>
                  <strong>minimal</strong> - Simplified J symbol with dots
                </li>
                <li>
                  <strong>tech</strong> - Circuit patterns with hexagonal elements
                </li>
                <li>
                  <strong>blockchain</strong> - Block chain visualization
                </li>
                <li>
                  <strong>ai</strong> - Neural network structure
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Available Sizes</h3>
              <ul style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                <li>
                  <strong>small</strong> - 100x32px (navigation, cards)
                </li>
                <li>
                  <strong>medium</strong> - 140x45px (default, general use)
                </li>
                <li>
                  <strong>large</strong> - 180x60px (headers, hero sections)
                </li>
                <li>
                  <strong>xlarge</strong> - 240x80px (landing pages, presentations)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;

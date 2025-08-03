import React from 'react';

// Enhanced JusterNet Logo with multiple variations
const JusterNetLogo = ({ variant = 'default', size = 'medium', className = '' }) => {
  const sizes = {
    small: { width: 100, height: 32, fontSize: 10 },
    medium: { width: 140, height: 45, fontSize: 12 },
    large: { width: 180, height: 60, fontSize: 16 },
    xlarge: { width: 240, height: 80, fontSize: 20 },
  };

  const currentSize = sizes[size];

  // Default Network-themed Logo
  const DefaultLogo = () => (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
      fill="none"
      className={className}
    >
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle
        cx={currentSize.height / 2}
        cy={currentSize.height / 2}
        r={currentSize.height / 2 - 2}
        fill="url(#bgGradient)"
        stroke="rgba(139, 92, 246, 0.2)"
        strokeWidth="1"
      />

      {/* Network nodes with enhanced design */}
      <circle cx="12" cy={currentSize.height / 2} r="4" fill="#8b5cf6" filter="url(#glow)" />
      <circle cx="32" cy={currentSize.height / 2 - 8} r="3" fill="#3b82f6" filter="url(#glow)" />
      <circle cx="32" cy={currentSize.height / 2 + 8} r="3" fill="#3b82f6" filter="url(#glow)" />
      <circle cx="52" cy={currentSize.height / 2} r="4" fill="#8b5cf6" filter="url(#glow)" />

      {/* Additional network nodes for complexity */}
      <circle cx="25" cy={currentSize.height / 2} r="2" fill="#a78bfa" opacity="0.8" />
      <circle cx="39" cy={currentSize.height / 2} r="2" fill="#60a5fa" opacity="0.8" />

      {/* Connecting lines with animation paths */}
      <line
        x1="12"
        y1={currentSize.height / 2}
        x2="32"
        y2={currentSize.height / 2 - 8}
        stroke="#8b5cf6"
        strokeWidth="2"
        opacity="0.7"
      />
      <line
        x1="12"
        y1={currentSize.height / 2}
        x2="32"
        y2={currentSize.height / 2 + 8}
        stroke="#8b5cf6"
        strokeWidth="2"
        opacity="0.7"
      />
      <line
        x1="32"
        y1={currentSize.height / 2 - 8}
        x2="52"
        y2={currentSize.height / 2}
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.7"
      />
      <line
        x1="32"
        y1={currentSize.height / 2 + 8}
        x2="52"
        y2={currentSize.height / 2}
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Additional connecting lines */}
      <line
        x1="25"
        y1={currentSize.height / 2}
        x2="39"
        y2={currentSize.height / 2}
        stroke="#a78bfa"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Company text with enhanced styling */}
      <text
        x="70"
        y={currentSize.height / 2 - 6}
        fill="url(#textGradient)"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        JUSTER
      </text>
      <text
        x="70"
        y={currentSize.height / 2 + 8}
        fill="#8b5cf6"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        NET
      </text>

      {/* Tagline for larger sizes */}
      {size === 'large' || size === 'xlarge' ? (
        <text
          x="70"
          y={currentSize.height / 2 + 22}
          fill="#94a3b8"
          fontSize={currentSize.fontSize - 4}
          fontWeight="400"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.5px"
        >
          CORPORATION
        </text>
      ) : null}
    </svg>
  );

  // Minimalist Logo for small spaces
  const MinimalLogo = () => (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Simplified J symbol */}
      <path
        d={`M 8 8 L 8 ${currentSize.height - 12} Q 8 ${currentSize.height - 4} 16 ${currentSize.height - 4} L 24 ${currentSize.height - 4} Q 32 ${currentSize.height - 4} 32 ${currentSize.height - 12} L 32 ${currentSize.height / 2}`}
        stroke="url(#minimalGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Network dots */}
      <circle cx="40" cy="12" r="2" fill="#8b5cf6" />
      <circle cx="48" cy="20" r="2" fill="#3b82f6" />
      <circle cx="40" cy="28" r="2" fill="#8b5cf6" />

      {/* Text */}
      <text
        x="56"
        y={currentSize.height / 2 + 4}
        fill="#ffffff"
        fontSize={currentSize.fontSize}
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        JusterNet
      </text>
    </svg>
  );

  // Tech-focused Logo with circuit patterns
  const TechLogo = () => (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <pattern
          id="circuitPattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" fill="none" />
          <circle cx="10" cy="10" r="1" fill="#8b5cf6" opacity="0.3" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
          <line x1="10" y1="0" x2="10" y2="20" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>

      {/* Circuit background */}
      <rect
        x="0"
        y="0"
        width={currentSize.height}
        height={currentSize.height}
        fill="url(#circuitPattern)"
        opacity="0.1"
      />

      {/* Hexagonal tech elements */}
      <polygon
        points={`12,8 20,12 20,20 12,24 4,20 4,12`}
        fill="none"
        stroke="url(#techGradient)"
        strokeWidth="2"
      />
      <polygon
        points={`32,8 40,12 40,20 32,24 24,20 24,12`}
        fill="none"
        stroke="url(#techGradient)"
        strokeWidth="2"
      />
      <polygon
        points={`52,8 60,12 60,20 52,24 44,20 44,12`}
        fill="none"
        stroke="url(#techGradient)"
        strokeWidth="2"
      />

      {/* Central connecting elements */}
      <circle cx="12" cy="16" r="3" fill="#8b5cf6" />
      <circle cx="32" cy="16" r="3" fill="#3b82f6" />
      <circle cx="52" cy="16" r="3" fill="#06b6d4" />

      {/* Connection lines */}
      <line x1="15" y1="16" x2="29" y2="16" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
      <line x1="35" y1="16" x2="49" y2="16" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />

      {/* Company text */}
      <text
        x="70"
        y={currentSize.height / 2 - 4}
        fill="url(#techGradient)"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        JUSTER
      </text>
      <text
        x="70"
        y={currentSize.height / 2 + 10}
        fill="#06b6d4"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        NET
      </text>
    </svg>
  );

  // Blockchain-themed Logo
  const BlockchainLogo = () => (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Blockchain blocks */}
      <rect
        x="8"
        y="12"
        width="12"
        height="12"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        rx="2"
      />
      <rect
        x="24"
        y="12"
        width="12"
        height="12"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        rx="2"
      />
      <rect
        x="40"
        y="12"
        width="12"
        height="12"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        rx="2"
      />

      {/* Block connections */}
      <line x1="20" y1="18" x2="24" y2="18" stroke="#8b5cf6" strokeWidth="2" />
      <line x1="36" y1="18" x2="40" y2="18" stroke="#3b82f6" strokeWidth="2" />

      {/* Central elements in blocks */}
      <circle cx="14" cy="18" r="2" fill="#f59e0b" />
      <circle cx="30" cy="18" r="2" fill="#8b5cf6" />
      <circle cx="46" cy="18" r="2" fill="#3b82f6" />

      {/* Company text */}
      <text
        x="60"
        y={currentSize.height / 2 - 4}
        fill="url(#blockGradient)"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        JUSTER
      </text>
      <text
        x="60"
        y={currentSize.height / 2 + 10}
        fill="#8b5cf6"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        NET
      </text>
    </svg>
  );

  // AI-themed Logo
  const AILogo = () => (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <filter id="aiGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Neural network structure */}
      <circle cx="12" cy="8" r="3" fill="#06b6d4" filter="url(#aiGlow)" />
      <circle cx="12" cy="24" r="3" fill="#06b6d4" filter="url(#aiGlow)" />
      <circle cx="32" cy="16" r="4" fill="#8b5cf6" filter="url(#aiGlow)" />
      <circle cx="52" cy="12" r="3" fill="#ec4899" filter="url(#aiGlow)" />
      <circle cx="52" cy="20" r="3" fill="#ec4899" filter="url(#aiGlow)" />

      {/* Neural connections */}
      <line x1="15" y1="10" x2="29" y2="14" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="15" y1="22" x2="29" y2="18" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="36" y1="14" x2="49" y2="13" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />
      <line x1="36" y1="18" x2="49" y2="19" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />

      {/* Additional neural pathways */}
      <line x1="12" y1="11" x2="12" y2="21" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="15" x2="52" y2="17" stroke="#ec4899" strokeWidth="1" opacity="0.5" />

      {/* Company text */}
      <text
        x="64"
        y={currentSize.height / 2 - 4}
        fill="url(#aiGradient)"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        JUSTER
      </text>
      <text
        x="64"
        y={currentSize.height / 2 + 10}
        fill="#8b5cf6"
        fontSize={currentSize.fontSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        NET
      </text>
    </svg>
  );

  // Return the appropriate logo variant
  switch (variant) {
    case 'minimal':
      return <MinimalLogo />;
    case 'tech':
      return <TechLogo />;
    case 'blockchain':
      return <BlockchainLogo />;
    case 'ai':
      return <AILogo />;
    default:
      return <DefaultLogo />;
  }
};

export default JusterNetLogo;

import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/AnimatedBackground.css';

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  const [backgroundType, setBackgroundType] = useState('bubbles');
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    if (theme === 'animated') {
      const types = ['bubbles', 'grid', 'particles', 'waves', 'stars', 'aurora', 'neonLines'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      setBackgroundType(randomType);
    }
  }, [theme]);
  
  useEffect(() => {
    if (theme !== 'animated') {
      setParticles([]);
      return;
    }

    const count = backgroundType === 'stars' ? 100 :
                  backgroundType === 'particles' ? 80 :
                  backgroundType === 'grid' ? 30 :
                  backgroundType === 'waves' ? 20 :
                  backgroundType === 'aurora' ? 5 :
                  backgroundType === 'neonLines' ? 10 : 50;

    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: `particle-${i}`,
      size: backgroundType === 'stars' ? Math.random() * 3 + 1 :
            backgroundType === 'grid' ? Math.random() * 10 + 5 :
            backgroundType === 'waves' ? Math.random() * 200 + 50 :
            backgroundType === 'aurora' ? Math.random() * 100 + 200 :
            backgroundType === 'neonLines' ? 2 :
            Math.random() * 100 + 20,
      left: Math.random() * 100,
      top: backgroundType === 'grid' ? (i % 5) * 20 + Math.random() * 10 : Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 5,
      opacity: backgroundType === 'stars' ? Math.random() * 0.5 + 0.5 : Math.random() * 0.3 + 0.2
    }));

    setParticles(newParticles);
    return () => setParticles([]);
  }, [theme, backgroundType]);

  if (theme !== 'animated') return null;

  const renderAnimatedElements = () => {
    switch (backgroundType) {
      case 'bubbles':
        return particles.map(particle => (
          <motion.div
            key={particle.id}
            className="bubble"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              bottom: -100,
              opacity: particle.opacity
            }}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: -1000,
              rotate: 720,
              opacity: 0,
              transition: {
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ));
      
      case 'grid':
        return particles.map(particle => (
          <motion.div
            key={particle.id}
            className="grid-element"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
              transition: {
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ));

      case 'particles':
        return particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              width: particle.size / 5,
              height: particle.size / 5,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ));

      case 'waves':
        return particles.map(particle => (
          <motion.div
            key={particle.id}
            className="wave"
            style={{
              width: particle.size,
              height: particle.size / 4,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity
            }}
            animate={{
              scaleX: [1, 1.5, 1],
              scaleY: [1, 0.8, 1],
              transition: {
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ));

      case 'stars':
        return particles.map(particle => (
          <motion.div
            key={particle.id}
            className="star"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity
            }}
            animate={{
              opacity: [particle.opacity, 1, particle.opacity],
              scale: [1, 1.2, 1],
              transition: {
                duration: particle.duration / 2,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ));

      case 'aurora':
        return particles.map(p => (
          <motion.div
            key={p.id}
            className="aurora"
            style={{
              width: `${p.size}px`,
              height: '100vh',
              left: `${p.left}%`,
              top: 0,
              opacity: 0.5
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ));

      case 'neonLines':
        return particles.map(p => (
          <motion.div
            key={p.id}
            className="neon-line"
            style={{
              height: '100%',
              width: `${p.size}px`,
              left: `${p.left}%`,
              top: 0,
              opacity: p.opacity
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ));

      default:
        return null;
    }
  };

  return (
    <div className={`animated-background ${backgroundType}`} aria-hidden="true">
      {renderAnimatedElements()}
    </div>
  );
};

export default AnimatedBackground;

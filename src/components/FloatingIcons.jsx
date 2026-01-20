import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Terminal,
  GitBranch,
  Cpu,
  Zap,
  Shield,
  Layers,
  Palette,
  Github,
  FileText,
  Monitor,
  Cloud,
  Wifi,
  HardDrive,
  Settings,
  Lock,
  Rocket,
  Puzzle,
  Box,
  Activity
} from 'lucide-react';

const FloatingIcons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
      // Animación flotante con diferentes velocidades
      const duration = 3 + (index % 3) * 2; // 3s, 5s, 7s
      const delay = index * 0.5;
      
      icon.style.animation = `float ${duration}s ease-in-out infinite`;
      icon.style.animationDelay = `${delay}s`;
    });

    return () => {
      icons.forEach(icon => {
        icon.style.animation = '';
      });
    };
  }, []);

  const icons = [
    // Frontend Technologies
    { Icon: Code, color: 'text-blue-400', size: 'w-10 h-10 lg:w-12 lg:h-12', position: 'top-16 left-8 lg:left-16' },
    { Icon: FileText, color: 'text-orange-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-24 right-12 lg:right-20' },
    { Icon: Monitor, color: 'text-cyan-400', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-32 left-20 lg:left-32' },
    { Icon: Palette, color: 'text-pink-400', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-40 right-8 lg:right-16' },
    
    // Backend Technologies
    { Icon: Database, color: 'text-green-400', size: 'w-10 h-10 lg:w-12 lg:h-12', position: 'top-48 left-12 lg:left-24' },
    { Icon: Server, color: 'text-red-400', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-56 right-16 lg:right-28' },
    { Icon: Cloud, color: 'text-sky-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-64 left-16 lg:left-28' },
    { Icon: Terminal, color: 'text-yellow-400', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-72 right-12 lg:right-24' },
    
    // Development Tools
    { Icon: Github, color: 'text-gray-400', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-80 left-8 lg:left-20' },
    { Icon: GitBranch, color: 'text-purple-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-88 right-20 lg:right-32' },
    { Icon: Settings, color: 'text-indigo-400', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-96 left-24 lg:left-36' },
    { Icon: HardDrive, color: 'text-emerald-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-104 right-8 lg:right-20' },
    
    // Mobile & Web
    { Icon: Smartphone, color: 'text-rose-400', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-112 left-16 lg:left-28' },
    { Icon: Globe, color: 'text-teal-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-120 right-16 lg:right-28' },
    { Icon: Wifi, color: 'text-lime-400', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-128 left-12 lg:left-24' },
    
    // Security & Performance
    { Icon: Shield, color: 'text-amber-400', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-136 right-12 lg:right-24' },
    { Icon: Lock, color: 'text-red-500', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-144 left-20 lg:left-32' },
    { Icon: Zap, color: 'text-yellow-500', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-152 right-8 lg:right-20' },
    { Icon: Rocket, color: 'text-blue-500', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-160 left-8 lg:left-16' },
    
    // Architecture & Components
    { Icon: Layers, color: 'text-violet-400', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-168 right-20 lg:right-32' },
    { Icon: Puzzle, color: 'text-orange-500', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-176 left-24 lg:left-36' },
    { Icon: Box, color: 'text-green-500', size: 'w-7 h-7 lg:w-9 lg:h-9', position: 'top-184 right-8 lg:right-16' },
    { Icon: Activity, color: 'text-cyan-500', size: 'w-8 h-8 lg:w-10 lg:h-10', position: 'top-192 left-16 lg:left-28' },
    { Icon: Cpu, color: 'text-purple-500', size: 'w-9 h-9 lg:w-11 lg:h-11', position: 'top-200 right-16 lg:right-28' }
  ];

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {icons.map(({ Icon, color, size, position }, index) => (
        <div
          key={index}
          className={`floating-icon absolute ${position} ${color} ${size} opacity-15 hover:opacity-35 transition-all duration-500 hover:scale-110`}
        >
          <Icon />
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
          75% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;

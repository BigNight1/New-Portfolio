import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme, imageSource }) => {
  const [isChanging, setIsChanging] = useState(false);

  const handleToggle = () => {
    setIsChanging(true);
    toggleTheme();
    
    // Reset animation after transition
    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };

  return (
    <motion.div
      className="relative cursor-pointer group hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center mx-[0.3rem] transition-colors duration-300 overflow-hidden"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Contenedor del icono con animación */}
      <div className="relative w-6 h-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={theme}
            src={imageSource}
            alt={theme}
            className="w-6 h-6 absolute inset-0"
            initial={{ 
              scale: 0, 
              rotate: theme === "light" ? -180 : 180,
              opacity: 0 
            }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              opacity: 1 
            }}
            exit={{ 
              scale: 0, 
              rotate: theme === "light" ? 180 : -180,
              opacity: 0 
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          />
        </AnimatePresence>
      </div>

      {/* Efecto de glow animado */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isChanging ? 1 : 0,
          scale: isChanging ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />

    </motion.div>
  );
};

export default ThemeToggle;

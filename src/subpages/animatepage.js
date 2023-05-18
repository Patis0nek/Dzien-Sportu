import { motion } from 'framer-motion';
import React, { Component } from 'react';

const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    eyit: { opacity: 0, x: 0 },
};

const AnimatePage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatePage;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { Link } from "react-scroll";

// ========================= //
// FRAMER variants
// nav variant

const navMotion = {
    // initial state ==== hidden
    hidden: {
        y: "-100%",
        opacity: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.15,
            ease: "easeInOut",
        },
    },
    // animate state ==== visible
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.15,
            ease: "easeInOut",
        },
    },
    // exit state ==== hidden
    exit: {
        y: "-100%",
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.15,
            staggerDirection: -1,
        },
    },
};

// ========================= //
// nav item variants
const navItemMotion = {
    // initial == hidden
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
    // animate == visible
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
    // exit == hidden
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const Navbar = () => {
    // media query
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    // state for hamburger menu
    const [isOpen, setIsOpen] = useState(false);
    // state for background change on scroll
    const [ scrollBackground, setScrollBackground ] = useState(false);
    return (
        <nav>nav</nav>
    );
}

export default Navbar;
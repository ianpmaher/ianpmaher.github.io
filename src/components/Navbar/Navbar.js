import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { Link } from "react-scroll";

const FancyNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100%);
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    background-color: #fff;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 5rem;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    const [scrollBackground, setScrollBackground] = useState(false);
    // change background on scroll
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setScrollBackground(true);
        } else {
            setScrollBackground(false);
        }
    };

    // event listener for scroll
    window.addEventListener("scroll", changeBackground);

    // useEffect => prevent scroll when nav menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <FancyNav style={{ backgroundColor: scrollBackground ? "#fff" : "transparent" }} onScroll={changeBackground}>
            {/* DESKTOP Navbar */}
            {isDesktop && (
                <>
                    <Link to="about" smooth={true} duration={10} style={{ cursor: "pointer" }}>
                        <FlexContainer>
                            <h1>Home</h1>
                        </FlexContainer>
                    </Link>
                    <FlexContainer>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={10}
                            style={{ cursor: "pointer", transition: "0.2s" }}
                        >
                            Projects
                        </Link>
                    </FlexContainer>
                </>
            )}
        </FancyNav>
    );
};

export default Navbar;

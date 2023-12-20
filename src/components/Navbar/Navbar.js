import styled from "styled-components";
import { useContext } from "react";
// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { Link } from "react-scroll";
import { NavbarContext } from "../../context/Context";
// context 

const FancyNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100%);
    height: 3rem;
    margin: 0 auto;
    padding: 0 2rem;
    background-color: rgba(10, 200, 255, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
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

const HeaderText = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin: 0.2rem 0;
    letter-spacing: 0.1rem;
    font-family: 'Merriweather', serif;
    @media (max-width: 768px) {
        font-size: 1.25rem;
        letter-spacing: auto;
    }
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
    // const isDesktop = useMediaQuery("(min-width: 1024px)");
    // // state for hamburger menu
    // const [isOpen, setIsOpen] = useState(false);
    // // state for background change on scroll
    // const [scrollBackground, setScrollBackground] = useState(false);
    // // change background on scroll
    // const changeBackground = () => {
    //     if (window.scrollY >= 50) {
    //         setScrollBackground(true);
    //     } else {
    //         setScrollBackground(false);
    //     }
    // };
    
    // // event listener for scroll
    // window.addEventListener("scroll", changeBackground);

    // // useEffect => prevent scroll when nav menu is open
    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // }, [isOpen]);

    const { isDesktop, isOpen, setIsOpen, scrollBackground, setScrollBackground } = useContext(NavbarContext);



    return (
        <div>
            <FancyNav
                style={{ backgroundColor: scrollBackground ? "rgba(10,200,255,0.5)" : "transparent" }}
            >
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
                                duration={0}
                                style={{ cursor: "pointer", transition: "0.2s" }}
                            >
                                Projects
                            </Link>
                            <Link
                                to="resume"
                                smooth={true}
                                duration={0}
                                style={{ cursor: "pointer", transition: "0.2s" }}
                            >
                                Resume
                            </Link>
                        </FlexContainer>
                    </>
                )}
                {/* MOBILE Navbar */}
                {!isDesktop && (
                    <>
                        <Link to="home" smooth={true} duration={0} style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>
                            <FlexContainer>
                                <h1>Home</h1>
                            </FlexContainer>
                        </Link>
                        <FlexContainer
                            onClick={() => setIsOpen((prevOpen) => (!prevOpen ? setIsOpen(true) : setIsOpen(false)))}
                        >
                            <motion.div
                                onClick={() => setIsOpen(!isOpen)}
                                style={{ cursor: "pointer" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#000"
                                    style={{ width: "2rem", height: "2rem" }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </motion.div>
                        </FlexContainer>
                    </>
                )}
                {/* MOBILE Nav Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={navMotion}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ position: "absolute", top: "5rem", left: 0, width: "100%" }}
                        >
                            <motion.div variants={navItemMotion}>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(!isOpen)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1>Home</h1>
                                    </FlexContainer>
                                </Link>
                            </motion.div>
                            <motion.div variants={navItemMotion}>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(!isOpen)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1>Projects</h1>
                                    </FlexContainer>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FancyNav>
        </div>
    );
};

export default Navbar;

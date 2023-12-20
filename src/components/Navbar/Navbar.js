import styled from "styled-components";
import { useContext } from "react";
// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useMediaQuery } from "../../utils/useMediaQuery";
import { Link } from "react-scroll";
import { NavbarContext } from "../../context/Context";
import Button from "../Button/Button";
// context

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 1rem;
`;

const StyledButton = styled(Button)`
    min-width: 6rem;
    padding: 0.5rem 0.25rem;
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
    const { isDesktop, isOpen, setIsOpen, scrollBackground } = useContext(NavbarContext);

    return (
        <nav
            className={
                scrollBackground
                    ? "bg-[#5ECBF7] h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200 shadow-lg"
                    : "bg-[#5ECBF7)] h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200"
            }
        >
            {/* DESKTOP Navbar */}
            {isDesktop && (
                <div className="flex flex-row items-center justify-between flex-wrap h-10 w-10 outline-orange-600">
                    <Link to="home" smooth={true} duration={10} className="cursor-pointer">
                        <StyledButton className="cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="#fff"
                                style={{ width: "1rem", height: "1rem"}}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </StyledButton>
                    </Link>
                    {/* <FlexContainer> */}
                    <Link to="about" smooth={true} duration={0}>
                        <StyledButton className="cursor-pointer">About</StyledButton>
                    </Link>
                    <Link to="projects" smooth={true} duration={0}>
                        <StyledButton className="cursor-pointer">Projects</StyledButton>
                    </Link>
                    <Link to="resume" smooth={true} duration={0}>
                        <StyledButton className="cursor-pointer">Resume</StyledButton>
                    </Link>
                    {/* </FlexContainer> */}
                </div>
            )}
            {/* MOBILE Navbar */}
            {!isDesktop && (
                <div className="flex flex-row items-center justify-between w-full">
                    <Link
                        to="home"
                        smooth={true}
                        duration={0}
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsOpen(false)}
                    >
                        oh
                    </Link>
                    <div onClick={() => setIsOpen((prevOpen) => !prevOpen)} className="space-y-1.5 cursor-pointer z-50">
                        <motion.div
                            onClick={() => setIsOpen(false)}
                            style={{ cursor: "pointer" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
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
                    </div>
                </div>
            )}
            {/* MOBILE Nav Menu */}
            <AnimatePresence>
                {isOpen && !isDesktop && (
                    <motion.div
                        variants={navMotion}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-5 left-0 w-full h-screen bg-[#5ECBF7] flex flex-col items-center justify-center"
                    >
                        <div>
                            <motion.div variants={navItemMotion}>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={0}
                                    onClick={() => setIsOpen(false)}
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
                                    onClick={() => setIsOpen(false)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FlexContainer>
                                        <h1>Projects</h1>
                                    </FlexContainer>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

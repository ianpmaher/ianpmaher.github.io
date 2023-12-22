import { createContext, useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";

// props? 

// create context
export const NavbarContext = createContext({});
// TYPE ASSERTION - we are asserting that the value of the context is of type NavbarContextProps

// create context provider
export const NavProvider = ({ children }) => {
    // media query hook
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    // hamburger menu toggle state
    const [isOpen, setIsOpen] = useState(false);
    // background change on scroll state
    const [scrollBackground, setScrollBackground] = useState(false);

    // change background function
    const changeBackground = () => {
        if (window.scrollY > 50) {
            setScrollBackground(true);
        } else {
            setScrollBackground(false);
        }
    };

    // event listener for scroll
    window.addEventListener("scroll", changeBackground);

    // useEffect for preventing scroll when nav is toggled
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const acceptedValues = useMemo(
        () => ({
            isDesktop,
            isOpen,
            setIsOpen,
            scrollBackground,
            setScrollBackground,
        }),
        [isDesktop, isOpen, setIsOpen, scrollBackground, setScrollBackground]
    );

    return <NavbarContext.Provider value={acceptedValues}>{children}</NavbarContext.Provider>;
};

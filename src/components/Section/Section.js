import { useEffect } from "react";
import styled from "styled-components";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"; // https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

const SectionContainer = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
`;

const SectionHeader = styled.h4`
    font-size: 1.5rem;
    margin: 0 auto;
`;

const Section = ({ title, children, element}) => {
    // from https://github.com/fisshy/react-scroll
    // using useEffect to register and unregister Events.scrollEvent
    useEffect(() => {
        // register scrollspy
        Events.scrollEvent.register("begin", (to, element) => {
            console.log("begin", to, element);
        });

        // register end event
        Events.scrollEvent.register("end", function (to, element) {
            console.log("end", to, element);
        });

        scrollSpy.update();
        
        // return cleanup function to remove registered events
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    // functions to perform scrolling
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    // Functions to handle activation of that link
    const handleSetActive = (to) => {
        console.log(to);
    };

    return (
        <SectionContainer>
            <SectionHeader>{title}</SectionHeader>
            {/* Element components that act as scroll TARGETS */}
            <Element name={title} className={element}>
                {/* hopefully now can scroll to the sections */}
                {children}
            </Element>
        </SectionContainer>
    );
};

export default Section;

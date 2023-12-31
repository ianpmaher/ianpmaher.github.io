import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Projects from "../Projects/Projects";
import ResumePage from "../../pages/ResumePage/ResumePage";
import AboutPage from "../../pages/AboutPage/AboutPage";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

/* styling for the app bar labels*/
const TabLabelStyle = {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "'Roboto Serif', serif",
    margin: "0 auto",
    padding: "0 auto",
};

const TabNav = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ bgcolor: "background.paper.p", boxShadow: "19", borderRadius: "20px" }}>
                <AppBar
                    position="sticky"
                    /* I remembered the dynamic way to set properties... so for this "AppBar" */
                    /* I'm setting the width to 80vw on mobile and 50vw on desktop */
                    /* sx={{ property: { propertyShortHand: value, propertyShortHand: value} }} */   
                    sx={{ width: { xs: "100%", md: "50vw"}, m: "0 auto", borderRadius: "10px", bgcolor: "secondary.light", boxShadow: "5" }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="inherit"
                        aria-label="tabs"
                        variant="scrollable"
                        // centered
                        sx={{ p: "0", m: "0" }}
                        // selectionFollowsFocus
                    >
                        <Tab label="Home" {...a11yProps(0)} style={TabLabelStyle} />
                        <Tab label="Projects" {...a11yProps(1)} style={TabLabelStyle} />
                        <Tab label="Contact" {...a11yProps(2)} style={TabLabelStyle} />
                        <Tab label="Resume" {...a11yProps(3)} style={TabLabelStyle} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <AboutPage />
                    <Projects />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Projects />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p>Contact Long Form</p>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ResumePage/>
                </TabPanel>
            </Box>
        </>
    );
};

export default TabNav;

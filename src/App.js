import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CssBaseline from "@mui/material/CssBaseline";
import { NavProvider } from "./context/Context";

function App() {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (

        <CssBaseline>
            <NavProvider>    
                <div className="App">
                    <HomePage />
                </div>
            </NavProvider>
        </CssBaseline>
    );
}

export default App;

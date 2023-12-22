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
            <div className="App">
                <NavProvider>
                    <HomePage />
                </NavProvider>
            </div>
        </CssBaseline>
    );
}

export default App;

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

    useEffect(() => {
        Aos.init({});
    }, []);
    
    return (
        <CssBaseline>
            <div className="App">
                <HomePage />
            </div>
        </CssBaseline>    
    );
}

export default App;

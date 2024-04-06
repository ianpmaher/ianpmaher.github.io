import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CssBaseline from "@mui/material/CssBaseline";
// import { NavProvider } from "./context/Context";
import { Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <CssBaseline>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                        {/* <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link> */}
                </Routes>
            </div>
        </CssBaseline>
    );
}

export default App;

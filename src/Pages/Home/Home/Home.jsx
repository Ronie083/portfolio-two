import { createContext, useEffect, useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Navbar from "../NavBar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Preloader from "../../../Components/Preloader/Preloader";

export const ThemeContext = createContext(null);

const Home = () => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <div className="container mx-auto">
                    {
                        isLoading ?
                            <Preloader></Preloader>
                            :
                            <>
                                <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
                                <Banner></Banner>
                                <AboutMe></AboutMe>
                                <Expertise></Expertise>
                                <Skills></Skills>
                                <Projects></Projects>
                                <Contact></Contact>
                                <GetInTouch></GetInTouch>
                                <Footer></Footer>
                            </>
                    }
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default Home;
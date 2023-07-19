import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Navbar from "../NavBar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Expertise></Expertise>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;
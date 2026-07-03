import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";

const Home = () => {
    const projects = useLoaderData();
    const location = useLocation();

    // whenever we land on Home with a hash (e.g. coming from /project/1 -> /#skills),
    // scroll smoothly to that section once the page has rendered.
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects projects={projects}></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;

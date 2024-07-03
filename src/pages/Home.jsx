import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import About from "../components/About";
import Banner from "../components/Banner";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
        </div>
    );
};

export default Home;
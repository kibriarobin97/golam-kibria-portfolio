import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const MySkills = () => {
    return (
        <div className="my-20">
            <h3 className="text-3xl font-bold text-center mb-10">Technical Skills</h3>
            <div className="flex justify-center items-center gap-10">
                <FaHtml5 className="text-6xl"/>
                <FaCss3Alt className="text-6xl"/>
                <RiTailwindCssFill className="text-6xl"/>
                <RiJavascriptLine className="text-6xl"/>
                <RiReactjsLine className="text-6xl"/>
                <DiNodejs className="text-7xl"/>
                <SiMongodb className="text-6xl"/>
            </div>
        </div>
    );
};

export default MySkills;
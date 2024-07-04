import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const MySkills = () => {
    return (
        <div className="my-20 max-w-7xl mx-auto">
            <h3 id="skills" className="text-3xl font-bold text-center mb-10">Technical Skills</h3>
            <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <FaHtml5 className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <FaCss3Alt className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <RiTailwindCssFill className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <IoLogoJavascript className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <RiReactjsLine className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <DiNodejs className="text-4xl" />
                </div>
                <div className="border-2 p-2 border-neutral-400 rounded-md">
                    <SiMongodb className="text-4xl" />
                </div>
                {/* < className="text-5xl" />
                < className="text-6xl" />
                < className="text-6xl" />
                < className="text-6xl" />
                < className="text-8xl" />
                < className="text-6xl" /> */}
            </div>
        </div>
    );
};

export default MySkills;
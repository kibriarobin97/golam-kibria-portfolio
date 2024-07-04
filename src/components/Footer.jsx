import { FaFacebookSquare, FaInstagramSquare, FaLinkedin , FaGithubSquare} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-50">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="flex flex-col justify-center items-center pt-6 lg:pt-0">
                    <div className="uppercase text-gray-50 mb-5 font-semibold">Follow On</div>
                    <div className="flex justify-start space-x-3">
                        <a rel="noopener noreferrer" href="https://www.facebook.com/kibriarobin1" title="Facebook" target="blank" className="flex items-center p-1">
                            <FaFacebookSquare className="text-gray-50 text-xl"/>
                        </a>
                        <a rel="noopener noreferrer" href="https://twitter.com/KibriaRobin1" title="Twitter" target="blank" className="flex items-center p-1">
                            <FaXTwitter className="text-gray-50 text-xl"/>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.instagram.com/m._robin" title="Instagram" target="blank" className="flex items-center p-1">
                        <FaInstagramSquare className="text-white text-xl"/>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/golam-kibria97" title="Linkedin" target="blank" className="flex items-center p-1">
                        <FaLinkedin className="text-white text-xl"/>
                        </a>
                        <a rel="noopener noreferrer" href="https://github.com/kibriarobin97" title="GitHub" target="blank" className="flex items-center p-1">
                        <FaGithubSquare className="text-white text-xl"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© All Rights Reserved by Golam Kibria</div>
        </footer>
    );
};

export default Footer;
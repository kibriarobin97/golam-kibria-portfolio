import study from "../assets/study.jpg"
import legal from "../assets/legal.jpg"
import adventure from "../assets/adventure.jpg"


const Projects = () => {

    return (
        <div className="my-20 max-w-7xl mx-auto">
            <h3 id="projects" className="text-3xl font-bold text-center mb-10">Projects</h3>
            <div className="space-y-10">
                <div
                    className="md:flex justify-center items-center gap-5 max-w-5xl mx-auto p-6 rounded-md shadow-md space-y-3">
                    <div className='md:w-1/2'>
                        <img src={study} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className='md:w-1/2 space-y-3'>
                        <h3 className='text-2xl font-bold text-center md:text-start black'>Study Hive (Educational Platform)</h3>
                        <p className="text-gray-500 text-center md:text-start">Study Hive is an innovative educational platform designed to facilitate online learning. It offers a variety of courses, interactive tutorials, and collaborative tools to enhance the learning experience for students and educators alike.</p>
                        <h3 className="font-bold text-center md:text-start">Technology Used: <span className="font-medium">Tailwind, React.js, Node.js, Express.js, MongoDB, Stripe, Firebase</span></h3>
                        <div className="flex justify-between items-center">
                            <a href="https://study-hive-388ef.web.app" target="blank" className="btn btn-secondary">View live project</a>
                            <a href="https://github.com/kibriarobin97/study-hive-client" target="blank" className="btn btn-secondary">Client Code</a>
                            <a href="https://github.com/kibriarobin97/study-hive-server" target="blank" className="btn btn-secondary">Server Code</a>
                        </div>
                    </div>
                </div>
                <div
                    className="md:flex justify-center items-center gap-5 max-w-5xl mx-auto p-6 rounded-md shadow-md space-y-3">
                    <div className='md:w-1/2'>
                        <img src={legal} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className='md:w-1/2 space-y-3'>
                        <h3 className='text-2xl font-bold text-center md:text-start black'>Legal Vantage (Lawyer Service)</h3>
                        <p className="text-gray-500 text-center md:text-start">Legal Vantage is a comprehensive lawyer service platform that connects clients with experienced legal professionals. It provides a seamless experience for finding, consulting, and hiring lawyers for various legal needs.</p>
                        <h3 className="font-bold text-center md:text-start">Technology Used: <span className="font-medium">Tailwind, React.js, Node.js, Express.js, MongoDB, Firebase</span></h3>
                        <div className="flex justify-between items-center">
                            <a href="https://legal-vantage.web.app" target="blank" className="btn btn-secondary">View live project</a>
                            <a href="https://github.com/kibriarobin97/legal-vantage-client" target="blank" className="btn btn-secondary">Client Code</a>
                            <a href="https://github.com/kibriarobin97/legal-vantage-server" target="blank" className="btn btn-secondary">Server Code</a>
                        </div>
                    </div>
                </div>
                <div
                    className="md:flex justify-center items-center gap-5 max-w-5xl mx-auto p-6 rounded-md shadow-md space-y-3">
                    <div className='md:w-1/2'>
                        <img src={adventure} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className='md:w-1/2 space-y-3'>
                        <h3 className='text-2xl font-bold text-center md:text-start black'>Adventure Aegis (Tourist Service)</h3>
                        <p className="text-gray-500 text-center md:text-start">Adventure Aegis is a premier tourist service platform offering personalized travel experiences. It provides curated travel itineraries, expert guides, and booking services to ensure a memorable and hassle-free adventure for every traveler.</p>
                        <h3 className="font-bold text-center md:text-start">Technology Used: <span className="font-medium">Tailwind, React.js, Node.js, Express.js, MongoDB, Firebase</span></h3>
                        <div className="flex justify-between items-center">
                            <a href="https://adventure-aegis.web.app" target="blank" className="btn btn-secondary">View live project</a>
                            <a href="https://github.com/kibriarobin97/adventure-aegis-client" target="blank" className="btn btn-secondary">Client Code</a>
                            <a href="https://github.com/kibriarobin97/adventure-aegis-server" target="blank" className="btn btn-secondary">Server Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
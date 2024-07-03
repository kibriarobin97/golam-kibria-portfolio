import aboutPic from "../assets/portfolio.jpg"

const About = () => {
    return (
        <div className="max-w-7xl mx-auto gap-10 my-20 p-5">
            <h3 className="text-3xl font-bold text-center mb-10">About Me</h3>
            <div className="lg:flex justify-center items-center lg:gap-10">
                <div className="lg:w-1/3 w-2/3 mx-auto border-8 rounded-full mt-5">
                    <img src={aboutPic} alt="" className="rounded-full w-full h-[290px] lg:h-[400px] object-cover" />
                </div>
                <div className="lg:w-1/2 space-y-4 mt-3">
                    <p>Hey there! I am a Web Developer with a passion for creating beautiful and functional web applications. My toolkit includes 
                        <span className="font-bold mx-1">HTML</span>, 
                        <span className="font-bold mx-1">CSS</span>,  
                        <span className="font-bold mx-1">Tailwind CSS</span>, 
                        <span className="font-bold mx-1">JavaScript</span>,
                        <span className="font-bold mx-1">React.js</span>, 
                        <span className="font-bold mx-1">Node.js</span>, 
                        <span className="font-bold mx-1">Express.js</span>, and
                        <span className="font-bold mx-1">MongoDB</span>. I love diving into new technologies and continuously expanding my knowledge through research and experimentation. 
                    <br />

                        For me, coding is both a profession and a hobby. I enjoy turning complex problems into simple, elegant solutions and creating user experiences that are both intuitive and enjoyable. My work is driven by a commitment to quality and a desire to keep learning and evolving in the tech world.
                        <br />

                        Outside of work, I am an avid reader and tech enthusiast, always on the lookout for the next big thing in the industry. I believe in the power of collaboration and am always open to new ideas and perspectives.</p>
                    <button className="btn btn-secondary">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;
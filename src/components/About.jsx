import aboutPic from "../assets/portfolio.jpg"

const About = () => {
    return (
        <div className="max-w-7xl mx-auto gap-10 my-20 p-10">
            <div className="flex justify-center items-center gap-10">
                <div className="w-1/4">
                    <img src={aboutPic} alt="" className="rounded-full object-cover" />
                </div>
                <div className="w-1/2">
                    <h3 className="text-xl font-bold">About Me</h3>
                    <p>Hey there! I am a Web Developer with a passion for creating beautiful and functional web applications. My toolkit includes HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I love diving into new technologies and continuously expanding my knowledge through research and experimentation. 
                    <br />

                        For me, coding is both a profession and a hobby. I enjoy turning complex problems into simple, elegant solutions and creating user experiences that are both intuitive and enjoyable. My work is driven by a commitment to quality and a desire to keep learning and evolving in the tech world.
                        <br />
                        
                        Outside of work, I am an avid reader and tech enthusiast, always on the lookout for the next big thing in the industry. I believe in the power of collaboration and am always open to new ideas and perspectives.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
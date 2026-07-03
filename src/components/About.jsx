const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>

        <div className="bg-[#1a2332] p-8 md:p-10 rounded-2xl shadow-lg shadow-black/30 border-l-4 border-orange-400">
          {/* Introduction */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">
              My Journey & Passion
            </h3>
            <p className="leading-relaxed text-lg text-gray-300">
              I am a dedicated Web Developer with a strong passion for building
              modern, responsive, and user-friendly web applications. My journey
              in programming is driven by the thrill of turning complex
              challenges into simple, elegant digital solutions. I specialize in
              the <span className="font-bold text-white">MERN</span> stack, but I am always eager to learn and adapt to new
              technologies to stay ahead in the tech world.
            </p>
          </div>

          {/* Two Columns for Interests and Philosophy */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interests Section */}
            <div>
              <h4 className="text-xl font-semibold text-orange-400 mb-3">
                Beyond Coding
              </h4>
              <ul className="list-disc ml-5 space-y-2 text-lg text-gray-300">
                <li>
                  I am an active sports enthusiast—I love both playing and
                  watching sports.
                </li>
                <li>
                  Sports help me stay energetic, focused, and maintain a
                  competitive spirit.
                </li>
                <li>
                  I enjoy reading tech blogs and keeping up with the latest
                  industry trends.
                </li>
              </ul>
            </div>

            {/* Philosophy Section */}
            <div>
              <h4 className="text-xl font-semibold text-orange-400 mb-3">
                My Philosophy
              </h4>
              <p className="leading-relaxed text-lg text-gray-300">
                I believe that coding is not just a profession, but an art form.
                My goal is to ensure high-quality code and create intuitive user
                experiences that make a real difference. I am always open to new
                ideas, collaboration, and learning perspectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

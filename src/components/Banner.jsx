import banner from "../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-[300px] lg:min-h-[500px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="max-w-full lg:max-w-xl pt-14 lg:pt-0">
                    <h1 className="mb-3 text-2xl lg:text-3xl font-bold">Hi,</h1>
                    <h1 className="mb-3 text-2xl lg:text-3xl font-bold">I am <span className="text-orange-400 text-4xl">Golam Kibria</span></h1>
                    <h2 className="mb-3 text-xl lg:text-2xl">Web Developer</h2>
                    <p className="mb-5">A passionate and dedicated Web Developer. My journey in web development has been driven by a love for coding and a desire to create impactful digital experiences.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
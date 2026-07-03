import { Link, useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const projects = useLoaderData();
    const { id } = useParams();

    // find the one project whose _id matches the route param
    const project = projects.find(p => p._id === parseInt(id));

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto my-24 text-center">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/" className="btn btn-secondary mt-5">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto my-16 px-5 space-y-6">
            <img
                src={project.photo}
                alt={project.name}
                className="w-full h-80 object-cover rounded-md"
            />

            <h2 className="text-3xl font-bold text-white">{project.name}</h2>

            <div>
                <h3 className="font-bold text-white">Technology Used:</h3>
                <p className="text-gray-400 font-semibold">{project.technology}</p>
            </div>

            <p className="text-gray-500">{project.description}</p>

            <div>
                <h3 className="font-bold text-white">Challenges Faced:</h3>
                <p className="text-gray-500">{project.challenges}</p>
            </div>

            <div>
                <h3 className="font-bold text-white">Future Plans:</h3>
                <p className="text-gray-500">{project.futurePlans}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <a href={project.Live} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    View Live Project
                </a>
                <a href={project.clientLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    Client Code
                </a>
                <Link to="/#projects" className="btn btn-outline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;

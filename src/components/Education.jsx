
const Education = () => {
    return (
        <div className="my-20 max-w-7xl mx-auto">
            <h3 className="text-3xl lg:text-4xl text-white font-bold text-center mb-10">Education</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-xl">Institute</th>
                            <th className="font-bold text-xl">Degree</th>
                            <th className="font-bold text-xl">Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <td>Feni Ideal Polytechnic Institute</td>
                            <td>Diploma in Computer science</td>
                            <td>2018</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Education;
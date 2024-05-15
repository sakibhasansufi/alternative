import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Queries = () => {
    const { user } = useContext(AuthContext);
    const newData = useLoaderData();
    return (
        <div className="flex justify-center">
            <section className="">
                {
                    newData.map(data => <div key={data._id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img className="object-cover w-full h-64" src={data.photo} alt="Article" />

                        <div className="p-6">
                            <div>
                                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Query Title:{data.title}</span>
                                <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 " tabIndex="0" role="link">Product Name :{data.name}</p>
                                <p className="block mt-2 text-sm font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 " tabIndex="0" role="link">Brand Name : {data.brand}</p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Boycott Reason: {data.reason}</p>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <img className="object-cover h-10 rounded-full" src={user.photoURL || 'no photo'} alt="Avatar" />
                                        <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{user.displayName || 'user not found'}</p>
                                    </div>
                                </div>
                                <Link to={`/detail/${data._id}`}>
                                    <button className="btn btn-secondary">Recommend</button>
                                </Link>

                            </div>
                        </div>
                    </div>)
                }
            </section>

        </div>
    );
};

export default Queries;
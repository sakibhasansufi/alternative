import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Detail = () => {
    const viewInfo = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, brand, photo, title, reason } = viewInfo;
    return (
        <section className="">
            <h2 className="text-2xl font-bold text-center mb-10">Query Details</h2>

            <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                
                <img className="object-cover w-full h-64" src={photo} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">Product Name : {name}</span><br />
                        <span className="text-xs font-medium  uppercase dark:text-blue-400">Product Brand:   {brand}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Query Title : {title}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Boycott Reason : {reason}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={user.photoURL} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{user.displayName}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Detail;
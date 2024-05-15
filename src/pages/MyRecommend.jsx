import { useLoaderData } from "react-router-dom";


const MyRecommend = () => {
    const my = useLoaderData();
    return (

        <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                    <tr className="bg-[#0095FF] text-white">
                        <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                        <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50 border-b transition duration-300">
                        <td className="py-4 px-4 flex justify-start">
                            <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                        </td>
                        <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
                        <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
                        <td className="py-4 px-6 border-b text-end">
                            <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>


    );
};

export default MyRecommend;
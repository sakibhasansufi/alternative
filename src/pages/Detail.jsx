import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Detail = () => {
    const viewInfo = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, brand, photo, title, reason } = viewInfo;
    const handleRecommend= async e=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const image = form.image.value;
        const reason = form.reason.value;
        const recommended = {title,name,image,reason};
        console.log(recommended) 


        //send data 
        fetch('https://b9a11-server-side-five.vercel.app/recommend',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(recommended)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Congratulation",
                    text: "Data added successfully",
                    icon: "success"
                  });

            }
        })
    }
    return (
        <section>
            <h2 className="text-2xl font-bold text-center mb-10">Query Details</h2>
            <section className="flex justify-center">

                <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">

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
            <h3 className="text-center font-semibold text-xl mt-8 mb-5">Recommendation form</h3>



            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                
                {/* Input fields and the form started */}
                <form onSubmit={handleRecommend} className="space-y-6">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Recommendation Title
                        </label>
                        <input type="text" name="title" id="username" placeholder="Title" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Product Name
                        </label>
                        <input type="text" name="name" id="password" placeholder="Product Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Product Image
                        </label>
                        <input type="text" name="image" id="password" placeholder="Product Image" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Recommendation Reason
                        </label>
                        <input type="text" name="reason" id="password" placeholder="Recommendation Reason" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        
                    </div>
                    <input type="submit" value="Add Recommend" className="btn btn-success">
                         </input>

                </form>
            </div>
        </section>


    );
};

export default Detail;
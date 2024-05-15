import Swal from "sweetalert2";


const MyRecommendTable = ({mine,del,setDel}) => {
    const {_id,image,name,title} = mine;
    const handleDelete= _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/recommend/${_id}`,{
                    method : 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your data has been deleted.",
                            icon: "success"

                        });
                    }
                })
            }

        })

    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                    <tr className="bg-[#0095FF] text-white">
                        <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Recommend Title</th>
                        <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50 border-b transition duration-300">
                        <td className="py-4 px-4 flex justify-start">
                            <img src={image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                        </td>
                        <td className="py-4 px-6 border-b text-xl font-medium">{name}</td>
                        <td className="py-4 px-6 border-b text-lg font-medium">{title}</td>
                        <td className="py-4 px-6 border-b text-end">
                            <button  onClick={()=> handleDelete(_id)}
                            className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyRecommendTable;
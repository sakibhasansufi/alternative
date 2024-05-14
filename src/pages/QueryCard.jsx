import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const QueryCard = ({ query }) => {
    const { _id, photo, name, brand, title } = query;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/new/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your art has been deleted.",
                                icon: "success"

                            });


                        }
                    })
            }
        })

    }
    return (
        <section >
            <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-1/3 bg-cover" >
                    <img src={photo} className="h-full" alt="" />
                </div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>
                    <h1 className="text-xl font-medium text-gray-800 dark:text-white">{brand}</h1>

                    <div className="flex justify-between mt-3 item-center">

                        <Link to={`/detail/${_id}`}>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">View</button>
                        </Link>
                        <Link to={`/updateQuery/${_id}`}>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-green-500 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)}
                            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default QueryCard;
import { useLoaderData } from "react-router-dom";
import MyRecommendTable from "./MyRecommendTable";
import { useState } from "react";


const MyRecommend = () => {
    const my = useLoaderData();
    const [del,setDel] = useState(my);
    return (
        <section>
            <h2 className="text-center text-2xl font-bold mt-7">Recommended Data</h2>
            
            <section className="">
                {
                    del.map(mine=> <MyRecommendTable key={mine._id} mine={mine}
                        del={del}  
                        setDel={setDel}
                    ></MyRecommendTable>)
                }
            </section>

        </section>




    );
};

export default MyRecommend;
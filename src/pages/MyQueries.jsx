import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import QueryCard from './QueryCard';
import { useState } from 'react';
const MyQueries = () => {
    const newData = useLoaderData();
    const [datas,setDatas]=useState(newData)
    return (
        <div className="mt-3">
            <Banner></Banner>
                <h2 className='text-center text-2xl font-semibold mb-5'>My added query</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    datas.map(query=> <QueryCard key={query._id} query={query} datas={datas} setDatas={setDatas}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default MyQueries;
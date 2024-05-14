import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import QueryCard from './QueryCard';
const MyQueries = () => {
    const newData = useLoaderData();
    return (
        <div className="mt-3">
            <Banner></Banner>
                <h2 className='text-center text-2xl font-semibold mb-5'>My added query</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    newData.map(query=> <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default MyQueries;
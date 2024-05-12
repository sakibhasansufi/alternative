import { Link } from 'react-router-dom';
import alternative from '../assets/alternative_banner.png'

const Banner = () => {
    return (
        <div className=''>
            <img src={alternative} alt="" />
            <section className='flex justify-between'>
                <div></div>
                <Link to='/add'><button className='btn btn-warning '>Add Query</button></Link>
            </section>

        </div>
    );
};

export default Banner;
import { Link } from 'react-router-dom';
import error from '../assets/Frame.png'

const Error = () => {
    return (
        <div >
            <div className='flex justify-center items-center min-h-screen'>
                <div>

                    <img src={error} alt="" />

                </div>
            </div>
            <div className='flex justify-center underline-offset-1'>
                <div>

                    <h3 className='text-5xl text-red-500'><Link>Return To Home</Link></h3>
                </div>

            </div>

        </div>
    );
};

export default Error;
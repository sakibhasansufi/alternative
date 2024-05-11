import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/queries'>Queries</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        {
                            user ? <div >
                                <li><NavLink to='/queries'>Recommendation for me</NavLink></li>
                                <li><NavLink to='/myQueries'>My queries</NavLink></li>
                                <li><NavLink to='/queries'>My Recommendation</NavLink></li>
                                <li><a onClick={logOut}>Log out</a></li>

                            </div>
                                : <div><li><NavLink to='/login'>Log in</NavLink></li></div>
                        }
                    </ul>
                </div>
                <Link className="text-xl">AltMart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    {
                        user ? <div className="flex">
                            <li><NavLink to='/queries'>Recommendation for me</NavLink></li>
                            <li><NavLink to='/myQueries'>My queries</NavLink></li>
                            <li><NavLink to='/queries'>My Recommendation</NavLink></li>
                            <li><a onClick={logOut}>Log out</a></li>

                        </div>
                            : <div><li><NavLink to='/login'>Log in</NavLink></li></div>
                    }
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;
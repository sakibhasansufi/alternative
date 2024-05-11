import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";


const Root = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Root;
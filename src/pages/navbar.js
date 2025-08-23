import {Link, Outlet} from "react-router-dom";
import '../styles/navbar.css';

const Navbar =()=>{
    return (
        <div className={'navBar-container'}>
            <nav>
                <ul  className={'navBar'}>
                    <li>
                        <Link to={'/'} className={'nav'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/movies'} className={'nav'}>Movies</Link>
                    </li>
                    <li>
                        <Link to={'/shows'} className={'nav'}>TV Shows</Link>
                    </li>
                    <li>
                        <Link to={'/chatbot'} className={'nav'}>ChatBot</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
};

export default Navbar;
import {Link, Outlet} from "react-router-dom";
import '../styles/navbar.css';

const Navbar =()=>{
    return (
        <div className={'navBar-container'}>
            <nav>
                <ul>
                    <li>
                        <Link to={''}>Movies</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
};

export default Navbar;
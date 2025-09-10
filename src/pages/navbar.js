import {Link, Outlet} from "react-router-dom";
import '../styles/navbar.css';
import {useContext} from "react";
import {AuthContext} from "./AuthContext";

const Navbar =()=>{
    const {user, logout} = useContext(AuthContext);
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
                    {!user ?(
                        <div key={"auth-links"}>
                            <Link to={'/login'} className={'nav'}>Login</Link>
                            <Link to={'/register'} className={'nav'}>Register</Link>
                        </div>
                    ) : (
                        <div key={"user-info"}>
                            <span>Welcome, {user.name}({user.email})</span>
                            <button onClick={logout} className={'logout-btn'}>Logout</button>
                        </div>
                    )}

                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
};

export default Navbar;
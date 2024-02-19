import { Link } from "react-router-dom";
const NavbarContainer = () => {
    return ( 
        <>
            <nav className="navbar-container">
                <div> <img src="/Home icon.svg" alt="" /> <Link to={"/"}> Home</Link></div>
                <div> <img src="/About icon.svg" alt="" /> <Link to={"/"}>Notification</Link></div>
                <div> <img src="/Search icon.svg" alt="" /> <Link to={"/"}>Decouvrir des amis</Link></div>
            </nav>
        </>    
    );
}

export default NavbarContainer;
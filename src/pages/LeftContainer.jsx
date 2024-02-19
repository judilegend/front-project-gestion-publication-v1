import { Link } from "react-router-dom";
const LeftContainer = () => {
    return (  
        <div className='left-container'>
            <Link to={'/'} >
                <h1>G-Coms</h1>
            </Link>
            <div>
                <h2><img src="/Info icon.svg" alt="" /> About us</h2>
                <h2><img src="/Contacts icon.svg" alt="" /> Contact us</h2>
                <h2><img src="/Settings icon.svg" alt="" /> Setting</h2>
                <h2><img src="/aide icon.svg" alt="" /> Aide</h2>

            </div>
        </div>
    );
}

export default LeftContainer;
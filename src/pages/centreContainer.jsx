import NavbarContainer from "./navbarContainer";
import Publication from "./publication";
const CentreContainer = () => {
    return ( 
        <>
            <div className='centre-container'>
                <NavbarContainer/>
                <div className="pub">
                    <Publication/>
                </div>
            </div>
        </>
    );
}

export default CentreContainer;
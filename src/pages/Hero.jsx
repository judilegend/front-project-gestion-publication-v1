import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'
import LeftShape from '../pages/Leftshape'
import { useEffect, useRef } from "react";
const Hero = () => {
    const laklosy = useRef(null)
    useEffect(()=>{
        if(laklosy.current){
            laklosy.current.addEventListener('mouseover', () =>{
                laklosy.current.style.transform="scale(2,2)"
              })
              laklosy.current.addEventListener('mouseout', () =>{
                laklosy.current.style.transform="scale(1)"
              })
        }
    })
    return (  
    <>
    <div >
        <Navbar/>
            <main className="hero">
                <section className="contain-text">
                 <h1>Simplifiez la gestion des <span>interactions</span> entre </h1>
                <div id="rectangle">
                        <div className="join">Joignez nous</div>
                         <div> <button id ="rectangle2"><Link to={'/user/login'}>Get Started</Link></button></div>
                        
                </div>
                </section>
                <section className="contain-image">
                    <img src="/righ-shape.svg" alt="" />
                </section>          
            </main>
            <img src="/clipse.svg" alt="" className="eclipse1" />
            <img src="/Vector (1).png" alt="photo"  className="vector"/>
            <img src="/image 34.png" alt="photo" className="vector1"  ref={laklosy}/>
            <img src="/Ellipse.svg" alt="photo" className="eclipse" />
            <img src="/round.svg" alt="photo" className="round"/>
            <img src="/Fill 1.svg" alt="photo" className="fill" />
            <img src="/waves.svg" alt="photo" className="waves" />


    </div>
        <LeftShape/>
    </>
    );
}
 
export default Hero;
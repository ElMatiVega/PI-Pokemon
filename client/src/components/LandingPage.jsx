import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from "../components/styles/landingPage.module.css";
import pokeBall from '../components/Img&Gif/pokeball.png';
import logo from '../components/Img&Gif/Logo.png';
import gif from '../components/Img&Gif/Hand.gif';
import linkedIn from "../components/Img&Gif/Icono_LinkedIn.png";
import github from "../components/Img&Gif/Icon_github.png";



// // function EstadoAhijo(props){
// //     return(
// //         <div>
// //             <h3>{props.contadorHijo}</h3>
// //         </div>
// //     )
// // }

// function handlerLogo(){
//     return(     
      //  <div className={styles.logoContainer}>
      //   <img className={styles.logoLanding} src={logo} alt="Pokeimage not found" />
      //   </div>

//     )
// }
// function Aviso(){
//     return(
//         <p>Bienvenidos a la PokeWeb</p>
//     )

// }
// export default class Estado extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             contador:0,
//         }
//         setInterval(()=>{
//             this.setState({
//                 contador:this.state.contador+1
//             });
//         },1000);
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Hoy es el Cumpleaños de un pibe.</h2>
                
//                 {this.state.contador >=10? <Saludo/>:<Aviso />}
               
//                 {/* <p>{this.state.contador}</p>
                
//                 <EstadoAhijo contadorHijo={this.state.contador*2}/>  */}
//             </div>
//         );
//     }
// }





const LandingPage = () => {
  return (
    <div className={styles.BG}>
      <div className={styles.logoContainer}>
        <img className={styles.logoLanding} src={logo} alt="Pokeimage not found" />
      </div>
      <Link className={styles.Link} to={'/home'}>
          <img  className={styles.pokeBola} src={pokeBall} />
          <img className={styles.hand} src={gif} alt='gif'/>
      </Link>
      
      <div className={styles.personalInfo}>
        <h2 className={styles.byMV}>Matías Vega</h2>
        <a href="https://www.linkedin.com/in/mat%C3%ADas-vega-98a527239/   "target="_blank">
          <img className={styles.icons} src={linkedIn} alt="Not-found" />
        </a>
        <a href="https://github.com/ElMatiVega" target="_blank">
          <img className={styles.icons} src={github} alt="Not-found" />
        </a>
      </div>
      
    </div>
  );
};


export default LandingPage

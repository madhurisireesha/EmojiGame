import './nav.css'
const Nav=(props)=>{
    const{score,topscore,card}=props
    
    return(
        <div className="navcontainer">
            <div className='one'>
           
            <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="img1"
          alt="emoji logo"
        /> <h3>Emoji Game</h3>
            </div>
            {card===false&&<div className='scorecard'><p>{}</p><p>{}</p></div>}
           {card===true&&<div className='scorecard'><p>Score:{score}</p><p>TopScore:{topscore}</p></div>} 
         </div>
    )
}
export default Nav
import './winorlose.css'
const WinOrLoseCard=(props)=>{
    const{card,text,score,playOne,topscore}=props
    const playTwo=()=>{
        playOne()
    }
   
const imgur=text==='You Win'?"https://assets.ccbp.in/frontend/react-js/win-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
    return(
        <div className="winorlosecontainer">
            
            <div className="firstwon">
                <h1>{text}</h1>
                <h3>Best Score</h3>
                <p>{score}/12</p>
               <button className='clicki' onClick={playTwo}>Play Again</button>
            </div>
            <div className="winimage">
                <img src={imgur}/>
            </div>
        
        </div>
    )

}
export default WinOrLoseCard
 
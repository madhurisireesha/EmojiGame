import './winorlose.css'
const WinOrLoseCard=(props)=>{
    const{card,text,score, onPlayAgain}=props
    const onClickPlayAgain=()=>
    {
        onPlayAgain()
    }
   
const imgur=text==='you win'?"https://assets.ccbp.in/frontend/react-js/win-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
    return(
        <div className="winorlosecontainer">
            <div className="firstwon">
                <h1>{text}</h1>
                <h3>Best Score</h3>
                <p>{score}/12</p>
               <button className='clicki' onClick={onClickPlayAgain}>play Again</button>
            </div>
            <div className="winimage">
                <img src={imgur}/>
            </div>

        </div>
    )

}
export default WinOrLoseCard
 
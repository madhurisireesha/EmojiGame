import './emojigame.css'
const Emojigame=(props)=>{
    const{details,clickOnEmoji}=props
    const{id,emojiGame,emojiUrl}=details
    const onClickingemoji=()=>{
        clickOnEmoji(id)
    }
    
    return(
        <div className='emojicontainer'>
            <button className="emojibtn" onClick={onClickingemoji}>
                <img src={emojiUrl} className="emoji"/></button>

        </div>
    )
}
export default Emojigame
import Emojigame from './Emojigame'
import {Component} from 'react'
import Nav from './Nav'
import './App.css'
import WinOrLoseCard from './WinOrLoseCard'
 const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
class App extends Component{
  state={
    score:0,
    topscore:0,
    
    shuffledlist:emojisList,
    newlist:[],
    card:true,
    text:'',
    playagain:false
    }
    getShuffledlist=()=>{
    const shuffledlist=emojisList.sort(()=>Math.random()-0.5)
      return shuffledlist
    }
    onPlayAgain=()=>{
      const{score,topscore}=this.state
      this.setState({
        playagain:true
      })
      if(score>topscore)
      {
        this.setState({
          topscore:score
        })
      }

    }
   
  clickOnEmoji=(id)=>{
    const{shuffledlist,newlist,count,topscore,playagain}=this.state
    const shufflelength=shuffledlist.length
    const newlistlength=newlist.length
    const isPresent=newlist.includes(id)
    if(!isPresent){
      this.setState(prevState=>({
        score:prevState.score+1,
        topscore:prevState.topscore+1 
        
      }))
      if(newlistlength===shufflelength){
         this.setState({
          card:true,
          text:'you win',
          //playagain:true
         })
      }
     } else{
      this.setState({
        card:false,
        text:'you lose',
        //playagain:false
      })
    }
    this.setState({
   shuffledlist:shuffledlist.sort(()=>Math.random()-0.5)
   })
   this.setState(prevState=>({
    newlist:[...prevState.newlist,id]
   }))
  
     return shuffledlist
   }
  

  render(){
     const shuffledlist=this.getShuffledlist()
     
    const{score,topscore,card,text,playagain}=this.state
    return(
      <div className='mainContainer'>
       
        <Nav score={score} topscore={topscore}/>
      <div className='container'>
        
     
        {card===true&& <div className='container1'>{shuffledlist.map((details)=>(
          <Emojigame details={details} clickOnEmoji={this.clickOnEmoji} />
        ) )}</div>}
        {card===false&&<div>{<WinOrLoseCard card={card} text={text} score={score} onPlayAgain={this.onPlayAgain} />}</div>}
      </div>
      
      </div>
    )
  }
}
export default App
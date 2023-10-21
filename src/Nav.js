import './nav.css'
const Nav=(props)=>{
    const{score,topscore}=props
    return(
        <div className="navcontainer">
            <div className='scoreco'>
            <p>Score:{score}</p>
            <p>TopScore:{topscore}</p>
            </div>
        </div>
    )
}
export default Nav
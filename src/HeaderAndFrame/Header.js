import PmplLogo from '../ImagesUsed/PMPL-LOGO.png'
import './HeaderFrame.css'
function Header(props){
  
        
    
    return(
        <div className='HeaderRibbon'>
            <img className='Logo' src={PmplLogo} alt=''/>
            <div className='NavigationLinkContainer'><span id='RoomNav'>{props.PageHeaderNav}</span></div>
        
        </div>
    )
}

export default Header
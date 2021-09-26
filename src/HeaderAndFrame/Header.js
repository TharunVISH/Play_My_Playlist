import PmplLogo from '../ImagesUsed/PMPL-LOGO.png'

import { Link} from "react-router-dom";
function Header(props){
  
        let LinkToPath=(props.PageHeaderNav==='Exit Room')?'/Home':'/InsideRoom';
    
    return(
        <div className='HeaderRibbon'>
            <Link to='/Home'><img className='Logo' src={PmplLogo} alt=''/></Link>
            <div className='NavigationLinkContainer'><Link to={LinkToPath}><span id='RoomNav'>{props.PageHeaderNav}</span></Link></div>
        
        </div>
    )
}

export default Header
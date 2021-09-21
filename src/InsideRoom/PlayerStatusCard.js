import React,{Component} from "react";
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './PlayerStatus.css'
import StatusOnline from '../ImagesUsed/OnlineStatusIndicator.png';
import StatusOffline from '../ImagesUsed/OfflineStatusIndicator.png';
class PlayerStatusCard extends Component{
    
    render(){
        let OnlineStatusIndicator;
        if (this.props.IsOnline){
             OnlineStatusIndicator=StatusOnline
        }
        else{
             OnlineStatusIndicator=StatusOffline
        }
    return (
    <div className='PlayerCard'>
        
        <div className="PlayerImageContainer" >
            
            <Image className ="PlayerImage" src={'/PlayersImages/Player_Id_'+this.props.ID+'.jpg'}></Image>
            <Image className ="OnlineStatusIndicator" src={OnlineStatusIndicator}></Image>
        </div>
        <div className='PlayersInfo'>
            
            {this.props.Name}
            <br/>
            {this.props.NoOfSongs+' Songs Added'}
        </div>

        
    </div>

    )
}}
export default PlayerStatusCard
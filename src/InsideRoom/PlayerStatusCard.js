import React,{Component} from "react";
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './PlayerStatus.css'

class PlayerStatusCard extends Component{
    
    render(){
    return (
    <div className='PlayerCard'>
        
        <div className="PlayerImageContainer" >
            
            <Image className ="PlayerImage" src={'/PlayersImages/Player_Id_'+this.props.ID+'.jpg'}></Image>

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
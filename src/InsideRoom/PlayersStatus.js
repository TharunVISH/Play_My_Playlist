import 'bootstrap/dist/css/bootstrap.min.css';


import PlayerStatusCard from'./PlayerStatusCard';
import DisplayLogedInPlayer from './LogedInProfileDisplay'
import './PlayerStatus.css'
import ButtonHowToPlay from'./HowToPlayButton';



function PlayersStatus(){


    let PlayerInfo=[
        {
          Name:'Player 1',
          ID:'0001',
          NoOfSongs:10,
          IsOnline:true
    
        },
        {
          Name:'Player 2',
          ID:'0002',
          NoOfSongs:8,
          IsOnline:true
    
        },
        {
          Name:'Player 3',
          ID:'0003',
          NoOfSongs:0,
          IsOnline:false
    
        },
        {
          Name:'Player 4',
          ID:'0004',
          NoOfSongs:4,
          IsOnline:true
    
        }
    ]
    return (
      <div>
        <div>
          <DisplayLogedInPlayer ID='0001' Name='Player 1'></DisplayLogedInPlayer>
          <ButtonHowToPlay/>
        </div>
        <div className='WaitingLobby'>
          <div  className='WaitingLobbyHead'>Waiting Lobby</div>
    
          {PlayerInfo.map(player=>(<PlayerStatusCard Name={player.Name} ID={player.ID} NoOfSongs={player.NoOfSongs} IsOnline={player.IsOnline} />))}
        </div>
    </div>
  
  );
}
export default PlayersStatus
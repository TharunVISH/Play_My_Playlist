import AddSong from './AddSong'
import PlayersStatus from './PlayersStatus'
import Header from '../HeaderAndFrame/Header'
function InsideRoom() {
    return(
  <div>
    <Header PageHeaderNav = 'Exit Room'/>
      <PlayersStatus/>
      <AddSong/>
    </div>
    );
  }
  
  export default InsideRoom;
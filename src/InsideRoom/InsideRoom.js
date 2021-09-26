import AddSong from './AddSong'
import PlayersStatus from './PlayersStatus'
import Header from '../HeaderAndFrame/Header'
function InsideRoom() {
    return(
  <div>
    <Header PageHeaderNav = 'Exit Room'/>
    <div className=" FormFrame shadow-lg pt-5 pb-5  mb-10 mt-5 rounded">
      <PlayersStatus/>
      <AddSong/>
    </div>
    </div>
    );
  }
  
  export default InsideRoom;
import Board from "./Board";
import Header from "./Header";
import Player from "./Player";




function App() {


  return (
 
  <div>

    <Header/>
    <Player whichPlayer='X'/>
    <Player whichPlayer='O'/>
    <Board/>

  </div>


  )
}


export default App

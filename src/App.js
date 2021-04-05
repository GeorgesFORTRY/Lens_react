import "./css/reset.css";
import "./css/style.css";
import Player from "./components/Player";


const players = ["Jean-Louis LECA", "Loïc BADE", "Jonathan CLAUSS", "Yannick CAHUZAC", "Cheick DOUCOURE", "Seko FOFANA", "Gaël KAKUTA", "Florian SOTOCA", "Arnaud KALIMUENDO"]

function App() {
  return (
    <div className="App">
      <h1>LENS</h1>
      <section id="gallery">
        {players.map((player) => {
          return <Player playerName={player} />
        })}
      </section>

    </div>
  );
}

export default App;

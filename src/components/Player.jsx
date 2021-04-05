
function Player({playerName}) {
  const cleanName = playerName
    .toLowerCase()
    .substring(playerName.indexOf(" ")+1);
  return (
    <article className="player">
      <img src="/img/public.jpg" alt="" className="public" />
      <img src={`/img/${cleanName}/pic.png`} alt="" className="figure" />
      <footer>
          <h3>{playerName}</h3>
      </footer>
    </article>
  );
}

export default Player;

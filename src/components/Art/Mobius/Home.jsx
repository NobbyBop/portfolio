import Navigation from "./Navigation";
function Home() {
  let photos = [
    { id: 1, source: `${import.meta.env.BASE_URL}mobius/elevator.png` },
    { id: 2, source: `${import.meta.env.BASE_URL}mobius/climb.png` },
    { id: 3, source: `${import.meta.env.BASE_URL}mobius/lean.png` },
    { id: 4, source: `${import.meta.env.BASE_URL}mobius/beatles.png` },
    { id: 5, source: `${import.meta.env.BASE_URL}mobius/lie_down.png` },
    { id: 6, source: `${import.meta.env.BASE_URL}mobius/babbio.png` },
    { id: 7, source: `${import.meta.env.BASE_URL}mobius/duel.png` },
    { id: 8, source: `${import.meta.env.BASE_URL}mobius/park_stacked.png` },
    { id: 9, source: `${import.meta.env.BASE_URL}mobius/theatre.png` },
  ];
  return (
    <div className="mobiusPageContainer">
      <Navigation />
      <div className="mobiusTextDiv">
        <h2>Home</h2>
        <h3 className="info">About</h3>
        <p>
          MOBIUS LINE is Bennet Stoll, Grayson Beck, Jon Burke, Jack Kline, (and
          Captain).{" "}
        </p>
        <h3 className="info">Socials</h3>
        <p>
          Follow us on instagram{" "}
          <a href="https://www.instagram.com/mobiuslineband/">
            @mobiuslineband
          </a>{" "}
          !
        </p>
      </div>

      <h3>Photos</h3>
      <div className="home-photos-container">
        {photos.map((item) => (
          <div className="home-photos" key={item.id}>
            <img src={item.source} className="home-image" />
            <p>Image {item.id}/9</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

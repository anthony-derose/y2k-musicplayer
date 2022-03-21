import "./styles.css";
import mbv from "./images/mbvcover.jpg";

export default function App() {
  return (
    <div className="center">
      <div className="container">
        <div className="Top">
          <div className="exit-button">x</div>
          <div className="music-text">Music</div>
        </div>
        <div className="box">
          <div id="covers">
            <img src={mbv} alt={"mbv"} />
          </div>
        </div>
        <div className="bottomtab"></div>
      </div>
    </div>
  );
}

import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Wael Beldi</h1>

        <br />

        <img src={imageInSrc} alt="src" />

        <br />

        <img src="/imageInPublic.jpg" alt="public" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

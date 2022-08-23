import "../styles/components/Main.css";
import React from "react";

function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allmemeImages, setAllmemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllmemeImages(data.data.memes));
  }, []);

  console.log(allmemeImages);

  function getMeme() {
    // const allmemeImages = allmemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * allmemeImages.length);
    const url = allmemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="form_container">
      <div className="form">
        <input
          input="text"
          placeholder="topmost text"
          className="form_input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          input="text"
          placeholder="bottom text"
          className="form_input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMeme} className="form_button">
          Get a new meme image
        </button>
      </div>
      <div>
        <img className="meme_image" src={meme.randomImage} alt="" />
        <h2 className="meme_text top">{meme.topText}</h2>
        <h2 className="meme_text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;

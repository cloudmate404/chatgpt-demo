const App = () => {
  return (
    <div className="app">
      <section className="sideBar">
        <button> + New chat </button>
        <ul className="history">
          <li>Game changer</li>
        </ul>
        <nav>
          <p>Made by Hassan</p>
        </nav>
      </section>
      <section className="main">
        <h1>HazzyGPT</h1>
        <ul className="feed"></ul>
        <div className="bottomSection">
          <div className="inputContainer">
            <input />
            <div id="submit">➢ </div>
          </div>
          <p className="info">
            HazzyGPT May 16 Version. Free Test Preview. My Goal is to see how
            far I can take this. Your feedback is highly needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;

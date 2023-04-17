import "./App.css";

function App() {
  const onClick = () => {
    console.log("abc");
  };

  return (
    <>
      <div className="App">
        <header className="App-header" style={{ backgroundColor: "RED" }}>
          {/*  */}
          {/* {(i = 0 ? "안녕하세요" : "안녕히가세요")} */}
          <p onClick={onClick}>
            Edit ddd<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;

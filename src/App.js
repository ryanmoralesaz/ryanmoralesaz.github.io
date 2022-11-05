import "./App.css";

function App() {
  return (
    <div style={styles.App}>
      <header style={styles.appHeader}>
        <div style={styles.textWrapper}>
          <text style={styles.centerText}>{`Hello.\nMy name is \nRyan Morales.\nI will be uploading my portfolio\nand resume very soon.`}</text>
        </div>
      </header>
    </div>
  );
}

export default App;

const styles = {
  App: {
    textAlign: "center",
  },
  appHeader: {
    backgroundColor: "#443355",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "calc(10px + 2vmin)",
    // color: "white",
  },
  textWrapper: {
    display: "flex",
    border: "1px solid white",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "20vw",
    marginRight: "20vw",
  },
  centerText: {
    color: "white",
    fontSize: "5vh",
    marginLeft: "5vw",
    marginRight: "5vw",
    whiteSpace: "pre-wrap",
  },
};

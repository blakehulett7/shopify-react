function App() {
  return React.createElement("h1", {}, "Jesus is Lord!");
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

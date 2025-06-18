function App() {
  return React.createElement("h1", {}, "JR Shopify App");
}

const container = document.querySelector(".root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

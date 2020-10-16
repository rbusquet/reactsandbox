import { createPortal } from "react-dom";

function App() {
  const root = document.getElementById("portal-root");
  return root
    ? createPortal(<div>Hello world! I'm in a portal!</div>, root)
    : null;
}

export default App;

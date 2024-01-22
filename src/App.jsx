import { useState } from "react";
import MenuBar from "./components/menuBar";
import Root from "./components/root";
import Auth from "./Auth";

const App = () => {
  const [log, setlog] = useState(true);
  return log ? (
      <div>
          <Root />
          <MenuBar onFalse={() => setlog(false)} />
      </div>
  ) : (
      <Auth onTrue={() => setlog(true)} />
  );
}

export default App;

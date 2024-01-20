import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";
// import LoginPage from "./pages/login/index.jsx";
import UserProvider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <UserProvider>
      <App />
      {/* <LoginPage/> */}
    </UserProvider>
    </BrowserRouter>
);

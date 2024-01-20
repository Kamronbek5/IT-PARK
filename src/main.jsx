import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/languageContext";
import UserProvider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <LanguageProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </LanguageProvider>
    </BrowserRouter>
);

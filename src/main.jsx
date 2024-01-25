import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/languageContext";
import UserProvider from "./context/userContext";
import AntdProvider from "./context/AntdProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <LanguageProvider>
            <UserProvider> 
                <AntdProvider>
                <App/>
                </AntdProvider>
            </UserProvider>
        </LanguageProvider>
    </BrowserRouter>
);

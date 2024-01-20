import { createContext, useState } from "react";
import { languageEnam } from "../utils/helpers";

const LanguageContextInitials = {
    language: languageEnam.UZ,
};

export const LanguageContext = createContext(LanguageContextInitials);

const LanguageProvider = ({ children }) => {
    const initialLanguage = localStorage.getItem("language") || "uz";
    const [language, setLanguage] = useState(initialLanguage);
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;

declare namespace Language {
    type LanguageType = 
    "ko"
    | "en";

    export interface LanguageStore {
        languageType: LanguageType;

        setLanguage: (data: { languageType: LanguageType }) => void;
    }
}
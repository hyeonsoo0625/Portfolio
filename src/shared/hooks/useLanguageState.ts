import { create } from "zustand"

export const useLanguageState = create<Language.LanguageStore>((set) => ({

    languageType: "ko",

    setLanguage: (data:any) => {
        set(() => ({
            languageType: data.languageType,
        }));
    },

}));
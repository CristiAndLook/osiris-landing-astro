import english from './en.json';
import spanish from './es.json';

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}


export const getI18n  = ({currentLocale}: {currentLocale: string}) => {
    const i18n = {
        [LANGUAGES.ENGLISH]: english,
        [LANGUAGES.SPANISH]: spanish
    }

    return i18n[currentLocale];
}
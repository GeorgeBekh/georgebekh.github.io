const supportedLangs = [
    "fr",
    "en",
    "ru"
]

export default () => {
    let lang = navigator.language || navigator.userLanguage;
    if (!supportedLangs.includes(lang)) {
        lang = "en";
    }

    window.location.replace(`/${lang}/`);
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入语言包
import translationEN from "./en.json";
import translationZH from "./zh.json";
import translationJP from "./jp.json";


// 配置 i18next
i18n
    .use(initReactI18next)
    .init({
        lng: navigator.language, // 默认语言
        fallbackLng: 'en', // 当未找到当前语言时回退到的语言
        resources: {
            en: {
                translation: translationEN, // 英文翻译文件
            },
            zh: {
                translation: translationZH, // 中文翻译文件
            },
            jp: {
                translation: translationJP, // 中文翻译文件
            },
        },
        interpolation: {
            escapeValue: false, // 不转义特殊字符
        },
    });

export default i18n;

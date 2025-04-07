import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      name: "Hi, it's <1>Andy</1>",  // Keep the HTML tag
      "title":  "I'm a <1>Web Developer</1>",
      "selfIntro": "I'm a developer passionate about creating web applications，I hope to share my experiences and knowledge here with you. Contact me if you have any questions or want to collaborate",
      "language_switcher": {
        "en": "English",
        "zh": "Chinese",
        "ja": "Japanese"
      }
    }
  },
  zh: { 
    translation: {
      name: "你好，我是 <1>Andy</1>",
      "title": "我是一個<1>網頁開發者</1>",
      "selfIntro": "我是一名熱衷於創建 Web 應用程式的開發人員，我希望在這裡與您分享我的經驗和知識。如果您有任何疑問或想要合作，請與我聯絡",
      "language_switcher": {
        "en": "英語",
        "zh": "中文",
        "ja": "日語"
      }
    }
  },
  
  ja: { 
    translation: {
      name: "こんにちは、<1>アンディ</1>です",
      title: "私はウェブ<1>開発者</1>です",
      selfIntro: "私は Web アプリケーションの作成に情熱を傾ける開発者です。ここで私の経験と知識を皆さんと共有したいと思っています。ご質問がある場合や協力したい場合はご連絡ください",
      language_switcher: {
        en: "英語",
        zh: "中国語",
        ja: "日本語"
      }
    },
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    lng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
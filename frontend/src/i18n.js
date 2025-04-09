import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "navbarTitle": "Wanderer's <1>Blog</1>",
      navbarAbout: "About",
      navbarProjects: "Projects",
      navbarTopics: "Topics",
      navbarArticles: "Articles",
      "gogo": "Let's go",
      "readMore": "Read more",
      name: "Hi, it's <1>Andy</1>",  // Keep the HTML tag
      "title":  "I'm a <1>Web Developer</1>",
      "selfIntro": "I'm a developer passionate about creating web applications，I hope to share my experiences and knowledge here with you. Contact me if you have any questions or want to collaborate",
      "language_switcher": {
        "en": "English",
        "zh": "Simplified Chinese",
        "tw": "Traditional Chinese",
        "ja": "Japanese"
      },
      "topics": "Topics",
      "topicsText": "These are topics I'll cover",
      "about": "About <1>Me</1>",
      "aboutText": "I build digital solutions by day and lose myself in the wild by weekend. My code is fueled by curiosity—whether it’s experimenting with cutting-edge tech, unraveling the poetry of algorithms, or documenting lessons learned. Off-screen, you’ll find me scaling mountain trails, scribbling thoughts about novels, or chasing the quiet magic of rivers and forests."
    }
  },
  tw: { 
    translation: {
      "navbarTitle": "遊俠兒的<1>部落格</1>",
      navbarAbout: "關於",
      navbarTopics: "主題",
      navbarProjects: "專案",
      navbarArticles: "文章",
      "gogo": "開始吧",
      "readMore": "閱讀更多",
      name: "你好，我是 <1>Andy</1>",
      "title": "我是一個<1>網頁開發者</1>",
      "selfIntro": "我是一名熱衷於創建 Web 應用程式的開發人員，我希望在這裡與您分享我的經驗和知識。如果您有任何疑問或想要合作，請與我聯絡",
      "language_switcher": {
        "en": "英語",
        "tw": "繁體中文",
        "zh": "簡體中文",
        "ja": "日語"
      },
      "about": "關於<1>我</1>",
      "topics": "主題",
      "topicsText": "這些是我將涵蓋的主題",
      "aboutText": "我白天編寫數位解決方案，週末則沉浸在大自然中。我的程式碼源於好奇心——無論是實驗尖端技術、解開演算法的詩意，還是記錄學到的教訓。在螢幕外，你會發現我在攀登山徑、寫下小說的想法，或追尋河流和森林的靜謐魔力。"
    }
  },

  zh: { 
    translation: {
      "navbarTitle": "游侠<1>博客网</1>",
      navbarAbout: "关于",
      navbarTopics: "主题",
      navbarProjects: "项目",
      navbarArticles: "文章",
      "gogo": "开始吧",
      "readMore": "阅读更多",
      name: "你好，我是 <1>Andy</1>",
      "title": "我是一名<1>网页开发者</1>",
      "selfIntro": "我是一名热衷于创建 Web 应用程序的开发人员，我希望在这里与您分享我的经验和知识。如果您有任何问题或想要合作，请与我联系",
      "language_switcher": {
        "en": "英语",
        "tw": "繁体中文",
        "zh": "简体中文",
        "ja": "日语"
      },
      "about": "关于<1>我</1>",
      "topics": "主题",
      "topicsText": "这些是我将涵盖的主题",
      "aboutText": "我白天编写数字解决方案，周末则沉浸在大自然中。我的代码源于好奇心——无论是实验尖端技术、解开算法的诗意，还是记录学到的教训。在屏幕外，你会发现我在攀登山径、写下小说的想法，或追寻河流和森林的宁静魔力。"
    }
  },
  
  ja: { 
    translation: {
      "navbarTitle": "レンジャーの<1>歌</1>",
      navbarAbout: "私について",
      navbarTopics: "トピック",
      navbarProjects: "プロジェクト",
      navbarArticles: "記事",
      "gogo": "行こう",
      "readMore": "もっと読む",
      name: "こんにちは、<1>アンディ</1>です",
      title: "私はウェブ<1>開発者</1>です",
      selfIntro: "私は Web アプリケーションの作成に情熱を傾ける開発者です。ここで私の経験と知識を皆さんと共有したいと思っています。ご質問がある場合や協力したい場合はご連絡ください",
      language_switcher: {
        en: "英語",
        tw: "繁体字中国語",
        zh: "簡体字中国語",
        ja: "日本語"
      },
      "about": "<1>私</1>について",
      "topics": "トピック",
      "topicsText": "これらは私がカバーするトピックです",
      "aboutText": "私は昼間はデジタル ソリューションを構築し、週末は自然の中で自分を見失います。私のコードは好奇心によって駆動されています。最先端のテクノロジーを試したり、アルゴリズムの詩を解読したり、学んだ教訓を文書化したりします。画面の外では、山道を登ったり、小説について考えを書いたり、川や森の静かな魔法を追い求めたりしています。"
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
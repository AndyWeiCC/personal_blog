// scripts/seedArticles.js
const mongoose = require('mongoose');
const Post = require('../models/Post.js');

const MONGO_URI = 'mongodb://localhost:27017/tripblog'; // or your Atlas URI

const articles = [
  {
    translations: [
      {
        language: "en",
        title: "Data access patterns for simple Stripe integrations",
        thumbnail: "https://d37ugbyn3rpeym.cloudfront.net/docs/og-image/payments.use-cases.get-started.ogimage.png",
        content: `
          Stripe is primarily designed for managing financial transactions online, but it also offers capabilities for managing core product data, including basic product descriptions, images, and pricing. Using Stripe alone for your data management may seem tempting as it simplifies your architecture and maintains a single source of truth, reducing potential discrepancies between the product and payment information. However, this approach may limit your options as your application grows and requires you to think about how to access the data securely via the Stripe API.

Stripe has various types of API keys:

The secret API key must be stored securely on the server side and is used for making authorized API calls to Stripe, as it provides full access to your account, available in test mode, sandboxes, and live environments.

The publishable API key is safe to include in client-side code and is used to securely collect payment information without accessing sensitive operations, and it is available in test mode, sandboxes, and live environments.

The restricted API key limits access to specific operations based on customized permissions, providing an additional layer of security while interacting with Stripe, and it can also be utilized in test mode, sandboxes, and live environments.

If your integration consists of a client-side application running in the browser, you might attempt to use the publishable API key to retrieve product data that is stored within Stripe. However, this returns an 'invalid_request' error, as publishable API keys can only be used to collect payment information, such as creating tokens or processing payments, not for accessing other API endpoints like retrieving product details. Use publishable keys for public operations while keeping sensitive operations securely handled on the server side.
        `,
        description: "This blog post explores various options focusing on product data, from using Stripe’s built-in data management capabilities to maintaining a separate database, and provides best practices for accessing that data and optimizing your integration.",
        createdAt: new Date()
      },
      {
        language: "zh",
        title: "简易Stripe集成中的数据访问模式",
        thumbnail: "https://d37ugbyn3rpeym.cloudfront.net/docs/og-image/payments.use-cases.get-started.ogimage.png",
        content: `
        Stripe最初是为管理在线金融交易而设计的，但它也提供了管理核心产品数据的能力，包括基本产品描述、图片和定价。仅使用Stripe进行数据管理看似诱人，因为它简化了架构并保持了单一数据源，减少了产品信息和支付信息之间可能出现的差异。然而，随着应用程序的增长，这种方法可能会限制您的选择，并要求您考虑如何通过Stripe API安全地访问数据。
        
        Stripe有多种类型的API密钥：
        
        密钥API密钥必须安全地存储在服务器端，用于向Stripe发起授权的API调用，因为它提供了对您账户的完全访问权限，可用于测试模式、沙盒环境和生产环境。
        
        可发布API密钥可以安全地包含在客户端代码中，用于安全地收集支付信息，而无需访问敏感操作，可用于测试模式、沙盒环境和生产环境。
        
        受限API密钥根据自定义权限限制对特定操作的访问, 提供了与Stripe交互时的额外安全层，同样可用于测试模式、沙盒环境和生产环境。
        
        如果您的集成包含一个在浏览器中运行的客户端应用程序，您可能会尝试使用可发布API密钥来检索存储在Stripe中的产品数据。然而，这将返回一个“invalid_request”错误，因为可发布API密钥仅用于收集支付信息，例如创建令牌或处理支付，而不能用于访问其他API端点（如检索产品详情）。请将可发布密钥用于公开操作，同时将敏感操作安全地交由服务器端处理。
        `,
        description: "这篇博文探讨了从使用Stripe内置数据管理功能到维护独立数据库等多种方案，重点聚焦产品数据领域，并提供了访问该数据及优化集成的最佳实践。",
        createdAt: new Date()
      },
      {
        language: "ja",
        title: "シンプルなStripe連携におけるデータアクセスパターン",
        thumbnail: "https://d37ugbyn3rpeym.cloudfront.net/docs/og-image/payments.use-cases.get-started.ogimage.png",
        content: `
        Stripeは主にオンライン金融取引を管理するために設計されていますが、基本的な商品説明、画像、価格設定など、コアとなる商品データを管理する機能も提供しています。データ管理をStripeのみで行うことは、アーキテクチャをシンプルに保ち、単一の情報源を維持することで商品情報と決済情報の不一致を防げるため、魅力的に思えるかもしれません。しかし、この方法ではアプリケーションが成長するにつれて選択肢が制限される可能性があり、Stripe APIを介してデータに安全にアクセスする方法を考える必要があります。
        
        Stripeには複数の種類のAPIキーがあります：
        
        シークレットAPIキーはサーバー側で安全に保管する必要があり、Stripeへの認証済みAPI呼び出しに使用されます。このキーはアカウントへのフルアクセスを提供するため、テストモード、サンドボックス環境、本番環境で利用可能です。
        
        公開可能APIキーはクライアントサイドのコードに安全に含めることができ、センシティブな操作にアクセスせずに支払い情報を安全に収集するために使用されます。テストモード、サンドボックス環境、本番環境で利用可能です。
        
        制限付きAPIキーはカスタマイズされた権限に基づいて特定の操作へのアクセスを制限し、Stripeとのやり取りに追加のセキュリティ層を提供します。こちらもテストモード、サンドボックス環境、本番環境で利用可能です。
        
        ブラウザで動作するクライアントサイドアプリケーションでStripeに保存された商品データを取得しようと、公開可能APIキーを使用する場合があります。しかし、これは「invalid_request」エラーを返します。なぜなら公開可能APIキーはトークンの作成や支払い処理などの支払い情報収集にのみ使用可能で、商品詳細の取得のような他のAPIエンドポイントへのアクセスには使用できないからです。公開可能キーは公開操作に使用し、センシティブな操作はサーバー側で安全に処理するようにしてください。
        `,
        description: "このブログ記事では、Stripeの組み込みデータ管理機能の使用から別途データベースを維持する方法まで、商品データに焦点を当てたさまざまなオプションを探り、そのデータにアクセスするためのベストプラクティスと連携の最適化について説明します。",
        createdAt: new Date()
      }
    ]
  }
];

const insertData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    await Post.insertMany(articles);
    console.log('Data inserted successfully!');

    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting data:', err);
    process.exit(1);
  }
};

insertData();

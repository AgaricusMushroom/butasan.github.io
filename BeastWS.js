var WSList;

function defaultArray(type){
  WSList = new Array();
  WSList.push({
    shuzoku:"アクエフ",
    skill:"ファウルウォーター",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"ドラウン、ヘヴィ"
  });
  WSList.push({
    shuzoku:"アクエフ",
    skill:"ペステレントプルーム",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"悪疫、暗闇、魔法防御力ダウン"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"トータスストンプ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    flg:true,
    tuika:"防御力ダウン"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"甲羅強化",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"防御力アップ"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"アクアブレス",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:""
  });
  WSList.push({
    shuzoku:"アプカル",
    skill:"ビークランジ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"アプカル",
    skill:"ウィングスラップ",
    charge:2,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"重力",
    renkei2:"溶解",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"マンティブルバイト",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"サンドピット",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"バインド(1m30s)"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"サンドブラスト",
    charge:2,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇(命中-40 2m15s)"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"ベノムスプレー",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-31HP/3sec 2m15s)"
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"フットキック",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"爪旋風脚",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"土煙",
    charge:1,
    shubetu:"魔法",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇"
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"ワイルドカロット",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"HP回復"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ニンブルスナップ",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"サイクロテール",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ガイストウォール",
    charge:1,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ナビングノイズ",
    charge:1,
    shubetu:"弱体",
    zokusei:"雷",
    renkei1:"",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"トクシックスピット",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-23HP/3sec) 4m30s"
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"頭突き",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"シープチャージ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"レイジ",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"バーサク(攻+50% 防-50%) 4m30s"
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"シープソング",
    charge:2,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"睡眠 30s - 1m"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"フロッグキック",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"収縮",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"スポア",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"マヨイタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"シビレタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"オドリタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"病気"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"サイレスガス",
    charge:3,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"静寂"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"ダークスポア",
    charge:3,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"ビッグシザー",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:"※クラブのみ"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"バブルシャワー",
    charge:1,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"STRダウン　※クラブのみ"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"メタルボディ",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"ストンスキン"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"シザーガード",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"防御力アップ"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"バブルカーテン",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"シェル"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"メガシザース",
    charge:2,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"重力",
    renkei2:"切断",
    tuika:"※ポータークラブのみ"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"ベノムシャワー",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒、防御力ダウン　※ポータークラブのみ"
  });
  WSList.push({
    shuzoku:"鍬形",
    skill:"ディスエンバウエル",
    charge:1,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"命中率ダウン(命中-50)"
  });
  WSList.push({
    shuzoku:"鍬形",
    skill:"E.サルヴォ",
    charge:2,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"核熱",
    renkei2:"衝撃",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"レイザーファング",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"クローサイクロン",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"咆哮",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺 30s - 2m"
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"クロススラッシュ",
    charge:2,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"湾曲",
    renkei2:"炸裂",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"プレダトリグレア",
    charge:2,
    shubetu:"弱体",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"パワーアタック",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"ライノアタック",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"ライノガード",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"回避率アップ(回避+25%) 3m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"スポイル",
    charge:1,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"STRダウン(STR-42) 3m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"高周波フィールド",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"回避率ダウン(回避-40) 3m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"ライノレッカー",
    charge:2,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"核熱",
    renkei2:"貫通",
    tuika:"※黄甲虫のみ"
  });
  WSList.push({
    shuzoku:"コリブリ",
    skill:"ペッキングフラリー",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"リコイルダイブ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"威嚇",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ(スロウ+25%) 4m30s"
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"ウォーターウォール",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"防御力アップ(防+100%) 2m - 5m"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ティックルテンドリル",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"スティンクボム",
    charge:2,
    shubetu:"魔法",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇、麻痺"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ネクターデルージュ",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ネペンシックプランジ",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"ドラウン、ヘヴィ"
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"シックルスラッシュ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"アシッドスプレー",
    charge:1,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"スパイダーウェブ",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ"
  });
  WSList.push({
    shuzoku:"スライム",
    skill:"フルイドスルー",
    charge:1,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"スライム",
    skill:"フルイドスプレッド",
    charge:2,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"分解",
    renkei2:"貫通",
    tuika:""
  });
  WSList.push({
    shuzoku:"スライム",
    skill:"消化",
    charge:1,
    shubetu:"魔法",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"HP吸収"
  });
  WSList.push({
    shuzoku:"スラッグ",
    skill:"ピュルラントウーズ",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"最大HPダウン(最大HP-10%) 1m - 1m30s、バイオ(-15HP/3sec) 1m - 1m30s"
  });
  WSList.push({
    shuzoku:"スラッグ",
    skill:"コローシブウーズ",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"攻撃力ダウン(攻-33%) 1m - 1m30s、防御力ダウン(防-33%) 1m - 1m30s"
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"ダブルクロー",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"溶解",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"グラップル",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"スピニングトップ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"フィラメンテッドホールド",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ(スロウ+50%) 2m"
  });
  WSList.push({
    shuzoku:"チャプリ",
    skill:"センシラブレード",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"チャプリ",
    skill:"テグミナバフェット",
    charge:2,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"湾曲",
    renkei2:"炸裂",
    tuika:"チョーク"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"モルトプルメイジ",
    charge:1,
    shubetu:"魔法",
    zokusei:"風",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"スワープフレンジー",
    charge:2,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"核熱",
    renkei2:"振動",
    tuika:"防御力ダウン、魔法防御力ダウン"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"ペンタペック",
    charge:3,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"光",
    renkei2:"湾曲",
    tuika:"アムネジア"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"テイルブロー",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ブロックヘッド",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ブレインクラッシュ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    tuika:"静寂 5s - 30s"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ファイアボール",
    charge:1,
    shubetu:"魔法",
    zokusei:"火",
    renkei1:"",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"体液分泌",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"回避率アップ(回避+25%) 5m"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"超低周波",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"回避率ダウン(回避-40) 3m"
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"バックヒール",
    charge:1,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"チョークブレス",
    charge:1,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺、静寂"
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"ファンタッド",
    charge:2,
    shubetu:"強化",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"攻撃力アップ"
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"フーフボレー",
    charge:3,
    shubetu:"物理",
    zokusei:"不明",
    renkei1:"光",
    renkei2:"分解",
    tuika:""
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"ニヒリティソング",
    charge:1,
    shubetu:"弱体",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"ヒッポグリフ",
    skill:"ジェタチュラ",
    charge:3,
    shubetu:"弱体",
    zokusei:"不明",
    renkei1:"",
    renkei2:"",
    tuika:"テラー"
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"サマーソルト",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"収縮",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"カースドスフィア",
    charge:1,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"毒液",
    charge:1,
    shubetu:"水",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-47HP/3sec) 4m30s"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"サペリフィック",
    charge:1,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"睡眠"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"パルジィパレン",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"グロオーサケス",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"スロウ(スロウ+35%)"
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"ヘッドバット",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"種まき",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"貫通",
    renkei2:"",
    tuika:"VITダウン"
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"リーフダガー",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"切断",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"モスキート",
    skill:"インフェクティドサッカー",
    charge:1,
    shubetu:"魔法",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"悪疫"
  });
  WSList.push({
    shuzoku:"モスキート",
    skill:"グルームスプレー",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"ラズ",
    skill:"スイープガウジ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"",
    renkei2:"",
    tuika:"防御力ダウン"
  });
  WSList.push({
    shuzoku:"ラズ",
    skill:"ゼラススノート",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"ヘイスト、魔法防御力アップ、カウンター率アップ、ガード率アップ"
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"サイズテール",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"リッパーファング",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"硬化",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"噛みつきラッシュ",
    charge:3,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"闇",
    renkei2:"重力",
    tuika:"スロウ(スロウ+25) 2m - 5m"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"カオティックアイ",
    charge:1,
    shubetu:"弱体",
    zokusei:"風",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"静寂"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"ブラスター",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"チャージドホイスカー",
    charge:2,
    shubetu:"魔法",
    zokusei:"雷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:""
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"サドンランジ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"スパイラルスピン",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:"命中率ダウン(命中-20) 30s - 1m"
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"ノイサムパウダー",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"攻撃力ダウン(攻-15%) 30s - 1m"
  });
  if(!type)createTable();
}

function createTable(hyoji){
  var open = hyoji || 0;
  var table = document.getElementById("WStable");
  if(open == 0){
    for(var i = table.rows.length -1; i > 0; i--){
      table.deleteRow(-1);
    }
    var list = createArray();
    list.forEach(function(ws){
      var tr = table.insertRow(-1);
      var td = tr.insertCell(-1);
      td.innerHTML = ws.shuzoku;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.skill;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.charge;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.shubetu;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.zokusei;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.renkei1;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.renkei2;
      var td = tr.insertCell(-1);
      td.innerHTML = ws.tuika;
    });
  } else {
    for(var i = table.rows.length -1; i >= 0; i--){
      table.deleteRow(-1);
    }
    var renkei = document.search_form.renkei.options[document.search_form.renkei.selectedIndex].value;
    var list = createArray2();
    var onaji = document.forms.search_form.onaji.checked;
    var pets = new Array();
    var renkeiList = new Array();
    if(onaji){
      var hozon = "";
      for(var i = 0; i < list.length; i++){
        if(hozon == ""){
          hozon = list[i].shuzoku;
          pets.push(list[i]);
        } else if(list[i].shuzoku == hozon){
          pets.push(list[i]);
        } else {
          Array.prototype.push.apply(renkeiList, createRenkei(pets, renkei));
          pets = new Array();
          hozon = list[i].shuzoku;
          pets.push(list[i]);
        }
      }
      Array.prototype.push.apply(renkeiList, createRenkei(pets, renkei));
    } else {
      renkeiList = createRenkei(list, renkei);
    }
    renkeiList.forEach(function(renkei){
      var tr = table.insertRow(-1);
      var td = tr.insertCell(-1);
      td.innerHTML = renkei.action1;
      var td = tr.insertCell(-1);
      td.innerHTML = "(" + renkei.pet1 + ")";
      var td = tr.insertCell(-1);
      td.innerHTML = "→";
      var td = tr.insertCell(-1);
      td.innerHTML = renkei.action2;
      var td = tr.insertCell(-1);
      td.innerHTML = "(" + renkei.pet2 + ")";
    });
  }
}


function submitStop(e){
    if (!e) var e = window.event;
    if(e.keyCode == 13){
        createTable();
        return false;
    }
}

function createArray(){
  var newList = WSList;
  var shuzoku = document.search_form.shuzoku;
  var skill = document.search_form.skill;
  var shubetu = document.search_form.shubetu;
  var zokusei = document.search_form.zokusei;
  var renkei = document.search_form.renkei;
  var il = document.forms.search_form.IL;
  var search = new Array();
  search.push(shuzoku.options[shuzoku.selectedIndex].value);
  search.push(skill.value);
  search.push(shubetu.options[shubetu.selectedIndex].value);
  search.push(zokusei.options[zokusei.selectedIndex].value);
  search.push(renkei.options[renkei.selectedIndex].value);
  search.push(il.checked);
  for(var i = 0; i < 6; i++){
    newList = arrayFilter(newList, i, search[i]);
  }
  return newList;
}

function createArray2(){
  var newList = WSList;
  var il = document.forms.search_form.IL.checked;
  newList = arrayFilter(newList, 5, il);
  return newList;
}

function arrayFilter(list, type, keyword){
  var workList = new Array();
  if(keyword){
    workList = list.filter(function(object){
      var key = "";
      var key2 = "";
      switch(type){
        case 0:
          key = object.shuzoku;
          break;
        case 1:
          key = object.skill;
          break;
        case 2:
          key = object.shubetu;
          break;
        case 3:
          key = object.zokusei;
          break;
        case 4:
          key = object.renkei1;
          key2 = object.renkei2;
          break;
      }
      if(type == 5){
        if(!object.flg || (keyword =- false))return true;
      } else if(key.indexOf(keyword) >= 0 || key2.indexOf(keyword) >= 0){
        return true;
      }
    });
  } else {
    return list;
  }
  return workList;
}

function createRenkei(list, goal){
  var route = goalRenkei(goal);
  var renkeiList = new Array();
  list.forEach(function(object){
    var work = {
      pet1:null,
      action1:null,
      renkei1:null,
      pet2:null,
      action2:null,
      renkei2:null,
      goal:goal
    };
    for(var i = 0; i < route.length; i++){
      if(object.renkei1 == route[i].action2){
        work.pet2 = object.shuzoku;
        work.action2 = object.skill;
        work.renkei2 = object.renkei1;
        list.forEach(function(object2){
          var flg = false;
          if(object2.renkei1 == route[i].action1){
            work.pet1 = object2.shuzoku;
            work.action1 = object2.skill;
            work.renkei1 = object2.renkei1;
            renkeiList.push(JSON.parse(JSON.stringify(work)));
            flg = true;
          }
          if(flg == false && object2.renkei2 == route[i].action1){
            work.pet1 = object2.shuzoku;
            work.action1 = object2.skill;
            work.renkei1 = object2.renkei2;
            renkeiList.push(JSON.parse(JSON.stringify(work)));
            flg = true;
          }
        })
      }
      if(object.renkei2 == route[i].action2){
        work.pet2 = object.shuzoku;
        work.action2 = object.skill;
        work.renkei2 = object.renkei2;
        list.forEach(function(object2){
          var flg = false;
          if(object2.renkei1 == route[i].action1){
            work.pet1 = object2.shuzoku;
            work.action1 = object2.skill;
            work.renkei1 = object2.renkei1;
            renkeiList.push(JSON.parse(JSON.stringify(work)));
            flg = true;
          }
          if(flg == false && object2.renkei2 == route[i].action1){
            work.pet1 = object2.shuzoku;
            work.action1 = object2.skill;
            work.renkei1 = object2.renkei2;
            renkeiList.push(JSON.parse(JSON.stringify(work)));
            flg = true;
          }
        })
      }
    }
  })
  return renkeiList;
}

function nextRenkei(renkei){
  var next = new Array();
  switch(renkei){
    case "溶解":
      next[0] = {
        action:"切断",
        name:"切断"
      };
      next[1] = {
        action:"衝撃",
        name:"核熱"
      };
      break;
    case "硬化":
      next[0] = {
        action:"衝撃",
        name:"衝撃"
      };
      next[1] = {
        action:"振動",
        name:"分解"
      };
      break;
    case "炸裂":
      next[0] = {
        action:"切断",
        name:"切断"
      };
      next[1] = {
        action:"収縮",
        name:"重力"
      };
      break;
    case "切断":
      next[0] = {
        action:"溶解",
        name:"溶解"
      };
      next[1] = {
        action:"炸裂",
        name:"炸裂"
      };
      next[2] = {
        action:"振動",
        name:"振動"
      };
      break;
    case "衝撃":
      next[0] = {
        action:"溶解",
        name:"溶解"
      };
      next[1] = {
        action:"炸裂",
        name:"炸裂"
      };
      break;
    case "貫通":
      next[0] = {
        action:"切断",
        name:"湾曲"
      };
      next[1] = {
        action:"収縮",
        name:"収縮"
      };
      next[2] = {
        action:"振動",
        name:"振動"
      };
      break;
    case "振動":
      next[0] = {
        action:"衝撃",
        name:"衝撃"
      };
      next[1] = {
        action:"硬化",
        name:"硬化"
      };
      break;
    case "収縮":
      next[0] = {
        action:"貫通",
        name:"貫通"
      };
      next[1] = {
        action:"炸裂",
        name:"炸裂"
      };
      break;
    case "核熱":
      next[0] = {
        action:"分解",
        name:"光"
      };
      next[1] = {
        action:"重力",
        name:"重力"
      };
      break;
    case "重力":
      next[0] = {
        action:"湾曲",
        name:"闇"
      };
      next[1] = {
        action:"分解",
        name:"分解"
      };
      break;
    case "分解":
      next[0] = {
        action:"核熱",
        name:"光"
      };
      next[1] = {
        action:"湾曲",
        name:"湾曲"
      };
      break;
    case "湾曲":
      next[0] = {
        action:"重力",
        name:"闇"
      };
      next[1] = {
        action:"核熱",
        name:"核熱"
      };
      break;
    case "光":
      next[0] = {
        action:"光",
        name:"光"
      };
      break;
    case "闇":
      next[0] = {
        action:"闇",
        name:"闇"
      };
      break;
  }
  return next;
}

function goalRenkei(renkei){
  var next = new Array();
  switch(renkei){
    case "溶解":
      next[0] = {
        action1:"切断",
        action2:"溶解"
      };
      next[1] = {
        action1:"衝撃",
        action2:"溶解"
      };
      break;
    case "硬化":
      next[0] = {
        action1:"振動",
        action2:"硬化"
      };
      break;
    case "炸裂":
      next[0] = {
        action1:"切断",
        action2:"炸裂"
      };
      next[1] = {
        action1:"衝撃",
        action2:"炸裂"
      };
      next[2] = {
        action1:"収縮",
        action2:"炸裂"
      };
      break;
    case "切断":
      next[0] = {
        action1:"炸裂",
        action2:"切断"
      };
      next[1] = {
        action1:"溶解",
        action2:"切断"
      };
      break;
    case "衝撃":
      next[0] = {
        action1:"硬化",
        action2:"衝撃"
      };
      next[1] = {
        action1:"振動",
        action2:"衝撃"
      };
      break;
    case "振動":
      next[0] = {
        action1:"貫通",
        action2:"振動"
      };
      next[1] = {
        action1:"切断",
        action2:"振動"
      };
      break;
    case "貫通":
      next[0] = {
        action1:"収縮",
        action2:"貫通"
      };
      break;
    case "収縮":
      next[0] = {
        action1:"硬化",
        action2:"収縮"
      };
      next[1] = {
        action1:"貫通",
        action2:"収縮"
      };
      break;
    case "核熱":
      next[0] = {
        action1:"溶解",
        action2:"衝撃"
      };
      next[1] = {
        action1:"湾曲",
        action2:"核熱"
      };
      break;
    case "重力":
      next[0] = {
        action1:"炸裂",
        action2:"収縮"
      };
      next[1] = {
        action1:"核熱",
        action2:"重力"
      };
      break;
    case "分解":
      next[0] = {
        action1:"硬化",
        action2:"振動"
      };
      next[1] = {
        action1:"重力",
        action2:"分解"
      };
      break;
    case "湾曲":
      next[0] = {
        action1:"貫通",
        action2:"切断"
      };
      next[1] = {
        action1:"分解",
        action2:"湾曲"
      };
      break;
    case "光":
      next[0] = {
        action1:"核熱",
        action2:"分解"
      };
      next[1] = {
        action1:"分解",
        action2:"核熱"
      };
      next[2] = {
        action1:"光",
        action2:"光"
      };
      break;
    case "闇":
      next[0] = {
        action1:"湾曲",
        action2:"重力"
      };
      next[1] = {
        action1:"重力",
        action2:"湾曲"
      };
      next[2] = {
        action1:"闇",
        action2:"闇"
      };
      break;
  }
  return next;
}

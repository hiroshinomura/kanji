const kanjiQuiz = [
    ["彼の『いさん』を巡って、家族間で激しい争いが続いた。分配は難しい問題だ。", "遺産"],
    ["彼女の『こううん』ぶりは誰もが羨むところだ。運が良いだけでなく、努力もしている。", "幸運"],
    ["彼は毎日『とっきょ』の審査に忙しい。取得するためには多くの手続きが必要です。", "特許"],
    ["彼の『しこう』は常に前向きだ。柔軟さが彼の強みだ。", "思考"],
    ["彼の『しんとう』は非常に深い。研究は多くの人に影響を与えている。", "浸透"],
    ["彼の『どうこう』が気になる。最近、行動には変化が見られる。", "動向"],
    ["『きかく』の段階から慎重に計画を進める。成功するかどうかは準備次第だ。", "企画"],
    ["そのプロジェクトは多くの『かんしょう』を受けている。価値がある作品だ。", "観賞"],
    ["彼の『せんたく』はいつも正しい。迷いがないのが彼の特徴だ。", "選択"],
    ["彼女の『さくご』は仕方がない。間違いを認めて前に進むことが大事だ。", "錯誤"],
    ["彼は『いきな』服装でパーティーに現れた。センスは誰もが認めるところだ。", "粋"],
    ["彼の『しんきょう』は常に穏やかだ。落ち着きはみんなに安心感を与える。", "心境"],
    ["彼女の『どうき』は非常に純粋だ。正しいからこそ、信頼される。", "動機"],
    ["彼の『どうせい』が重要だ。把握することで、計画がスムーズに進む。", "動静"],
    ["彼の『かんせつ』的な説明はわかりやすい。伝える技術がある。", "間接"],
    ["彼の『はんえい』を願って乾杯した。祈って、みんなで祝いをした。", "繁栄"],
    ["彼は『きょしょく』に励んでいる。取り除いて、本来の姿を見せるべきだ。", "虚飾"],
    ["彼の『こうてつ』に驚いた。採用試験に合格するとは思わなかった。", "公鉄"],
    ["彼の『しっぴつ』は素晴らしい。活動に専念する姿勢には頭が下がる。", "執筆"],
    ["彼は『ていこく』に帰宅する。習慣を持っているのは素晴らしい。", "定刻"],
    ["彼の『せんたん』技術は世界に誇れる。駆使して新しい製品を開発する。", "先端"],
    ["彼の『しさく』の深さに感銘を受けた。魅力だ。", "思索"],
    ["彼の『きかん』は非常に強い。丈夫で、風邪を引きにくい。", "気管"],
    ["彼の『せんたん』を祝う会が開かれた。称える会だ。", "洗練"],
    ["彼の『しんこく』な表情が印象的だった。問題に直面していることがわかる。", "深刻"],
    ["彼の『せんすい』の腕前はプロ級だ。得意で、どんな深さでも対応できる。", "潜水"],
    ["彼の『せんせん』とした態度が頼もしい。布告をして、戦いに挑む姿勢が見られる。", "宣戦"],
    ["彼の『せんれい』された技術は一流だ。技術者としての自覚がある。", "洗礼"],
    ["彼の『せんこう』は非常に高い。分野での知識は誰にも負けない。", "専攻"],
    ["彼の『せんぼう』の的となった。眼差しを向けられるのも無理はない。", "羨望"],
    ["彼の『せんたく』は慎重だ。多い中で、最良のものを選ぶ。", "選択"],
    ["彼の『せんこう』が重要だ。見極めることで、勝利への道が開ける。", "戦況"],
    ["彼の『せんれい』が生きている。駆使して、問題を解決する。", "洗練"],
    ["彼の『せんしん』性が評価された。考え方が新しい風を吹き込む。", "先進"],
    ["彼の『せんさい』さが際立っている。感覚を持つことが彼の強みだ。", "繊細"],
    ["彼の『せんこう』を誇る。分野での知識は誰にも負けない。", "専攻"],
    ["彼の『せんれい』を受けた。技術者としての自覚がある。", "洗礼"]
];

const praisePhrases = [
    "素晴らしい！あなたはまるで鷲のように鋭い洞察力を持っています！",
    "お見事！あなたの知識はライオンのように強力です！",
    "最高です！あなたはイルカのように賢いです！",
    "完璧です！あなたは猫のように俊敏な知識を持っています！",
    "素晴らしい回答です！あなたはフクロウのように賢いです！",
    "お見事です！あなたは虎のように勇敢です！"
];



document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');

    let currentKanji = '';

    function newQuestion() {
        const [sentence, kanji] = kanjiQuiz[Math.floor(Math.random() * kanjiQuiz.length)];
        currentKanji = kanji;
        questionElement.textContent = `次の文のカギカッコのひらがなを漢字にしてください: ${sentence}`;
        answerElement.value = '';
        resultElement.textContent = '';
        speak(sentence);
    }

    function checkAnswer() {
        const userAnswer = answerElement.value;
        if (userAnswer === currentKanji) {
            const praise = praisePhrases[Math.floor(Math.random() * praisePhrases.length)];
            resultElement.textContent = `${praise} 正しい漢字: ${currentKanji}`;
            speak(praise);
        } else {
            resultElement.textContent = `不正解。正しい漢字は ${currentKanji} です。`;
        }
        setTimeout(newQuestion, 3000);  // 3秒後に新しい問題を出題
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 1.2;  // 音声出力のスピードを2倍に設定
            speechSynthesis.speak(utterance);
        } else {
            console.error("This browser does not support speech synthesis.");
        }
    }

    answerElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    submitButton.addEventListener('click', checkAnswer);
    newQuestion();
});

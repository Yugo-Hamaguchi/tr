const qize = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: ['スーパーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'],
        correct: 'ニンテンドーDS',

    },
    {
        question: '糸井重里が企画に関わった、ニンテンドーの看板ゲームといえば？',
        answers: ['MOTHER2',
            'スーパーマリオブラザーズ2',
            'SPドンキーコング',
            '星のカービィ'],
        correct: 'MOTHER2',

    },
    {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: ['フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'],
        correct: 'セシル',

    }
];
const qizeLength = qize.length;
let qizeIndex = 0;
let score=0;

const $button = document.getElementsByTagName('button');

let buttonLength = $button.length;

//クイズの問題　選択肢の定義
const setUpQize = () => {
    document.getElementById('js-question').textContent = qize[qizeIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = qize[qizeIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQize();

const clickHandler = (e) => {
    if ( qize[qizeIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;

    } else {
        window.alert('不正解');
    }

    qizeIndex++;

    if (qizeIndex < qizeLength) {
        //問題があればこちらを実行
        setUpQize();

    } else {
        //問題がなければこちらを実行
        window.alert('終了。　あなたの正解数は'+score+'/'+qizeLength+'です！');

    }

};

//クリックしたら反応する
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;

};


// event.js

// ボタンの要素を取得
const button = document.getElementById("btn");

// ボタンがクリックされたときの処理を設定
button.addEventListener("click", function() {
    // 2秒後にテキストを変更する非同期処理を実行
    setTimeout(function() {
        // h2要素のテキストを変更
        const textElement = document.getElementById("text");
        textElement.textContent = "2秒後の表示";
    }, 2000); // 2000ミリ秒（2秒）後に処理が実行される
});

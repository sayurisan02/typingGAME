let timerInterval;
let timeLeft = 60;

//タイマーの表示
function updateTimer() {
    if(timerLeft > 0) {
        timerLeft--;
        document.getElementById("timer").innerText = '残り時間：${timeLeft}秒';
    } else {
        clearInterval(timerInterval);//タイマー停止
        gameOver();
    }
}

// タイマーをスタートさせる関数
function startTimer() {
    timeLeft = 60;  // 初期時間をリセット
    timerInterval = setInterval(updateTimer, 1000);  // 1秒ごとにupdateTimer関数を実行
  }
  
  // タイマーを停止させる関数
  function stopTimer() {
    clearInterval(timerInterval);  // タイマー停止
    document.getElementById("timer").innerText = `タイムアップ!`;
  }
const divMain = document.getElementById('div-main');
let seconds_left = 3;

function hintText() {
  return `Timeout message detected. Automatic refresh in ${
      seconds_left} seconds...`;
}

if (divMain &&
    divMain.innerText.includes('使用時間超過, 請關掉瀏覽器後重新登入系統 !')) {
  const divHint = document.createElement('div');
  divHint.id = 'hint';
  divHint.innerText = hintText();
  divMain.insertAdjacentElement('beforeend', divHint);

  const timer = setInterval(() => {
    if (--seconds_left == 0) {
      window.location.href = `${window.location.origin}/rtcourse/rtcourse.php`;
      clearInterval(timer);
    }
    divHint.innerText = hintText();
  }, 1000);
}

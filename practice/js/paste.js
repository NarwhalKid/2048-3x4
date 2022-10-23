document.getElementsByClassName('paste-button')[0].onclick = function(){
document.getElementsByClassName('paste-button')[0].innerText = "Hit CTRL + V";

document.addEventListener('paste', function (event) {
  var clipText = event.clipboardData.getData('Text');
  document.getElementById('copy-marker').innerHTML = clipText;
  document.getElementsByClassName('paste-button')[0].innerText = "Use Copied Code";
  document.getElementsByClassName('restart-button')[0].click();
}, {once: true});

}

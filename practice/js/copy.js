document.getElementsByClassName('copy-button')[0].onclick = function(){

function Clipboard_CopyTo(value) {
            var tempInput = document.createElement("input");
            tempInput.value = value;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            }


var code = '';
function runcode(){
tilex = 1
tiley = 1
runcode5();
runcode2();
runcode2();
runcode2();
runcode3();
runcode3();
}
function runcode2(){
runcode3();
runcode3();
runcode4();
}
function runcode3(){
tiley += 1;
runcode5();
}
function runcode4(){
tiley = 1;
tilex += 1;
runcode5();
}
function runcode5(){
if (document.getElementsByClassName('tile-position-' + tilex + '-' + tiley).length == 0) {
var tilenum = '0';
} else {
var tilenum = document.getElementsByClassName('tile-position-' + tilex + '-' + tiley)[0].firstChild.innerText;
tilenum = parseInt(tilenum);
tilenum = (Math.log(tilenum) / Math.log(2)).toString();
if (tilenum == 10) {
   tilenum = "a"
} else if (tilenum == 11) {
    tilenum = "b"
} else if (tilenum == 12) {
    tilenum = "c"
} else if (tilenum == 13) {
    tilenum = "d"
} else if (tilenum > 13) {
    tilenum = 2
}
}
code += tilenum;
}
runcode();
Clipboard_CopyTo(code);
}
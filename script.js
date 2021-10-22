const ele=document.createElement('div')
ele.setAttribute('class','display')
document.body.append(ele)
console.log(ele)
ele.innerHTML=`
 <h1>calculator</h1>
<label for="n1">Number1</label>
<input type="text" id="n1"></input><br>
<br>
<label for="n2">Number2</label>
<input type="text" id="n2"></input><br>
<br>
<label for="result">Result</label>
<input type="text" id="result"></input>
<br>
<br>
<button onclick="calc1()">+</button>
<button onclick="calc2()">-</button>
<button onclick="calc3()">*</button>
<button onclick="calc4()">/</button>
`
function calc1() {
var n1=parseFloat(document.getElementById('n1').value)
var n2=parseFloat(document.getElementById('n2').value)
if(n1===!Number){
    error.textContent = "I expect an e-mail, darling!";
}else{
document.getElementById('result').value=n1+n2
}
}
function calc2() {
var n1=parseFloat(document.getElementById('n1').value)
var n2=parseFloat(document.getElementById('n2').value)
document.getElementById('result').value=n1-n2
}
function calc3() {
var n1=parseFloat(document.getElementById('n1').value)
var n2=parseFloat(document.getElementById('n2').value)
document.getElementById('result').value=n1*n2
}
function calc4() {
var n1=parseFloat(document.getElementById('n1').value)
var n2=parseFloat(document.getElementById('n2').value)
document.getElementById('result').value=n1/n2
}

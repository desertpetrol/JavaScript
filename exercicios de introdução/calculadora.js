let _num1 = 8
let _num2 = 2
let _result

document.getElementById('num1El').textContent = _num1
document.getElementById('num2El').textContent = _num2

function add() {
    _result = _num1 + _num2
    document.getElementById('result').textContent = _result
}
function sub() {
    _result = _num1 - _num2
    document.getElementById('result').textContent = _result
}
function mult() {
    _result = _num1 * _num2
    document.getElementById('result').textContent = _result 
}
function div() {
    _result = _num1 / _num2
    document.getElementById('result').textContent = _result
}
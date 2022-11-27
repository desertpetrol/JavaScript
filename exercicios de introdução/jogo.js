//declarando variaveis globais
let lap1 = 34
let lap2 = 33
let lap3 = 36
let lapsCompleted = 0
function countdown(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}
function lapsComp() {
    lapsCompleted = lapsCompleted + 1
    console.log(`Volta ${lapsCompleted}`)
    lapsCompleted = lapsCompleted + 1
    console.log(`Volta ${lapsCompleted}`)
    lapsCompleted = lapsCompleted + 1
    console.log(`Volta ${lapsCompleted}`)
}
function sumOfLaps() {
    //variavel pode ser apenas acessado pela função (block scope)
    let totalTime = lap1 + lap2 + lap3
    console.log(`Volta 1: ${lap1} Segundos\nVolta 2: ${lap2} Segundos\nVolta 3: ${lap3} Segundos \nTotal: ${totalTime} segundos`)
}
countdown()
lapsComp()
sumOfLaps()
sumOfLaps()
sumOfLaps()
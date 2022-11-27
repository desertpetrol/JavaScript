    // let myAge = 20
    // console.log(myAge) 


    // let myAge = 21
    // const humanDogRatio = 7
    // let myAgeInDog = myAge*humanDogRatio
    // console.log(myAge, , myAgeInDog)

let contNum = 0
let contData = document.getElementById('contadorNum')
let nome = 'Pedro'
let lsSalva = document.getElementById('listaSalva')
    function welc(){
        const mensagem = 'bem vindo, '
        let welcome = document.getElementById('welcome')
        welcome.textContent = mensagem + nome
        welcome.textContent += ' ™'
    }
    function increment() {
        contNum += 1
        contData.textContent = contNum
    }
    function reduc() {
        contNum -= 1
        contData.textContent = contNum
    }
    function save() {
        let storedCont = ` ${contNum} - `
        lsSalva.textContent += storedCont
    }
    function resetList() {
        lsSalva.textContent = " "
    }
    function reset() {
        contNum = 0
        contData.textContent = contNum
    }

    welc()

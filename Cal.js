'use strict'
window.onbeforeunload = function(event) {
    return true
}
// let plus = document.getElementById('plus')
// let tujuh = document.getElementById('tujuh')
// let delapan = document.getElementById('delapan')
// let sembilan = document.getElementById('sembilan')
// let minus = document.getElementById('minus')
// let empat = document.getElementById('empat')
// let lima = document.getElementById('lima')
// let enam = document.getElementById('enam')
// let kali = document.getElementById('kali')
// let satu = document.getElementById('satu')
// let dua = document.getElementById('dua')
// let tiga = document.getElementById('tiga')
// let bagi = document.getElementById('bagi')
// let nol = document.getElementById('nol')
// let hapus = document.getElementById('hapus')
// let hasil = document.getElementById('hasil')
let display = document.getElementById('display')
let array = []
let operator = []
let result = []
let wadah = document.getElementById('wadah')
let tambah = (a,b) => a + b;
let kurang = (a,b) => a - b;
let mul = (a,b) => a * b
let div = (a,b) => a / b
let index = 0
let uidis = []
let ui = () => {
    display.innerHTML = `${uidis.join('')}`
}
let cek = () => {
    let kondisi = isNaN(uidis.slice(-2,-1))
    if (kondisi) {
        alert('habis operator tidak boleh operator sayang')
        operator.pop()
        result.pop()
        uidis.pop()
        ui()
    }
}
wadah.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    switch(e.target.innerText) {
        case '+':
            operator.push('+')
            result.push(array.join(''))
            array = []
            console.log(1)
            uidis.push('+')
            ui()
            cek()
            break;
            case '7':
                array.push(7)
                console.log(array)
                uidis.push(7)
                ui()
                break;
                case '8':
                    array.push(8)
                    uidis.push(8)
                    ui()
                    break;
                    case '9':
                        array.push(9)
                        uidis.push(9)
                        ui()
                        break;
                        case '-':
                            operator.push('-')
                            uidis.push('-')
                            console.log('tes');
                            result.push(array.join(''))
                            ui()
                            cek()
                            array = []
                            break;
                            case '4':
                                array.push(4)
                                uidis.push(4)
                                ui()
                                break;
                                case '5':
                                    array.push(5)
                                    uidis.push(5)
                                    ui()
                                    break;
                                    case '6':
                                        array.push(6)
                                        uidis.push(6)
                                        ui()
                                        break;
                                        case '*':
                                            operator.push('*')
                                            uidis.push('*')
                                            result.push(array.join(''))
                                            array = []
                                            console.log('tes')
                                            ui()
                                            cek()
                                            break;
                                            case '1':
                                                array.push(1)
                                                uidis.push(1)
                                                ui()
                                                break;
                                                case '2':
                                                    array.push(2)
                                                    uidis.push(2)
                                                    ui()
                                                    break;
                                                    case '3':
                                                        array.push(3)
                                                        uidis.push(3)
                                                        ui()
                                                        break;
                                                        case '/':
                                                            operator.push('/')
                                                            console.log('tes')
                                                            uidis.push('/')
                                                            result.push(array.join(''))
                                                            ui()
                                                            cek()
                                                            array = []
                                                            break;
                                                            case '0':
                                                                array.push(0)
                                                                uidis.push(0)
                                                                ui()
                                                                break;
                                                                case 'C':
                                                                    result = []
                                                                    uidis = []
                                                                    array = []
                                                                    operator = []
                                                                    ui()
                                                                    console.log('tes')
                                                                    break;
                                                                    case '=':
                                                                        result.push(array.join(''))
                                                                        let hasill = result.reduce((acc,cur) => {
                                                                            let op = operator[index]
                                                                            index++
                                                                            if (op === '+') {
                                                                                return tambah(Number(acc),Number(cur))
                                                                            } else if (op === '-') {
                                                                                return kurang(Number(acc),Number(cur))
                                                                            } else if (op === '*') {
                                                                                return mul(Number(acc),Number(cur))
                                                                            } else if (op === '/') {
                                                                                return div(Number(acc),Number(cur))
                                                                            }
                                                                        })
                                                                        console.log(hasill)
                                                                        console.log(`ini adalah hasil:${hasill}`)
                                                                        display.innerHTML = hasill
                                                                        result = []
                                                                        array = []
                                                                        array.push(hasill)
                                                                        uidis = []
                                                                        uidis.push(hasill)
                                                                        operator = []
                                                                        index = 0
                                                                        break;
            
    }
})

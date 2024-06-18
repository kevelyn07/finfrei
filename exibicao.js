import prompt from 'prompt-sync'
import {depositar,sacar,exibirSaldo} from "./financeiro.js"
let ler = prompt ()


console.log('Qual seu saldo atual?');
let saldoAtual = Number(ler())
let v = exibirSaldo(saldoAtual)
console.log(v)



console.log('Quanto você deseja depositar?');
let depositado = Number(ler())
let parametro = depositar(saldoAtual ,depositado)
console.log(parametro)

console.log('Quanto você deseja sacar?')
let saque = Number(ler())
let t = sacar(saldoAtual ,saque)
console.log(t)


if(saque <= 0){
    console.log('Valor inválido.')
    let s = ler()
     if(novoValor == 'c'){
        console.log('Programa encerrado.')
        
    }
}

for(let n = 0; depositado <=0; n++){
    console.log('valor invalido, digite outro valor');
    let novoValor = ler()
}

console.log(saldoAtual)



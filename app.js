import prompt from 'prompt-sync'
let ler = prompt()

console.log('Deseja continuar com o programa?');
let a = ler()



for (let b =1; a == "sair"; b++ ){
    console.log('programa encerrado');
}


export default function Logica(name){

const jugador = name
const opciones = ['piedra','papel', 'tijera']
let pcjugador = Math.floor(Math.random()*3)
const jugada = opciones[pcjugador]

console.log('Yo: '+ jugador)
console.log('Pc: ' + jugada)

if ( jugador == jugada){
    console.log('Empate!')
}if (jugador != jugada){
    if(jugador == 'piedra' && jugada == 'papel'){
        console.log('Perdiste!')
    }if(jugador == 'piedra' && jugada == 'tijera'){
        console.log('Ganaste')
    }if(jugador == 'papel' && jugada == 'tijera'){
        console.log('Perdiste!')
    }if(jugador == 'papel' && jugada == 'piedra'){
        console.log('Ganaste')
    }if(jugador == 'tijera' && jugada == 'piedra'){
        console.log('Perdiste!')
    }if(jugador == 'tijera' && jugada == 'papel'){
        console.log('Ganaste')}

}
    return (
    console.log()
    )
}
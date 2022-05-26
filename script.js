const Btn = document.getElementById('Btn')

import opisywarka from '/data.js'



/* const myRequest = new Request('opisywarka.json');

fetch(myRequest)
    .then(response => response.json())
    .then(data => {
        Btn.addEventListener('click', () => {

            document.getElementById('dzwiek_wynik').innerText = data.Dzwiek[Random(data.Dzwiek.length)]
            document.getElementById('widok_wynik').innerText = data.Widok[Random(data.Widok.length)]
            document.getElementById('dotyk_wynik').innerText = data.Dotyk[Random(data.Dotyk.length)]
            document.getElementById('zapach_wynik').innerText = data.Zapach[Random(data.Zapach.length)]
            document.getElementById('odczucia_wynik').innerText = data.Odczucia[Random(data.Odczucia.length)]
        })
    })
    .catch(console.error); */

Btn.addEventListener('click', () => {

    document.getElementById('dzwiek_wynik').innerText = opisywarka.Dzwiek[Random(opisywarka.Dzwiek.length)]
    document.getElementById('widok_wynik').innerText = opisywarka.Widok[Random(opisywarka.Widok.length)]
    document.getElementById('dotyk_wynik').innerText = opisywarka.Dotyk[Random(opisywarka.Dotyk.length)]
    document.getElementById('zapach_wynik').innerText = opisywarka.Zapach[Random(opisywarka.Zapach.length)]
    document.getElementById('odczucia_wynik').innerText = opisywarka.Odczucia[Random(opisywarka.Odczucia.length)]
})


function Random(number) {
    const random_number = Math.floor(Math.random() * number)
    return random_number
}

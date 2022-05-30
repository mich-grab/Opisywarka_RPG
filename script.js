const Btn = document.getElementById('Btn')
const List = document.querySelector('.historyUlList')

/* import opisywarka from './data.js' */

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
    let dzwiek = opisywarka.Dzwiek[Random(opisywarka.Dzwiek.length)]
    let widok = opisywarka.Widok[Random(opisywarka.Widok.length)]
    let dotyk = opisywarka.Dotyk[Random(opisywarka.Dotyk.length)]
    let zapach = opisywarka.Zapach[Random(opisywarka.Zapach.length)]
    let odczucia = opisywarka.Odczucia[Random(opisywarka.Odczucia.length)]
    document.getElementById('dzwiek_wynik').innerText = dzwiek
    document.getElementById('widok_wynik').innerText = widok
    document.getElementById('dotyk_wynik').innerText = dotyk
    document.getElementById('zapach_wynik').innerText = zapach
    document.getElementById('odczucia_wynik').innerText = odczucia

    const Time = new Date()

    let newLi = document.createElement('li')
    newLi.appendChild(document.createTextNode(Time.getFullYear() + '-' + (Time.getMonth() + 1) + '-' + Time.getDate() + '   ' + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds()
        +
        `  Dzwięk: ${dzwiek}; Widok: ${widok}; Dotyk: ${dotyk}; Zapach: ${zapach}; Odczucia: ${odczucia}`))
    List.prepend(newLi)
})


function Random(number) {
    const random_number = Math.floor(Math.random() * number)
    return random_number
}

const opisywarka = {
    Dzwiek: [
        "Gwarny",
        "Cichy",
        "Rytmiczny",
        "Ostry",
        "Metaliczny",
        "Kojący",
        "Melodyjny",
        "Naturalny",
        "Nieprzyjemny",
        "Piskliwy",
        "Przestrzenny, Echo",
        "Straszny",
        "Subtelny",
        "Bulgoczący",
        "Bzyczący",
        "Cichy",
        "Generowany przez urzadzenie",
        "Pojedyńczy dzwięk",
        "Szuranie",
        "Stukot"
    ],
    Widok: [
        "Groteskowe",
        "Masywne",
        "Obskurne",
        "Zadbane",
        "Przestronne",
        "Malownicze",
        "Niechlujne",
        "Tradycyjne",
        "Tętniące życiem",
        "Sielskie",
        "Słoneczne",
        "Ciepłe",
        "Zimne",
        "Obrzydliwe",
        "Nowoczesne",
        "Zaciemnione",
        "Uporzadkowane",
        "Chaotyczne",
        "Klaustrofobiczne",
        "Zepsute",
        "Zadymione"
    ],
    Dotyk: [
        "Lepki",
        "Śliski",
        "Gładki",
        "Twardy",
        "Miękkie",
        "Szorstkie",
        "Ostre",
        "Nierówne",
        "Delikatne",
        "Wilgotne",
        "Suche",
        "Tłuste",
        "Kłujące",
        "Gumowe",
        "Wodniste",
        "Kruche",
        "Pylaste",
        "Zimne",
        "Gorące"
    ],
    Zapach: [
        "Słodkawy",
        "Przyjemny",
        "Nieprzyjemny",
        "Kwiatowy",
        "Woń obiadu",
        "Kwaśny",
        "Oleisty",
        "Spalenizny",
        "Rześki",
        "Drażniący",
        "Ostry",
        "Powodujący kichanie",
        "Delikatny",
        "Intensywny",
        "Kakofonia zapachów",
        "Delikatny",
        "Dym",
        "Metaliczny",
        "Mydlany",
        "Naturalny",
        "Uwodzicielski"
    ],
    Odczucia: [
        "Wstrząsająco",
        "Spokojnie",
        "Obrazoburczo",
        "Kojąco",
        "Swojsko",
        "Strasznie",
        "Nostalgicznie",
        "Obco",
        "Czyjaś obecnosć",
        "Nerwowość",
        "Przytłaczająco",
        "Radośnie",
        "Rozbawiająco",
        "Żałośnie",
        "Luźno",
        "Bez spiny",
        "Zmieszany",
        "Zażenowany",
        "Sympatycznie",
        "Podziw",
        "Optymistyczny"
    ]

}


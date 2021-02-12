function AirFight() {

    let table = new Array(10);
    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(10);
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            table[i][j] = '<img  src="/img/greyBg.jpg" style="height: 75px; width: 100px"/>';
        }
    }

    table[5][5] = '<img  src="/img/MiG15.jpg" style="height: 75px; width: 100px"/>';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            document.write(table[i][j]);
        }
        document.write("<br>");
    }
}

function Names() {
    let arr = [];
    do {
        var surname = prompt("Введи фамилию", "");
        arr.push(surname);
    } while (surname != "" || surname == null);

    for (var i = 0; i < arr.length; i++) {
        document.write(`${i} -  ${arr[i]} <br>`);
    }
}


function QuestionGame() {
    let cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
        "Нижний Новгорд", "Самара", "Челябинск", "Омск", "Ростов-на-Дону", "Ногинск"];

    cityNum = Math.floor(Math.random() * cities.length);
    let city = cities[cityNum];


    let tryNum = 1;
    while (true) {
        let userCity = prompt(`Попытка: №${tryNum++} - Введите город...`, "");
        if (userCity == city) {
            alert("Вы угадали!");
            break;
        }
        if (userCity != city) {
            alert("Вы не угадали(");
        }
    }
    
}
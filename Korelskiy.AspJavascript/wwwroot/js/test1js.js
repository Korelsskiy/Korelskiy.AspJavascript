function ShowAlert() {
    alert("Я все сосчитал, мой командир!");
}

function WriteDocument() {
    alert("Я все сосчитал, мой командир!");
    let intX = parseInt(prompt("Введите первое число", "0"));
    let intY = parseInt(prompt("Введите второе число", "0"));
    document.write(`${intX + intY}`);
}

function SwitchCase() {
    let number = +prompt("Выберите номер фотографии:", "0");
    switch (number) {
        case 1:
            document.write('<h1 class="text-center">ВЛ-10</h1>');
            document.write('<img src="img/vl10.jpg" style="max-height: 150px; max-width: 200px;" />');
            break;
        case 2:
            document.write('<h1 class="text-center">ВЛ-8</h1>');
            document.write('<img src="img/vl8.jpg" style="max-height: 150px; max-width: 200px;" />');
            break;
        default:
    }
}
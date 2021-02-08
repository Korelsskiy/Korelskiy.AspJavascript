function myfunction() {
    let elem = document.getElementById("myNum");
    elem.textContent = Math.round(Math.random()*4 + 1)
}

var x = 0;

function addInput() {
    if (x < 10) {
        var str = '<input type="text" class="link" placeholder="Ссылка на профиль *"> <input type="text" class="amount" placeholder="Кол-во"> <div id="input' + (x + 1) + '"></div>';
        document.getElementById('input' + x).innerHTML = str;
        x++;
    } else {
        alert('STOP it!');
    }
}

function addComment() {
    document.getElementById('comments').innerHTML += $('#myComment').val();
    document.getElementById('comments').innerHTML += '<br />';
}
var uno = [
    [1, 3, 5, 7],
    [9, 11, 13, 15],
    [17, 19, 21, 23],
    [25, 27, 29, 31]
];
var dos = [
    [2, 3, 6, 7],
    [10, 11, 14, 15],
    [18, 19, 22, 23],
    [26, 27, 30, 31]
];
var tres = [
    [4, 5, 6, 7],
    [12, 13, 14, 15],
    [20, 21, 22, 23],
    [28, 29, 30, 31]
];
var cuatro = [
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [24, 25, 26, 27],
    [28, 29, 30, 31]
];
var cinco = [
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31]
];
uno.forEach(function (ciclo, i) {
    var elemento = document.getElementById("uno");
    var row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row');
    ciclo.forEach(function (el, j) {
        var nItem = document.querySelector('.uno');
        var ele = nItem.children[i];
        var item = document.createElement("div");
        item.textContent = el.toString();
        ele.insertBefore(item, ele.children[el]).classList.add('item');
    });
});
dos.forEach(function (ciclo, i) {
    var elemento = document.getElementById("dos");
    var row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row');
    ciclo.forEach(function (el, j) {
        var nItem = document.querySelector('.dos');
        var ele = nItem.children[i];
        var item = document.createElement("div");
        item.textContent = el.toString();
        ele.insertBefore(item, ele.children[el]).classList.add('item');
    });
});
tres.forEach(function (ciclo, i) {
    var elemento = document.getElementById("tres");
    var row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row');
    ciclo.forEach(function (el, j) {
        var nItem = document.querySelector('.tres');
        var ele = nItem.children[i];
        var item = document.createElement("div");
        item.textContent = el.toString();
        ele.insertBefore(item, ele.children[el]).classList.add('item');
    });
});
cuatro.forEach(function (ciclo, i) {
    var elemento = document.getElementById("cuatro");
    var row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row');
    ciclo.forEach(function (el, j) {
        var nItem = document.querySelector('.cuatro');
        var ele = nItem.children[i];
        var item = document.createElement("div");
        item.textContent = el.toString();
        ele.insertBefore(item, ele.children[el]).classList.add('item');
    });
});
cinco.forEach(function (ciclo, i) {
    var elemento = document.getElementById("cinco");
    var row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row');
    ciclo.forEach(function (el, j) {
        var nItem = document.querySelector('.cinco');
        var ele = nItem.children[i];
        var item = document.createElement("div");
        item.textContent = el.toString();
        ele.insertBefore(item, ele.children[el]).classList.add('item');
    });
});
//================================
// Resultado
//================================
var xValores = [];
var xUno = document.getElementById('uno');
xUno.addEventListener('click', function () {
    document.querySelector('.uno').classList.add('foco');
    xValores.push(1);
});
var xDos = document.getElementById('dos');
xDos.addEventListener('click', function () {
    document.querySelector('.dos').classList.add('foco');
    xValores.push(2);
});
var xTres = document.getElementById('tres');
xTres.addEventListener('click', function () {
    document.querySelector('.tres').classList.add('foco');
    xValores.push(4);
});
var xCuatro = document.getElementById('cuatro');
xCuatro.addEventListener('click', function () {
    document.querySelector('.cuatro').classList.add('foco');
    xValores.push(8);
});
var xCinco = document.getElementById('cinco');
xCinco.addEventListener('click', function () {
    document.querySelector('.cinco').classList.add('foco');
    xValores.push(16);
});
function sumar() {
    var res = 0;
    xValores.forEach(function (num) {
        res += num;
    });
    getRespuesta(res);
}
var listo = document.getElementById('listo');
listo.addEventListener('click', function () { return sumar(); });
function getRespuesta(respuesta) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var texto = document.querySelector('.textoModal');
    texto.textContent = respuesta;
    setTimeout(function () {
        modal.style.display = "none";
        document.querySelector('.uno').classList.remove('foco');
        document.querySelector('.dos').classList.remove('foco');
        document.querySelector('.tres').classList.remove('foco');
        document.querySelector('.cuatro').classList.remove('foco');
        document.querySelector('.cinco').classList.remove('foco');
        xValores = [];
    }, 4000);
}

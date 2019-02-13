
var lampe = document.querySelector('.lampe');

setInterval(function () {
    console.log('eteindre');
   lampe.classList.toggle('eteindre');
},1000)

// x=setTimeout(function () {
//     console.log('Bonjour');
// },2500);
//
// i=5;
// x=setInterval(function () {
//     if(i) {
//         console.log(i--);
//     } else {
//         clearInterval(x);
//     }
// });
//
// t.forEach(function (valeur, indice, tab) {
//     console.log('t['+indice+']='+valeur);
//     console.log(tab);
// });
//
// function compare(a,b) {
//     return a-b;
// }
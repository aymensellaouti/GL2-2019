var image = document.createElement('img');
console.log(image);
image.alt = 'Mon image';
image.src = 'angular.jpg';
console.log(image);
var div = document.querySelector('div');

setTimeout(
    function () {
        div.insertBefore(image, div.firstChild);
    }
,2000);

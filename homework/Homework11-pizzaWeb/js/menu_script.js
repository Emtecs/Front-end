document.getElementById('pizza').addEventListener('click', function () {
    document.querySelector('#menu_pizza').style.display = 'block';
    document.querySelector('#menu_salads').style.display = 'none';
    document.querySelector('#menu_starter').style.display = 'none';
});
document.getElementById('salads').addEventListener('click', function () {
    document.querySelector('#menu_pizza').style.display = 'none';
    document.querySelector('#menu_salads').style.display = 'block';
    document.querySelector('#menu_starter').style.display = 'none';
});
document.getElementById('starter').addEventListener('click', function () {
    document.querySelector('#menu_pizza').style.display = 'none';
    document.querySelector('#menu_salads').style.display = 'none';
    document.querySelector('#menu_starter').style.display = 'block';
});

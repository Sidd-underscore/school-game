var mountains = document.querySelector('.mountaints')
var hole = document.querySelector('.hole')
var lava = document.querySelector('.lava')
var lake = document.querySelector('.lake')
var forest = document.querySelector('.forest')
var place_name = document.querySelector('#name')
var place_plants = document.querySelector('#plants')
var place_hazards = document.querySelector('#hazards')
var btn = document.querySelector('#play')

function fillData(des_name, des_plants, des_hazards) {
    btn.disabled = false
    var l_des_name = des_name.toLowerCase();
    place_name.innerHTML = des_name;
    place_plants.innerHTML = des_plants;
    place_hazards.innerHTML = des_hazards;
    btn.addEventListener('click', ev => {
        window.location.href = './maps/' + l_des_name + '.html'
    })
}

$(window).load(function() {
    $('#loading').hide();
});

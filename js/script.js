function init() {
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Its in the evening so there is lots of traffic in Chicago as of now.';
} else if (hourNow > 12) {
  greeting = 'What a nice afternoon, Time to get some lunch';
} else if (hourNow > 0) {
  greeting = 'Rise and Shine sleepy head, early bird gets the worm.';
} else {
  greeting = 'Howdy there partner';
}


var el = document.getElementById('banner');
el.textContent = greeting;

document.getElementById('button').addEventListener('click', function(){
	alert('Babar Kamran:' + document.getElementById('textinput').value);
});


}

window.addEventListener('load', init);
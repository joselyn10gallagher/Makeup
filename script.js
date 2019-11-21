// use variables to simplify your life!
// document.getElementById("one").classList.remove("tan");
// elem.classList.add("opaque");

var a = document.getElementById("finger-can");
var b = document.getElementById("demon-monster");
var c = document.getElementById("face-foot");
var d = document.getElementById("jason-slappy");
var e = document.getElementById("finger");
var f = document.getElementById("can");
var g = document.getElementById("demon");
var h = document.getElementById("monster");
var i = document.getElementById("face");
var j = document.getElementById("foot");
var k = document.getElementById("jason");
var l = document.getElementById("slappy");
var m = document.getElementById("finalsHolder");
var n = document.getElementById("finalsHolderTwo");
var o = document.getElementById("winner");


// First Section
function optionFinger(){
	a.innerHTML= '<img onclick="goToFinalsFinger();" src="images/finger.jpg" />';
	f.classList.add("grayscale");
	e.classList.remove("grayscale");
}

function optionCan(){
	a.innerHTML= '<img onclick="goToFinalsCan();" src="images/can.jpg" />';
	f.classList.add("grayscale");
	e.classList.remove("grayscale");
}

function goToFinalsFinger() {
	m.innerHTML = '<img onclick="winnerFinger();" src="images/finger.jpg" />';
	b.classList.add("grayscale");
	a.classList.remove("grayscale");
}
function goToFinalsCan() {
	m.innerHTML = '<img onclick="winnerCan();" src="images/can.jpg" />';
	b.classList.add("grayscale");
	a.classList.remove("grayscale");
}

function winnerFinger() {
	o.innerHTML = '<img src="images/finger.jpg" />';
	n.classList.add("grayscale");
	m.classList.remove("grayscale");
}
function winnerCan() {
	o.innerHTML = '<img src="images/can.jpg" />';
	n.classList.add("grayscale");
	m.classList.remove("grayscale");
}

// Second Section
function optionDemon(){
	b.innerHTML= '<img onclick="goToFinalsDemon();" src="images/demon.jpg" />';
	h.classList.add("grayscale");
	g.classList.remove("grayscale");
}

function optionMonster(){
	b.innerHTML= '<img onclick="goToFinalsMonster();" src="images/monster.jpg" />';
	console.log("Test");
	h.classList.add("grayscale");
	g.classList.remove("grayscale");
}

function goToFinalsDemon() {
	m.innerHTML = '<img onclick="winnerDemon();" src="images/demon.jpg" />';
	a.classList.add("grayscale");
	b.classList.remove("grayscale");
}
function goToFinalsMonster() {
	m.innerHTML = '<img onclick="winnerMonster();" src="images/monster.jpg" />';
	a.classList.add("grayscale");
	b.classList.remove("grayscale");
}

function winnerDemon() {
	o.innerHTML = '<img src="images/demon.jpg" />';
	n.classList.add("grayscale");
	m.classList.remove("grayscale");
}
function winnerMonster() {
	o.innerHTML = '<img src="images/monster.jpg" />';
	n.classList.add("grayscale");
	m.classList.remove("grayscale");
}

// Third Section
function optionFace(){
	c.innerHTML= '<img onclick="goToFinalsFace();" src="images/face.jpg" />';
	j.classList.add("grayscale");
	i.classList.remove("grayscale");
}

function optionFoot(){
	c.innerHTML= '<img onclick="goToFinalsFoot();" src="images/foot.jpg" />';
	i.classList.add("grayscale");
	j.classList.remove("grayscale");
}

function goToFinalsFace() {
	n.innerHTML = '<img onclick="winnerFace();" src="images/face.jpg" />';
	d.classList.add("grayscale");
	c.classList.remove("grayscale");
}
function goToFinalsFoot() {
	n.innerHTML = '<img onclick="winnerFoot();" src="images/foot.jpg" />';
	d.classList.add("grayscale");
	c.classList.remove("grayscale");
}

function winnerFace() {
	o.innerHTML = '<img src="images/face.jpg" />';
	m.classList.add("grayscale");
	n.classList.remove("grayscale");
}
function winnerFoot() {
	o.innerHTML = '<img src="images/foot.jpg" />';
	m.classList.add("grayscale");
	n.classList.remove("grayscale");
}

//Fourth Section
function optionJason(){
	d.innerHTML= '<img onclick="goToFinalsJason();" src="images/jason.jpg" />';
	l.classList.add("grayscale");
	k.classList.remove("grayscale");
}

function optionSlappy(){
	d.innerHTML= '<img onclick="goToFinalsSlappy();" src="images/slappy.jpg" />';
	k.classList.add("grayscale");
	l.classList.remove("grayscale");
}

function goToFinalsJason() {
	n.innerHTML = '<img onclick="winnerJason();" src="images/jason.jpg" />';
	c.classList.add("grayscale");
	d.classList.remove("grayscale");
}
function goToFinalsSlappy() {
	n.innerHTML = '<img onclick="winnerSlappy();" src="images/slappy.jpg" />';
	c.classList.add("grayscale");
	d.classList.remove("grayscale");
}

function winnerJason() {
	o.innerHTML = '<img src="images/jason.jpg" />';
	m.classList.add("grayscale");
	n.classList.remove("grayscale");
}
function winnerSlappy() {
	o.innerHTML = '<img src="images/slappy.jpg" />';
	m.classList.add("grayscale");
	n.classList.remove("grayscale");
}
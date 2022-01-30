function onn() {
    
    document.getElementById("q").style.display = "block";
    document.getElementById("hed").style.display = "none";
    $("#q").text("До сюрприза" + 10)
    document.getElementById("ror").style.display = "block";

    gog1()

}
function toot() {
    document.location.replace('index.html')
}
function gog1() {
    $("#q").text("До сюрприза" + 9)
    setTimeout(gog2,1000)
}
function gog2() {
    $("#q").text("До сюрприза" + 8)
    setTimeout(gog3, 1000)
}
function gog3() {
    $("#q").text("До сюрприза" + 7)
    setTimeout(gog4,1000)
function gog4() {
    $("#q").text("До сюрприза" + 6)
    setTimeout(gog5,1000)
}
function gog5() {
    $("#q").text("До сюрприза" + 5)
    setTimeout(gog6,1000)
}
function gog6() {
    $("#q").text("До сюрприза" + 4)
    setTimeout(gog7,1000);
}
function gog7() {
    $("#q").text("До сюрприза" + 3)
    setTimeout(gog8,1000)
}
function gog8() {
    $("#q").text("До сюрприза" + 2)
    setTimeout(gog9,1000)
}
function gog9() {
    $("#q").text("До сюрприза" + 1)
    setTimeout(gog10,1000)
}
function gog10() {
    toot();
}
}

function ioi() {
    document.getElementById("ioio").style.display = "block";
    alert("держи :)")
}
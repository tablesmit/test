function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = x + "," + y;
    document.getElementById("demo").innerHTML = coor;

}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}

function ShowMousePostion(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = x + "," + y;
    document.getElementById("MousePostion").innerHTML = coor;

}

function clearMousePostion() {
    document.getElementById("MousePostion").innerHTML = "";
}

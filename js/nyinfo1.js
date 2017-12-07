function myFunction() {
    var x = document.getElementById("myDIV");
    x.style.display ="none";

    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
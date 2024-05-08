function toggleExpand() {
    var content = document.getElementById("expandContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
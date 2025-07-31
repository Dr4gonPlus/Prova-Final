document.getElementById("toggleInfo").addEventListener("click", function() {
    var info = document.getElementById("info");
    if (info.classList.contains("show")) {
        info.classList.remove("show");
    } else {
        info.classList.add("show");
    }
});

document.getElementById("toggleInfo").addEventListener("mouseover", function() {
    var info = document.getElementById("info");
    if (!info.classList.contains("show")) {
        info.classList.add("show");
    }
});
document.getElementById("toggleInfo").addEventListener("mouseout", function() {
    var info = document.getElementById("info");
    if (info.classList.contains("show")) {
        info.classList.remove("show");
    }
});

document.getElementById("togglePratica").addEventListener("click", function() {
    var pratica = document.getElementById("pratica");
    if (pratica.classList.contains("show")) {
        pratica.classList.remove("show");
    } else {
        pratica.classList.add("show");
    }
});

document.getElementById("togglePratica").addEventListener("mouseover", function() {
    var pratica = document.getElementById("pratica");
    if (!pratica.classList.contains("show")) {
        pratica.classList.add("show");
    }
});
document.getElementById("togglePratica").addEventListener("mouseout", function() {
    var pratica = document.getElementById("pratica");
    if (pratica.classList.contains("show")) {
        pratica.classList.remove("show");
    }
});
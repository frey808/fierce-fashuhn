function hide(id){
    document.getElementById(id).style.display = "none";
}

function show(id){
    document.getElementById(id).style.display = "inline";
}

function openNav(){
    show("nav");
    hide("opennav");
}

function closeNav(){
    show("opennav");
    hide("nav");
}

function swap(content){
    closeNav();
    document.getElementById("background").style["background-size"] = "0px";
    document.getElementById("footer").style.top = "auto";
    Array.from(document.getElementsByClassName("content")).forEach((elem) =>
        hide(elem.id)
    );
    show(content);
}

function home(){
    closeNav();
    document.getElementById("background").style["background-size"] = "contain";
    document.getElementById("footer").style.top = "100%";
    Array.from(document.getElementsByClassName("content")).forEach((elem) =>
        hide(elem.id)
    );
}
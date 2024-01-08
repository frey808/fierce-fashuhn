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
    document.getElementById("background").style["background-image"] = "none";
    document.getElementById("opennav").style.top = "5%";
    document.getElementById("footer").style.top = "auto";
    Array.from(document.getElementsByClassName("content")).forEach((elem) =>
        hide(elem.id)
    );
    show(content);
}
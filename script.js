var btn = document.querySelector("button");
var maBloc1 = document.getElementById("bloc1");
var maBloc2 = document.getElementById("bloc2");
var maBloc3 = document.getElementById("bloc3");
var maBloc4 = document.getElementById("bloc4");
var choix = true;

function changeColor(){
    if (choix == true){
        maBloc1.style.color = "white";
        maBloc1.style.backgroundColor = "red";

        maBloc2.style.color = "white";
        maBloc2.style.backgroundColor = "red";

        maBloc3.style.color = "white";
        maBloc3.style.backgroundColor = "red";

        maBloc4.style.color = "white";
        maBloc4.style.backgroundColor = "red";
        choix = false;
    } else {
        maBloc1.style.color = "black";
        maBloc1.style.backgroundColor = "blueviolet";

        maBloc2.style.color = "black";
        maBloc2.style.backgroundColor = "blueviolet";

        maBloc3.style.color = "black";
        maBloc3.style.backgroundColor = "blueviolet";

        maBloc4.style.color = "black";
        maBloc4.style.backgroundColor = "blueviolet";
        choix = true;
    }

}

btn.addEventListener('click' , changeColor);
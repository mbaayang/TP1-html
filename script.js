var btn = document.querySelector("button");
var maBloc1 = document.getElementById("bloc1");
var maBloc2 = document.getElementById("bloc2");
var maBloc3 = document.getElementById("bloc3");
var maBloc4 = document.getElementById("bloc4");
var choix = true;


function changeColor(){
    if (choix == true){
        maBloc1.style.color = "white";
        maBloc1.style.backgroundColor = "yellow";

        maBloc2.style.color = "white";
        maBloc2.style.backgroundColor = "yellow";

        maBloc3.style.color = "white";
        maBloc3.style.backgroundColor = "yellow";

        maBloc4.style.color = "white";
        maBloc4.style.backgroundColor = "yellow";
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


//-------------------------------------FORMULAIRE-----------------------------------------

var buttonEnvoyer = document.querySelector("#envoyer");
function recupereDonnees(){
//Recupérer les valeurs saisis par l'utilisateur
    var champPrenom = document.querySelector("#Prenom").value;
    var champNom = document.querySelector("#Nom").value;
    var champTelephone = document.querySelector("#Numero").value;
    var champEmail = document.querySelector("#Email").value;

//Stocker les valeurs dans le local storage
    localStorage.setItem("Prenom" , champPrenom);
    localStorage.setItem("Nom" , champNom);
    localStorage.setItem("Téléphone" , champTelephone);
    localStorage.setItem("Email" , champEmail);

//Verifie si les champs ont bien été rempli
    if (!champPrenom){
        alert ("Veillez renseignez un prenom");
    }
    else if (!champNom){
        alert ("Veillez renseignez un nom");
    }
    else if (!champTelephone){
        alert ("Veillez renseignez un numéro de téléphone");
    }
    else if (!champEmail){
        alert ("Veillez renseignez une adresse mail");
    }
    else{
    //Afficher les données saisies par l"utilisateur dans la page
    alert("Votre réponse a bien été enregistrer\n" +
    "\nPrenom : " + localStorage.getItem("Prenom")+
    "\nNom : " + localStorage.getItem("Nom")+
    "\nTéléphone : " +localStorage.getItem("Téléphone")+
    "\nEmail : " +localStorage.getItem("Email"));
    }
    }

buttonEnvoyer.addEventListener('click' , recupereDonnees);
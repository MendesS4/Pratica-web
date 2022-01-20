//script para funcinamento do navbar

//funcao para que abra o navbar
function openFunction() {
    document.getElementById("menu").style.width = "40vh";
    document.getElementById("mainbox").style.marginLeft = "20px";
    document.getElementById("mainbox").innerHTML = "";
}
//funcao para fechar o navbar
function closeFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginLeft = "0px";
    document.getElementById("mainbox").innerHTML = "&#9776; Abrir menu";
}
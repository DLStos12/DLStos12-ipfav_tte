//loader
window.addEventListener("load", function () {
    document.getElementById("loader-container").style.display = "none";
});

//Popup Aviso
function popupAviso(){
  window.onload = function () {
    document.getElementById("popupAviso").style.display = "block";
  };

  document.getElementById("popupAvisoFechar").onclick = function () {
    document.getElementById("popupAviso").style.display = "none";
  };
}
//chama afução popupAviso
document.addEventListener("DOMContentLoaded", function () {
     popupAviso();
});

function openPopup() {
  document.getElementsByClassName(".popup").style.display = "block";
  document.getElementsByClassName(".overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

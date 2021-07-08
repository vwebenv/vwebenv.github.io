try {
    document.getElementById("codespace").value = localStorage.getItem("code");
}
finally {
function save_code() {
    localStorage.setItem(localStorage.getItem("current"), document.getElementById("codespace").value);
    document.getElementById("sbutton").innerText = "Save File";
}
}
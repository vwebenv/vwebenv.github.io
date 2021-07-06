function sai(value, index)
{
    return [value.substring(0, index), value.substring(index)];
}
document.getElementById("codespace").addEventListener('keydown', function (e) {
    if(e.key=="Tab") {
        document.getElementById("codespace").value =  sai(document.getElementById("codespace").value, e.target.selectionStart)[0] + "    " + sai(document.getElementById("codespace").value, e.target.selectionStart)[1];
        e.target.setSelectionRange(e.target.selectionStart, e.target.selectionStart);
        e.preventDefault();
    }
});
document.addEventListener("keydown", function(e) {
    if (localStorage.getItem("code") != document.getElementById("codespace").value) {
        document.getElementById("sbutton").innerText = "Save File*";
    }
    if (e.key.toLowerCase() == "s" && e.ctrlKey) {
      e.preventDefault();
      save_code();
    }
}, false);
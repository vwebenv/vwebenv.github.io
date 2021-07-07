function sai(value, index){
    return [value.substring(0, index), value.substring(index)];
}
function chck(arr, param) {
    return arr[arr.length - param];
}
document.getElementById("codespace").addEventListener('keydown', function (e) {
    if (e.key == "Tab") {
        var csvar = e.target.selectionStart;
        document.getElementById("codespace").value =  sai(document.getElementById("codespace").value, e.target.selectionStart)[0] + "    " + sai(document.getElementById("codespace").value, e.target.selectionStart)[1];
        e.target.setSelectionRange(csvar + 4, csvar + 4);
        e.preventDefault();
    }
    if (e.key == "Backspace") {
        if (e.target.selectionStart > 4) {
            var sailine = sai(document.getElementById("codespace").value, e.target.selectionStart)[0];
            var cond = 0.00;
            for (var i = 0; i < 4; i++) {
                if (chck(sailine, i + 1) == " ") {
                    cond += 0.25;
                }
            }
            if (cond == 1) {
                var csvar = e.target.selectionStart;
                document.getElementById("codespace").value = sai(document.getElementById("codespace").value, e.target.selectionStart - 4)[0] + sai(document.getElementById("codespace").value, e.target.selectionStart)[1];
                e.target.setSelectionRange(csvar - 4, csvar - 4);
                e.preventDefault();
            }
        }
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
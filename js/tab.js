if (localStorage.getItem("tabs") == null) {
    localStorage.setItem("tabs", "code\n");
}
if (localStorage.getItem("current") == null) {
    localStorage.setItem("current", "code");
}

document.getElementById("tabadd").style.display = "none";
document.getElementById("rmvtab").style.display = "none";
document.getElementById("rnmtab").style.display = "none";

function reptabs() {
    var aarray = localStorage.getItem("tabs").split("\n");
    var barray = [];
    for (var i = 0; i < aarray.length; i++) {
        if (aarray[i] == null || aarray[i] == undefined || aarray[i] == "") {
            continue;
        }
        barray.push('<a href="#" onclick="chngtab(' + i + ');">' + aarray[i] +'</a>');
    }
    document.getElementById("thetabs").innerHTML = "<pre>" + barray.join("    ") + "</pre><hr>";
}

function opentabs() {
    reptabs();
    document.getElementById("thetabs").style.display = "";
    document.getElementById("awfulcode").innerHTML = document.getElementById("awfulcode").innerHTML.replace('onclick="opentabs();"', 'onclick="closetabs();"');
    document.getElementById("awfulcode").innerHTML = document.getElementById("awfulcode").innerHTML.replace('View Tabs', 'Close Tabs');
    document.getElementById("tabadd").style.display = "";
    document.getElementById("rmvtab").style.display = "";
    document.getElementById("rnmtab").style.display = "";
}

function closetabs() {
    reptabs();
    document.getElementById("thetabs").style.display = "none";
    document.getElementById("awfulcode").innerHTML = document.getElementById("awfulcode").innerHTML.replace('onclick="closetabs();"', 'onclick="opentabs();"');
    document.getElementById("awfulcode").innerHTML = document.getElementById("awfulcode").innerHTML.replace('Close Tabs', 'View Tabs');
    document.getElementById("tabadd").style.display = "none";
    document.getElementById("rmvtab").style.display = "none";
    document.getElementById("rnmtab").style.display = "none";
}

document.getElementById("codespace").value = localStorage.getItem(localStorage.getItem("current"));

function chngtab(index) {
    localStorage.setItem("current", localStorage.getItem("tabs").split("\n")[index]);
    document.getElementById("codespace").value = localStorage.getItem(localStorage.getItem("current"));
    reptabs();
}

function addtab(name) {
    if (localStorage.getItem("tabs").replace(name + "\n", "") == localStorage.getItem("tabs")) {
        localStorage.setItem("tabs", localStorage.getItem("tabs") + name + "\n");
        reptabs();
    }
}

function rmvtab(index) {
    if (localStorage.getItem("tabs").split("\n").length - 1 != 1) {
        if (localStorage.getItem("tabs").split("\n")[index] == localStorage.getItem("current")) {
            if (index > 0) {
                chngtab(index - 1); 
            }
            else if (0 < index + 1< localStorage.getItem("tabs").split("\n").length) {
                chngtab(index + 1);
            }
        }
        localStorage.removeItem(localStorage.getItem("tabs").split("\n")[index]);
        localStorage.setItem("tabs", localStorage.getItem("tabs").replace(localStorage.getItem("tabs").split("\n")[index] + "\n", ""));
        reptabs();
    }
}

function rmvctab() {
    var index = -1;
    for (var i = 0; i < localStorage.getItem("tabs").split("\n").length; i++) {
        if (localStorage.getItem("tabs").split("\n")[i] == localStorage.getItem("current")) {
            index = i;
            break;
        }
    }
    if (localStorage.getItem("tabs").split("\n").length - 1 != 1) {
        if (index > 0) {
            chngtab(index - 1); 
        }
        else if (0 < index + 1< localStorage.getItem("tabs").split("\n").length) {
            chngtab(index + 1);
        }
        localStorage.removeItem(localStorage.getItem("tabs").split("\n")[index]);
        localStorage.setItem("tabs", localStorage.getItem("tabs").replace(localStorage.getItem("tabs").split("\n")[index] + "\n", ""));
        reptabs();
    }
}

function chngname(oldname, newname) {
    localStorage.setItem("tabs", localStorage.getItem("tabs").replace(oldname, newname));
    localStorage.setItem("current", newname);
    localStorage.setItem(newname, localStorage.getItem(oldname));
    if (localStorage.getItem(newname) == "null") {
        localStorage.setItem(newname, "");
    }
    localStorage.removeItem(oldname);
}

function rnmtab() {
    var index = -1;
    for (var i = 0; i < localStorage.getItem("tabs").split("\n").length; i++) {
        if (localStorage.getItem("tabs").split("\n")[i] == localStorage.getItem("current")) {
            index = i;
            break;
        }
    }
    var lrgstr1 = '<a href="#" onclick="chngtab(' + index + ');">' + localStorage.getItem("tabs").split("\n")[index] +'</a>'
    var lrgstr2 = '<input type="text" id="nwnm">';
    document.getElementById("thetabs").innerHTML = document.getElementById("thetabs").innerHTML.replace(lrgstr1, lrgstr2);
    document.getElementById("nwnm").value = localStorage.getItem("current");
    document.getElementById("nwnm").addEventListener("keydown", function(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            chngname(localStorage.getItem("current"), document.getElementById("nwnm").value);
            document.getElementById("thetabs").innerHTML = document.getElementById("thetabs").innerHTML.replace(lrgstr2, lrgstr1);
            reptabs();
        }
    }, false);
}
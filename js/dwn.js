document.getElementById("dbutton").href = "data:attachment/text," + encodeURI(localStorage.getItem("code"));
document.getElementById("dbutton").target = "_blank";
document.getElementById("dbutton").download = "code.html";
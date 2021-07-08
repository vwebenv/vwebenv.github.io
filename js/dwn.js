document.getElementById("dbutton").href = "data:attachment/text," + encodeURI(localStorage.getItem(localStorage.getItem("current")));
document.getElementById("dbutton").target = "_blank";
document.getElementById("dbutton").download = localStorage.getItem("current");

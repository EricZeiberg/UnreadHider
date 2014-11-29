 var parentElement = document.getElementsByClassName("topic");
 for (index = 0; index < parentElement.length; ++index) {
    var element = parentElement[index];
    var td = element.childNodes[1];
    td.style.display = "none";
}
document.getElementById("myForm").onsubmit = function() {display()};

function myFunction() {
  alert("The form was submitted");
  display();
}
function display()
{
    var formAlert = document.getElementById('myForm');
    str = "Form Elements of form " + formAlert.name + ": \n"
    for (i = 0; i < formAlert.length; i++)
        str += formAlert.elements[i].name + ":  "+ formAlert.elements[i].value + "\n"
    alert(str)   
}
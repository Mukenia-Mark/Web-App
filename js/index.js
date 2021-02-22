document.getElementById('button').addEventListener("click", clickFunction);
function clickFunction() {
alert ("Are you sure that you want to submit?");
} 
document.forms["akanForm"].onsubmit = function(){
  var day = document.getElementById("dateofbirth").value;
  var gender = document.getElementById("gender").value;
  alert( " " day + "and " + gender);
  return false;
}

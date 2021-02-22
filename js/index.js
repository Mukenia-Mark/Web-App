document.getElementById('button').addEventListener("click", clickFunction);
function clickFunction() {
  if (confirm("Are you sure that you want to submit?")){ 

    var dateinput=document.getElementById("dateofbirth").value;
    var dateofbirth= new Date(dateinput);
    var day = dateofbirth.getDay();
    var gender = document.getElementById("gender").value;
    confirm("You have selected "+gender+".")



    if ( day === 1 && gender === "Female" ) {
    confirm("Your Akan name is Adwoa.");
    } else if ( day === 2 && gender === "Female") {
    confirm("Your Akan name is Abenaa.");
    } else if ( day === 3 && gender === "Female") {
    confirm("Your Akan name is Akua.");
    } else if ( day === 4 && gender === "Female") {
    confirm("Your Akan name is Yaa.");
    } else if ( day === 5 && gender === "Female") {
    confirm("Your Akan name is Afua.");
    } else if ( day === 6 && gender === "Female") {
    confirm("Your Akan name is Ama");
    } else if ( day === 0 && gender === "Female") {
    confirm("Your Akan name is Akosua.");
    } else if ( day === 1 && gender === "Male") {
    confirm("Your Akan name is Kwadowa.");
    }else if ( day === 2 && gender === "Male") {
    confirm("Your Akan name is Kwabena.");
    }else if ( day === 3 && gender === "Male") {
    confirm("Your Akan name is Kwaku.");
    }else if ( day === 4 && gender === "Male") {
    confirm("Your Akan name is Yaw");
    }else if ( day === 5 && gender === "Male") {
    confirm("Your Akan name is Kofi.");
    }else if ( day === 6 && gender === "Male") {
    confirm("Your Akan name is Kwame.");
    }else if ( day === 0 && gender === "Male") {
    confirm("Your Akan name is Kwasi")
    }else {
    confirm("Your input is incorrect.");
    }
  }
}
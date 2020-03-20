 function order() {
  var name= document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var service= document.getElementById("service").value;
  var date= document.getElementById("date").value;
  var time= document.getElementById("time").value; 
  if (name==="" || email==="" || date==="" || time==="") {
    alert("Please fill in the necessary information before proceeding!")
  } else {
  alert("Congratulations " + name + "!" + " You have successfully booked an appointment with Haba KiBarber. We are glad that you chose us and we promise to provide the best service possible. Thank you!")
  }
  document.getElementById("x").innerHTML= "You have booked a " + service + " appointment."
  document.getElementById("y").innerHTML= "We will be glad to offer you the selected service on " + date
  document.getElementById("z").innerHTML= "Your appointment will be at exactly " + time 
  document.getElementById("ad").innerHTML= "Please ensure that you arrive on the scheduled time of service. Until then, cheers!"
}

$(document).ready(function() {
  $(".book").click(function() {
    $("#summary").slideToggle()
    $("#contact").slideToggle()
  })
})
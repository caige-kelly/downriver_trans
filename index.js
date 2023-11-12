var input = document.getElementById("vin");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(event.target.value)        
    }
  });
// 2.	Change the Image on click.

const box = document.getElementById('box');
    box.addEventListener('click', function() {
    box.src="lovepik-simple-picture.jpg";
});

// 3.	Make a counter using 2 buttons (+(Increase the value), - (decrease the value))

let value = 0;

document.getElementById("increase").addEventListener("click",function(){
    value++;

document.getElementById("value").textContent = value;
});

document.getElementById("decrease").addEventListener("click",function(){
    value--;
    document.getElementById("value").textContent = value;
});

// 4.	Password Show/Hide

document.getElementById("showPswd").addEventListener("change", function () {
  let password = document.getElementById("pass");

  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password"; 
  }
});
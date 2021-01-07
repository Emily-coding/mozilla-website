const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var inequalitygraph = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 inequalitygraph.onclick = sayOuch;

 function myFunction() {
  var x = document.getElementById("button");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
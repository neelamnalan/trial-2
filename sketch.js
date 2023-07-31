var input,heading
function setup(){
  createCanvas(500,500)
  input=createInput();
  input.position(5,80);

  heading=createElement("h3","Enter any alphabet")
  heading.position(5,30)
}
function draw() {
  background(103, 245, 202);   //rgb- 0-255
  var v=input.value()
  switch(v){
    case 'a':
      console.log("It is a vowel")
      break;
    case 'e':
      console.log("It is a vowel")
      break;
    case 'i':
      console.log("It is a vowel")
      break;
    case 'o':
      console.log("It is a vowel")
      break;
    case 'u':
      console.log("It is a vowel")
      break;
    default:
      console.log("Please enter a vowel")
  }
}

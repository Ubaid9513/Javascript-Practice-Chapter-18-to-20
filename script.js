// for (initializing ; condition ; increment / decrement){ }

// var i;
// for (i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// var i;
// for (i = 10 ; i >= 0 ; i--){
//     console.log(i);
// }

// for (i = 2; i <= 40; i *= 2) {
//   console.log(i);
// }

// for (var i = 1 ; i <= 10 ; i++){
//   document.write( "2" + " " + "x" + " " + i + " " + "=" + " " + 2*i + "<br>")
// }

// var names = ['Ubaid ', 'Saqib ', 'Uzaima ', 'Adnan ', 'FAisal ', 'Kamran ', 'Usuf ', 'Taha '];
// for (var i = 0 ; i<names.length ; i++){
//   document.write(names[i]);
// }

var firstNames = ["Ubaid", "Saqib", "Uzaima"];
var lastNames = ["Aslam", "Sheikh"];

for (i = 0; i<firstNames.length; i++){
  for (j = 0; j<lastNames.length; j++){
    document.write(firstNames[i] + " " + lastNames[j] + "<br>")
  }
}
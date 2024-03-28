for (initializing ; condition ; increment / decrement){ }

var i;
for (i = 1 ; i <= 10 ; i++){
    console.log(i);
}

var i;
for (i = 10 ; i >= 0 ; i--){
    console.log(i);
}

for (i = 2; i <= 40; i *= 2) {
  console.log(i);
}

for (var i = 1 ; i <= 10 ; i++){
  document.write( "2" + " " + "x" + " " + i + " " + "=" + " " + 2*i + "<br>")
}

var names = ['Ubaid ', 'Saqib ', 'Uzaima ', 'Adnan ', 'FAisal ', 'Kamran ', 'Usuf ', 'Taha '];
for (var i = 0 ; i<names.length ; i++){
  document.write(names[i]);
}

var firstNames = ["Ubaid", "Saqib", "Uzaima"];
var lastNames = ["Aslam", "Sheikh"];

for (i = 0; i<firstNames.length; i++){
  for (j = 0; j<lastNames.length; j++){
    document.write(firstNames[i] + " " + lastNames[j] + "<br>")
  }
}

var pslTeams = [
  "karachi kings",
  "lahore qalandar",
  "multan sultan",
  "Islamabad united",
  "quetta gladiators",
];
var userInp = prompt("Enter your city name");
var i;
var flag = false;
for (i = 0; i < pslTeams.length; i++) {
  if (pslTeams[i].includes(userInp)) {
    flag = true;
    alert("your city participated as " + pslTeams[i]);
    break;
  }
  console.log(pslTeams[i]);
}
if (!flag) {
  alert("your city not qualified for psl");
}      

var pslteam = [
  "karachi king",
  "lahore qalandar",
  "multan sultan",
  "islamabad united",
  "quetta gladiators",
];
var userInp = prompt("Enter your city name");
var i;
for (i=0; i<pslteam.length; i++){

}

for (var i = 0; i <= 5; i++) {
    for (var j = 10; j < 15; j++) {
      console.log(i, j);
    }
  }

var i = 1;
while (i <= 5) {
  alert(i);
  i++;
}


var targetNum = Math.floor(Math.random() * 10) + 1;

var userInp = parseInt(prompt("Guess the number"));
if (!userInp) {
  alert("invalid input");
}
while (userInp != targetNum) {
  userInp = parseInt(prompt("Wrong Guess the number again"));
  if (userInp === targetNum) {
    alert("congrats you win a Rooh afza");
    break;
  }
  console.log(userInp, targetNum);
}



var userinp = prompt('Enter your city');
var arr = ['karachi','lahore','islamabad','peshawar','multan'];
var flag = false;
var i;
for (i=0; i < arr.length; i++){
    // console.log(arr[i]);
    if(arr[i].includes(userinp)){
        flag = true;
        break;
    }
}
if (flag){
    console.log('Mil gya');
}else{
    console.log('Nhi mila');
}
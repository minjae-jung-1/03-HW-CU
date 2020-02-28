// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var len = prompt("How many characters do you want in your password?")
  var sp = confirm("Do you want special characters?")
  var uC = confirm("Do you want uppercase letters?")
  var pool = ["a",'1',"b","!", "c",'7',"~", "d",'4',"~", "e", "#","f", "g",'9', "h", "$","i","?", "j", "k",'2', "l", "m", "^","n", '5',"o", "p",
  "q", "&","r",'6', "s","@", "t", '*',"u",'8',"?", "v", "w",'3', "x", "y", "z"]
  var ogpool= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var newPass =[];
  var ind = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
    let flag = false;
    let count = 0;
    for(let i=0; i < len; i++){
      newPass.push(pool[Math.round(Math.random()*pool.length)])
      if(ogpool.includes(newPass[i])){
        ind.push(i)
        count++
        flag = true;
      }
    }
    
    
    
    if(flag == true){
      newPass.splice(ind[Math.round(Math.random()*ind.length)-1],1,ogpool[Math.round(Math.random()*ind.length)-1].toUpperCase())
    }
    newPass = newPass.join("")
    console.log(count)
    console.log(flag)
    return newPass

   
 
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







 // var auto = confirm("Auto Gen a Pass? (meets all criteria)")
  // var charsz= prompt("How many characters do u want? (btwn 8-128)");
  // var spc = confirm("Do you want special characters");
  // var uC = (prompt("Please input upperCase")).split("")

  // console.log(uC)
  // var x= [];
  // for(let i=0; i< +charsz; i++ ){
  //   let rand= Math.floor(Math.random()*charsz)

  //   console.log(rand)
   
  //   x.push(uC[rand*uC.length])
   
  // }
  // console.log(x)
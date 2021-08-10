
btnCheckTglVar=document.querySelector('#buttonchecktriangle');
btnguessTglVar=document.querySelector('#buttonguesstriangle');
btnguessTglVarPlayAgain=document.querySelector('#buttonplayagain');
btnhypoVar=document.querySelector('#btnhypo');
radioguessTgtVar=document.querySelectorAll('#answer');
angle1Var=document.querySelector("#angle1");
angle2Var=document.querySelector("#angle2");
angle3Var=document.querySelector("#angle3");
displayVar=document.querySelector(".display");
btnareaVar=document.querySelector("#btnarea");

const MaxQues=10;
btnguessangleVar=document.querySelector('#guessangle');
btntrianglequizVar=document.querySelector('#btntrianglequiz');

var sumOfAngles;
var showOutputMsg='';

if(btnCheckTglVar)
{
btnCheckTglVar.addEventListener("click",checkTriangle);
}
else if(btnguessTglVar)
{
btnguessTglVar.addEventListener("click",guessTriangle);
}
else if(btnguessangleVar)
{
btnguessangleVar.addEventListener("click",guessAngle);    
}
else if(btntrianglequizVar)
{
    btntrianglequizVar.addEventListener("click",triangleQuiz);
}
else if(btnhypoVar)
{
    btnhypoVar.addEventListener("click",checkHypo);
}
else if(btnareaVar)
{
    btnareaVar.addEventListener("click",checkArea);
}

function checkArea()
{
    
    side1=document.querySelector("#side1");
    side2=document.querySelector("#side2");
    side3=document.querySelector("#side3");
    console.log("clicked"+side1.value);
    if((side1.value)&&(side2.value)&&(side3.value))
    {
        semipm=(eval(side1.value)+eval(side2.value)+eval(side3.value))/2;
        console.log(semipm)
        area=Math.sqrt(semipm*(semipm-eval(side1.value))*(semipm-eval(side2.value))*(semipm-eval(side3.value)));
        console.log(area);
        showOutputMsg="Area is "+Math.round(area*100)/100 + " cm<sup>2</sup>";
        displayOutput();
    }
    else{
        console.log("Please enter all fields");
        showOutputMsg="Please enter all fields";
displayOutput();
    }
}
function checkHypo()
{
    baseVar=document.querySelector("#base");
    altitudeVar=document.querySelector("#altitude");
    console.log("clicked");
    console.log(baseVar.value+altitudeVar.value)
    result=Math.sqrt(Math.pow(baseVar.value,2) +  Math.pow(altitudeVar.value,2));
    showOutputMsg="The hypotenuse is " + result;
    displayOutput();
}
function triangleQuiz()
{
    var i=0;
    var score=0
    var usr_answrs=[];
    var results=["b","c","a","b","c","b","b","a","c","b"];
    outputTxt= document.querySelectorAll('.radiobtn');
    //outputTxt.innerText=1;
    //console.log(outputTxt);
    [].forEach.call(outputTxt, function(div) {
  //console.log(div);
  if(outputTxt[i].checked){
    //console.log(outputTxt[i].value);
    usr_answrs.push(outputTxt[i].value);
  }
  
  i=i+1;
});
if(usr_answrs.length==MaxQues)
{
    for (let index = 0; index < usr_answrs.length; index++) {
        if(usr_answrs[index]==results[index])
        {
            console.log("right");
            score=score+1;
            document.querySelector("#ans"+ CSS.escape(index+1) +" ").style.backgroundColor = "green";
        }
        else
        {
            document.querySelector("#ans"+ CSS.escape(index+1) +" ").style.backgroundColor = "red";
            console.log("wrong")
        }
        
    }
showOutputMsg="Your score is " + score;
displayOutput();
}


else{
    console.log("Please answer all quesions");
    showOutputMsg="Please answer all quesions";
    displayOutput();
}
}
function guessAngle()
{
    console.log("clicked" + angle1Var.value + angle2Var.value + angle3Var.value)
thirdangle=180-(eval(angle1Var.value) + eval(angle2Var.value));

   if(angle3Var.value==thirdangle)
   {
    showOutputMsg="Right..Third angle is " + thirdangle;
   }
   else
   {
    showOutputMsg="Wrong..Third angle is " + thirdangle;
   }
   displayOutput();
}
/*************************************************************** */
function checkTriangle()
{
console.log("clicked" + angle1Var.value + angle2Var.value + angle3Var.value)
sumOfAngles=eval(angle1Var.value) + eval(angle2Var.value) + eval(angle3Var.value);
console.log(sumOfAngles);
if (sumOfAngles==180) {
    console.log("Hurray, This is a triangle");
    showOutputMsg="Hurray, This is a triangle...";
}
else if((angle1Var.value=='') || (angle2Var.value=='') || (angle3Var.value==''))
{
    console.log("Please fill all details");
    showOutputMsg="Please fill all details...";
}
else{
    console.log("Sorry, This is not a triangle");
    showOutputMsg="Sorry, This is not a triangle. Sum of the angles of a triangle should be 180deg"

}
displayOutput();
    
}
/*************************************************************** */
function guessTriangle()
{

    flag=0;
    for(i = 0; i < radioguessTgtVar.length; i++) {
        console.log(radioguessTgtVar[i].checked)
        if(radioguessTgtVar[i].checked)
        {
           userselectedtype= radioguessTgtVar[i].value;
           console.log('here'+userselectedtype)
          flag=1;
          break;
        }
    }
    if (flag==1){
    var type;
    var angles=[angle1Var.value,angle2Var.value,angle3Var.value];
    console.log(angles);
    console.log(angles.length);
   for(element=0;element<angles.length;element=element+1) {
       console.log('angles[element]'+angles[element]);
        if (angles[element]==90)
        {
            type="right";
            found=1;
            break;
        }
        else if(angles[element]>90)
        {
            type="obtuse";
            found=1;
            break;
            
        }
        else{
            type="acute";
        }
       

    }   ;

  console.log('type'+type);
    console.log('usertype'+userselectedtype);

    if(type===userselectedtype){
    showOutputMsg="Right. This is "+ type + " triangle !!. <br>An acute triangle is a triangle whose all the three interior angles are acute. <br>  Obtuse triangles are those in which one of the three interior angles has a measure greater than 90 degrees.<br> A right triangle is a triangle in which one of the angles is 90 degrees. ";   
    }
    else{
        showOutputMsg="Wrong. This is "+ type + " triangle !!. <br>An acute triangle is a triangle whose all the three interior angles are acute. <br>  Obtuse triangles are those in which one of the three interior angles has a measure greater than 90 degrees.<br> A right triangle is a triangle in which one of the angles is 90 degrees. ";   
    
    }
 }
else
{

    showOutputMsg="Please select a type";
}
console.log(showOutputMsg);
    displayOutput();
}


/*************************************************************** */
function displayOutput(){
    document.querySelector('.display').innerHTML = showOutputMsg;
}
/*************************************************************** */
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
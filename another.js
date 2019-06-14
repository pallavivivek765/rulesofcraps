<html>
<head><title></title>
<script type=text/javascript>

var dice=new Array('1','2','3','4','5','6');
var FirstRoll='yes';
var myPoint='';
RollPoint='';
function craps(){
var roll1 = Math.floor(Math.random()*dice.length);
var roll2 = Math.floor(Math.random()*dice.length);
if(FirstRoll=='yes'){
myPoint = dice[roll1]-(-dice[roll2]);
RollPoint=myPoint;checkRoll();FirstRoll='no';
document.getElementById('myP').innerHTML=myPoint;
}else{
RollPoint = dice[roll1]-(-dice[roll2]);
checkRoll();
}
}

function checkRoll(){
document.getElementById('CP').innerHTML=RollPoint;
if(FirstRoll=='no' && myPoint==RollPoint){alert("you win!");FirstRoll='yes';}
if(FirstRoll=='no' && RollPoint=='7'){alert("you lose....");FirstRoll='yes';}
if(myPoint=='7' || myPoint=='11'){alert("you win!");FirstRoll='yes';}
if(myPoint=='2' || myPoint=='3'){alert('you lose....');FirstRoll='yes';}


}

</script>
</head>
<body>
<input type=button value="roll dice" onclick="craps();"><br>
first roll:<span id=myP></span><br>
subsequent roll:<span id=CP></span>
</body>
</html>
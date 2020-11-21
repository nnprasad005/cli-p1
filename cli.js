var readlineSync=require("readline-sync");
var highscorers=[{
  name:"nagendra",
  score:3,
},{
  name:"karthik",
  score:2,
}];

function qna(qnobj){
var userans=readlineSync.question(qnobj.question);
if(userans===qnobj.answer){
 
  score=score+1;
  console.log("right")
}
else{
score=score;
console.log("wrong")
}
}

score=0;

qnobj=[{question:"what is Nagendra's age ? ",
answer:"22"},
{question:"is Nagendra working ? ",
answer:"yes",},
{question:"is nagendra married? ",
answer:"no",},
{question:"does he have any siblings? ",
answer:"yes",}
]
console.log
for(i=0;i<4;i++){
  var currentq=
  qna(qnobj[i]);
  
}
for(var j=0;j<2;j++){
if(score>highscorers[j].score){
  if(j==0){
 console.log("you are the highest");
 break;
}
else{
  console.log("you have beaten the second highest");
}
}
}
console.log("yourscore="+score)


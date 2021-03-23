var images=["father.PNG","mother.PNG","bedantika.jpg","Bihan.PNG","Kaku.PNG","Kakimoni.PNG"];
var names=["Biplab Kumar Roy","Kalpana Roy","Bedantika Roy","Bihan Roy","Biman Roy","Ritubarna Roy"];
var i=0;
function next_image(){
document.getElementById("reason_text").innerHTML=names[i];
document.getElementById("album").src=images[i];
  i++;
}
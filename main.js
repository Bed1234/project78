var images=["father.PNG","mother.PNG","bedantika.jpg","Bihan.PNG","Kaku.PNG","Kakimoni.PNG"];
var names=["He is Biplab Kumar Roy.He is my father.","She is my mother kalpana Roy.","This is me Bedantika Roy.","He is my brother Bihan Roy.","He is Biman Roy my uncle.","She is Ritubarna Roy my aunt."];
var i=0;
function next_image(){
document.getElementById("reason_text").innerHTML=names[i];
document.getElementById("album").src=images[i];
  i++;
}
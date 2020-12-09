let index= 1;
function my(){
  index++;
  if(index==11){
    index=1;
  }
  let picture= 'img ('+index+').jpg';
  document.getElementById('laptop').src=picture;
}

setInterval(function(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let colors= "background: rgb("+r+","+g+","+b+");" ;
  let background= document.getElementById("outer");
  background.style= colors;
},400);

setInterval(function(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let colors= "background: rgb("+r+","+g+","+b+");" ;
  let background= document.getElementById("inner");
  background.style= colors;
},800);

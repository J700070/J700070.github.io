var myIndex = Math.floor(Math.random() * 10);;

function changePhoto(tag) {
  var i;
  var x = document.getElementsByClassName(tag);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
}

//home page tabs feature
function openThing(event, ThingName) {
var i, content, tabs;
content = document.getElementsByClassName("content");
for (i = 0; i < content.length; i++) {
content[i].style.display = "none";
}
tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  document.getElementById(ThingName).style.display = "block";
  evt.currentTarget.className += " active";
//search bar feature
$.searchy({
    url: "http://suggestqueries.google.com/complete/search",
    dataType: "jsonp",
    data: {
        client: "chrome",
        q: "Query"
    }
}).done(function(data){
    console.log(data);
});
//text input/comment function
function userPage(){
  var NAME="x";
  x=document.getElementById("in").value;
  document.getElementById("user").innerHTML=x;
}
//Could not get every function in here that I wanted but still this gets the job done!
// Counter
 
const counters=document.querySelectorAll(".counter");
 
counters.forEach(counter=>{
 
const update=()=>{
 
const target=+counter.dataset.target;
 
const count=+counter.innerText;
 
const inc=target/150;
 
if(count<target){
 
counter.innerText=Math.ceil(count+inc);
 
setTimeout(update,15);
 
}else{
 
counter.innerText=target+"+";
 
}
 
};
 
update();
 
});
 
 
// Scroll To Top
 
const topBtn=document.getElementById("topBtn");
 
window.onscroll=function(){
 
if(document.documentElement.scrollTop>500){
 
topBtn.style.display="block";
 
}else{
 
topBtn.style.display="none";
 
}
 
}
 
topBtn.onclick=function(){
 
window.scrollTo({
 
top:0,
 
behavior:"smooth"
 
});
 
}
 

 function timing(){
     
 const timer = document.getElementById('root');
 const now = new Date();
 const IndianTime = now.toLocaleTimeString();
 timer.innerHTML = IndianTime;
 timer.style.fontSize = "100px"
 timer.style.color ="pink";
 timer.style.display = "flex";
 timer.style.justifyContent = "center"
 timer.style.height = "100vh"
 timer.style.alignItems = "center"
 timer.style.backgroundColor = "black"
 

 }
//  setInterval(timing,1000);

 timing();

 
 
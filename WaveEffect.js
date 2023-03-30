var style = document.createElement('style');
style.type = 'text/css';
var wavebox = document.querySelector(".wavebox");
var wavepiece = document.querySelectorAll(".wavepiece");
var input = document.querySelector('.textForChange')
function textchange() {
  var text = input.value;
  console.log(text);
  if(text.length == 0){
    console.log("tqven araferi ar dagiweriat");
  }
  else if(text.length != 0){
    wavebox.innerHTML = "";
    for(var i = 0; i<text.length; i++ ){
      var calkeaso = text.slice(i,i+1);
      if(calkeaso != " "){
      wavebox.innerHTML += "<span class =\"wavepiece\">"+ calkeaso +"</span>";
      }
      else if(calkeaso == " "){
        wavebox.innerHTML += "<span class =\"wavepiece\">⠀​</span>";

      }
    }
  }
}
function WaveEffect(TextBox, WaveHeight,WaveSpeed,WaveAnimSpeed) {
  var keyFrames = `
  @keyframes animacia {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: ${WaveHeight}px;
    }
  }
  .animacia {
    animation-name: animacia;
    animation-duration: ${WaveSpeed}s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }`;  
  document.head.appendChild(style);
  style.innerHTML += keyFrames;
  
  function ReadyTextToWave() {
    var text = TextBox.innerText;
    console.log(text);
    if(text.length == 0){
      console.log("tqven araferi ar dagiweriat");
    }
    else if(text.length != 0){
      TextBox.innerHTML = "";
      for(var i = 0; i<text.length; i++ ){
        var calkeaso = text.slice(i,i+1);
        if(calkeaso != " "){
        TextBox.innerHTML += "<span class =\"wavepiece\">"+ calkeaso +"</span>";
        }
        else if(calkeaso == " "){
          TextBox.innerHTML += "<span class =\"wavepiece\">⠀​</span>";
  
        }
      }
    }
  }
  ReadyTextToWave();
  function waveboxstart() {
    var wavepiece = document.querySelectorAll(".wavepiece");
    wavepiece.forEach(function(el, index){
      setTimeout(function(){
        el.style.position = "relative";
        el.classList.add(`animacia`);
      }, index * WaveAnimSpeed)
    })
  }
  waveboxstart();
}
WaveEffect(wavebox, 200 , 1 , 100);
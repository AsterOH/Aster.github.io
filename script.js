
let waveText = document.querySelector(".waveText");

WaveEffect(waveText, 200 , 2 , 100);

let mode = 0;
addEventListener("click" ,() =>{
    if (mode == 0) {
        WaveEffect(waveText, 300 , 1 , 100);
        mode = 1;
    }
    else if (mode == 1) {
        WaveEffect(waveText, 100 , 1 , 200);
        mode = 2;
    }
    else if(mode == 2){
        WaveEffect(waveText, 200 , 2 , 100);
        mode = 3;
    }
    else if(mode == 3){
        WaveEffect(waveText, 150 , 0.5 , 100);
        mode = 0;
    }
})
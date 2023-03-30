let planets = document.querySelectorAll(".planets");
let M = 167;
let V = 200;
let E = 300;
let Moon = 0;
let J = 60;
let S = 100;
let U = 150;
let N = 10;
let MadeInHeaven = false;
let TimeSpeed = 1;
let TheWorld = false;

setInterval(() => {
    if (MadeInHeaven) {
        TimeSpeed *=  1.1
    }else{
        TimeSpeed = 1;

        if (!TheWorld) {
            TimeSpeed = 1;
        }
    }
}, 1000);
addEventListener("keydown",(e)=>{
    if (e.key == "m") {
        MadeInHeaven = !MadeInHeaven
        TimeSpeed = 1.1;
    }
    if (e.key == "t") {
        if (TheWorld) {
            TimeSpeed = 0;
        }
        else{
            TimeSpeed = 1;

        }
        TheWorld = !TheWorld
        TimeSpeed = 0;

    }

})

setInterval(() => {
    M += 0.3 * TimeSpeed;
    planets[0].style.transform =`rotateZ(${M}deg)`;
    V -= 0.2 * TimeSpeed;
    planets[1].style.transform =`rotateZ(${V}deg)`;
    E += 0.15 * TimeSpeed;
    planets[2].style.transform =`rotateZ(${E}deg)`;
    Moon += 0.1 * TimeSpeed;
    planets[3].style.transform =`rotateZ(${Moon}deg)`;
    J += 0.05 * TimeSpeed;
    planets[4].style.transform =`rotateZ(${J}deg)`;
    S += 0.02 * TimeSpeed;
    planets[5].style.transform =`rotateZ(${S}deg)`;
    U += 0.01 * TimeSpeed;
    planets[6].style.transform =`rotateZ(${U}deg)`;
    N += 0.005 * TimeSpeed;
    planets[7].style.transform =`rotateZ(${N}deg)`;
}, (1000/60));


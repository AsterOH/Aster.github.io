var Imgs = document.querySelectorAll(".RockPaperScisorsImg");
console.log(Imgs);
var EnemyImg = document.querySelector(".EnemyImg");
var PlayerPoints = document.querySelector(".PlayerPoints");
var playerPointsCounter = 0;
var EnemyPointsCounter = 0;
var EnemyPoints = document.querySelector(".EnemyPoints");
var Winner = document.querySelector(".Winner");
var PlayerImg = document.querySelector(".PlayerImg");
addEventListener("load",()=>{
    EnemyImg.src = "Rock.png"
    EnemyImg.style.transform = "scaleX(1)";
    PlayerImg.src = "Rock.png";
    PlayerImg.style.transform = "scaleX(-1)";
});

function RockPaperScisors(e){
    var random = Math.floor(Math.random() * 3 + 1);
    var player = e.target.alt;
    console.log("shen amoirchie: "+player)
    if (random == 1) {
        var enemy = 'Rock';
        EnemyImg.src = "Rock.png"
        EnemyImg.style.transform = "scaleX(1)";

    } else if (random == 2) {
        var enemy = 'Paper';
        EnemyImg.src = "Paper.png"
        EnemyImg.style.transform = "scaleX(-1)";
    } else if (random == 3) {
        var enemy = 'Scisors';
        EnemyImg.src = "Scisors.png"
        EnemyImg.style.transform = "scaleX(-1)";
    }
    console.log("enemy: "+enemy);
    if (player == 'Rock') {
        PlayerImg.src = "Rock.png";
        PlayerImg.style.transform = "scaleX(-1)";
        if(enemy == "Rock"){
            Winner.innerHTML = "Nobody Wins";
        }
        else if(enemy == "Paper"){
            EnemyPointsCounter++
            Winner.innerHTML = "Enemy Wins";
        }
        else if(enemy == "Scisors"){
            playerPointsCounter++
            Winner.innerHTML = "Player Wins";
        }
    } else if (player == 'Paper') {
        PlayerImg.src = "Paper.png";
        PlayerImg.style.transform = "scaleX(1)";
        if(enemy == "Rock"){
            playerPointsCounter++
            Winner.innerHTML = "Player Wins";
        }
        else if(enemy == "Paper"){
            Winner.innerHTML = "Nobody Wins";

        }
        else if(enemy == "Scisors"){
            EnemyPointsCounter++
            Winner.innerHTML = "Enemy Wins";
        }    
    } else if (player == 'Scisors') {
        PlayerImg.src = "Scisors.png";
        PlayerImg.style.transform = "scaleX(1)";
        if(enemy == "Rock"){
            EnemyPointsCounter++
            Winner.innerHTML = "Enemy Wins";
        }
        else if(enemy == "Paper"){
            playerPointsCounter++
            Winner.innerHTML = "Player Wins";
        }
        else if(enemy == "Scisors"){
            Winner.innerHTML = "Nobody Wins";

        }
    }
    PlayerPoints.innerHTML = `Your Points: ${playerPointsCounter} `;
    EnemyPoints.innerHTML = `Enemy Points: ${EnemyPointsCounter} `;

};

Imgs.forEach(element => {
    element.addEventListener("click", RockPaperScisors)
});

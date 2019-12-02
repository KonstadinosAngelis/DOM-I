let startButton = document.getElementById("start");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let secondOnes = document.getElementById("secondOnes");
let secondTens = document.getElementById("secondTens");


function add() {
    msHundreds++;
    if (msHundreds >= 9){
        msHundreds = 0;
        msTens++;
        if (msTens >= 9){
            msTens = 0;
            secondOnes++;
            if(secondOnes >=9){
                secondOnes = 0;
                secondTens++;
            }
        }
    }
}

const timer = function(){
    msTens.textContent = "heyo"
    console.log(msTens)
}



function startGame(){
    var previousGame = document.getElementsByTagName("p")[0];
    if(previousGame){
        previousGame.remove();
    }
    const gameText = document.getElementById("game-text");
    let text = document.createElement("p");
    text.innerHTML = "Game Started</br>";
    gameText.append(text);
    const petrolPumps = [];
    function assignPetrolPumps(){
        for( let i = 0;i <= 6;i++){
            petrolPumps[i] = Math.floor((Math.random()*100)+1);
        }
    }
    assignPetrolPumps();
    function hasDuplicates(arr){
        return new Set(arr).size !== arr.length;
    }
    while(hasDuplicates(petrolPumps)){
        assignPetrolPumps();
    }
    petrolPumps.sort(function(a,b){
        return a-b;
    });
    text.innerHTML = text.innerHTML + `Petrol pumps generated at ${petrolPumps[0]} ${petrolPumps[1]} ${petrolPumps[2]} ${petrolPumps[3]} ${petrolPumps[4]} ${petrolPumps[5]}</br>`;
    gameText.append(text);
    var petrol = 50;
    let moves = 0;
    var car = 0;
    while(car<100){
        var dis = Math.round((Math.random()*6)+1);
        car = car + dis;
        petrol = petrol - (dis * 2);
        if(petrol < 0){
            petrol = 0;
        }
        switch(car){
            case petrolPumps[0]: 
            petrol += 30;
            break;
            case petrolPumps[1]: 
            petrol += 30;
            break;
            case petrolPumps[2]: 
            petrol += 30;
            break;
            case petrolPumps[3]: 
            petrol += 30;
            break;
            case petrolPumps[4]: 
            petrol += 30;
            break;
            case petrolPumps[5]: 
            petrol += 30;
            break;
            default: 
            break;
        }
        text.innerHTML = text.innerHTML + `Move ${++moves} - car at ${car}, petrol remaining ${parseInt(petrol)}</br>`;
        if(petrol <= 0){
            text.innerHTML = text.innerHTML + "Game Over.";
            break;
        }
        if(car>100){
            text.innerHTML = text.innerHTML + "You Win";
            break;
        }
    }
}
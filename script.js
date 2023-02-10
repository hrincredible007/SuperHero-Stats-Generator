console.log('SuperHero Application');
let finalUrl = "https://www.superheroapi.com/api.php/1540676549762582/";
let totalHeroes = 731;

let heroName = document.getElementById('heroName');
let heroImage = document.getElementById('heroImg');
let heroIntelligence = document.getElementById('heroIntell');
let heroStrength = document.getElementById('heroStren');
let heroDurability = document.getElementById('heroDura');
let heroSpeed = document.getElementById('heroSp');
let heroPower = document.getElementById('heroPow');
let heroCombat = document.getElementById('heroComb');
let getRandomHeroButton = document.getElementById('getRandHero');
let heroSearchInput = document.getElementById('heroSearch');
let getParticularHeroButton = document.getElementById('getParticularHero');

// let input = prompt("Enter the superHero Id..");

let result = (input) => {
    let url = finalUrl+ input;
    console.log(url);
    fetch(url).then(response => response.json()).then(json =>{
        console.log(json);
        console.log(json.name);
        heroName.innerHTML = `<h2>${json.name}</h2>`;
        heroImage.innerHTML = `<img src = "${json.image.url}" height = 300 width = 300/>`
        displayPowerStats(json.powerstats);
    });
}



let getRandomHero = () =>{
    return 1+ Math.floor(Math.random()* totalHeroes);
}
getRandomHeroButton.onclick = () => result(getRandomHero());


getParticularHeroButton.onclick = () =>{

    let url = finalUrl+'search/'+ heroSearchInput.value;
    console.log(url);
    heroSearchInput.value = '';
    fetch(url).then(response => response.json()).then(json =>{
        console.log(json);
        heroName.innerHTML = `<h2>${json.results[0].name}</h2>`;
        console.log(json.results[0].id);

        heroImage.innerHTML = `<img src = "${json.results[0].image.url}" height = 300 width = 300/>`
        displayPowerStats(json.results[0].powerstats);
    });
}


displayPowerStats = (message) =>{
     for(particularStats in message){
        console.log(particularStats+" : "+(message[particularStats] == null?0: message[particularStats]));
        let val = message[particularStats] == 'null' ? 0: message[particularStats];
        if(particularStats == 'intelligence'){
            heroIntelligence.innerHTML = `<p><b>Intelligence : ${val}</b></p>`
        }
        else if(particularStats == 'strength'){
            heroStrength.innerHTML = `<p><b>Strength : ${val}</b></p>`
        }
        else if(particularStats == 'speed'){
            heroSpeed.innerHTML = `<p><b>Speed : ${val}</b></p>`
        }
        else if(particularStats == 'durability'){
            heroDurability.innerHTML = `<p><b>Durability : ${val}</b></p>`
        }
        else if(particularStats == 'power'){
            heroPower.innerHTML = `<p><b>Power : ${val}</b></p>`
        }
        else if(particularStats == 'combat'){
            heroCombat.innerHTML = `<p><b>Combat : ${val}</b></p>`
        }

     }

}
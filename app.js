// koppla js til HTML
const clock = document.querySelector('.klocka');
const goHomeH1 = document.querySelector('.go-home');


// Räkna ut tiden
function time () {
    // är logiken för att beräkna tiden. :)
    const currentTime = new Date();
    let hours = currentTime.getHours(); // en metod är en funktion i en objekt.
    
    // Om efter 17
    if(hours === 17) {
        goHomeH1.innerHTML = 'Dags att dra.';
    }

    // hämta minuter sekunder och kombinera till ett läsbart sätt.
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let time = `<strong>The time is ${hours}:${minutes}:${seconds}</strong>`; // String interpolation. KISS
    
    clock.innerHTML = time;    
};

setInterval(() => {
    time();
}, 1000);




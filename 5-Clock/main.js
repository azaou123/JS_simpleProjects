setInterval (setClock , 1000) ; 
function setRotation(element , rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360) ;
}
function setClock (){
    const hourHand = document.getElementById('data-hour-hand');
    const minuteHand = document.getElementById('data-minute-hand');
    const secondHand = document.getElementById('data-second-hand') ;
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60 ;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 ;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 ;
    setRotation(secondHand,secondsRatio) ;
    setRotation(minuteHand,minutesRatio) ;
    setRotation(hourHand,hoursRatio) ;
}
setClock() ;
var treasureLocation = Math.floor(Math.random() * 9)
    var bombLocation = Math.floor(Math.random() * 9)

const treasure = (location) => {
   if(location === treasureLocation){
        document.getElementById(treasureLocation).innerHTML = "&#x1f332"
   } else if(location === bombLocation){
   document.getElementById(bombLocation).
   innerHTML = "&#x2620"
} else {
    document.getElementById(location).innerHTML = "&#x1f308"
}
}
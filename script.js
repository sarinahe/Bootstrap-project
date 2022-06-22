
window.setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();





  document.getElementsByClassName('clock')[0].innerHTML = hours + ":" + minutes + ":" + seconds
})


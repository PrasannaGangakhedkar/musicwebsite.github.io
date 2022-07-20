var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");


icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src= "file:///D:/my%20first%20web/pause.png";
    } else{
        mySong.pause();
        icon.src= "file:///D:/my%20first%20web/play.png";
    }

}
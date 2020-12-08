console.log("we are connected")
var collection=[
    {song:"blinding lights",
        writer:"The Weeknd",
        music:"music/lights.mp3",
        image:"images/blindinglight.jpg"
    },
    {
        song:"Sunflower",
        writer:"Post Malone & Swaee Lee",
        music:"music/sunflower.mp3",
        image:"images/sunlower.jpg"
    },
    {
        song:"Sunset lover",
        writer:"Petit Biscuit",
        music:"music/sunset.mp3",
        image:"images/sunsetlov.jpg"
    },
    {
        song:"Memories",
        writer:"Maroon 5",
        music:"music/memories.mp3",
        image:"images/memories.jpg"
    },
    {
        song:"Liggi",
        writer:"Ritviz",
        music:"music/liggi.mp3",
        image:"images/uddgaye.jpg"
    },
    {
        song:"Rockstar",
        writer:"Dababy feet seven kitchen",
        music:"music/rockstar.mp3",
        image:"images/dababy.jpg"
    },
    {
        song:"Tumse mil ke",
        writer:"Sonu Nigam",
        music:"music/tumse.mp3",
        image:"images/tumse.jpg"
    },
    {
        song:"Circles",
        writer:"Post Malone",
        music:"music/circles.mp3",
        image:"images/circles.jpg"
    },
    {
        song:"Arms Around You",
        writer:"XXXtenaction ,swae lee,Maluma",
        music:"music/aroundyou.mp3",
        image:"images/armsaroun.png"
    },
   
    {
        song:"Bellyache",
        writer:"Billie Eilish",
        music:"music/bellyache.mp3",
        image:"images/bellyache.jpg"
    },
    {
        song:"Free Tibet",
        writer:"Eric Pyrdz",
        music:"music/free tibet.mp3",
        image:"images/free tibet.jpg"
    },
    {
        song:"indian summer",
        writer:"jai wolf",
        music:"music/indian summer.mp3",
        image:"images/indian summer.jpg"
    },
    {
        song:"Somebody else",
        writer:"The 1975",
        music:"music/somebodyelse.mp3",
        image:"images/somebodyelse.jpg"
    },
   
    {
        song:"Lemonade",
        writer:"Internet Money Feet lemonade",
        music:"music/lemonade.mp3",
        image:"images/lemonade.jpg"
    },
    {
        song:"Opus",
        writer:"Eric Pyrdz",
        music:"music/opus.mp3",
        image:"images/opus.jpg"
    },
    {
        song:"took a pill in Ibiza",
        writer:"Mike Ponser",
        music:"music/ibiza.mp3",
        image:"images/ibiza.jpg"
    },
    {
        song:"Unforgetable",
        writer:"French motana feat Swae Lee",
        music:"music/unforgetable.mp3",
        image:"images/unforgetable.jpg"
    }
]
var length=collection.length;
console.log(length);
var heading=document.getElementById("heading");
var prev=document.getElementById("prev")
var pause=document.getElementById("pause")
var next=document.getElementById("next")
var audio=document.getElementById("auido")
var img=document.getElementById("image")
var writer=document.getElementById("writer")
var hrts=document.getElementById("heart")
var song_index=0;

function nexts(){
    if(song_index==length-1){
        song_index=0;
        play();
    }
    else{
        song_index++;
        play();
    }

}
function prevs(){

    if(song_index==0){
        song_index=length-1;
        play();
    }
    else{
        song_index--;
    play();
}
    }

    var playing=false;
    
function play(){
    if(!playing){
        pause.classList.replace("fa-play-circle","fa-music")
        heading.innerHTML=collection[song_index].song;
    writer.innerHTML=collection[song_index].writer;
        img.src=collection[song_index].image;
        audio.src=collection[song_index].music;
        playing=true;
    audio.play();
    }
    else{
        pause.classList.replace("fa-music","fa-play-circle")
        playing=false;
        audio.pause();
    }
   
}
var heart_color=false;

function hearts(){
    if(!heart_color){
        hrts.style.color="red";
        heart_color=true;
    }else{
        hrts.style.color="cyan";
        heart_color=false;
       
    }
}

























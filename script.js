console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementById('songItem')

let songs = [
   {songName: "Yeh Ishq Hai", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
   {songName: "Doechii-What it is", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
   {songName: "Harleys in Hawaii", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
   {songName: "Kuch Toh hai", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
   {songName: "Malang Sajna", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
   {songName: "Meri Jaan", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
   {songName: "O Re Piya", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
   {songName: "Thoda Thoda Pyar", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"},
   {songName: "Undar the Influence", filePath: "songs/9.mp3", coverPath: "cover/9.jpg"},
   {songName: "Waalian", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"},
]

songItems.foreach((element)=>{
   element.getElementsByTagName()

})
 
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click' ,()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
   } 
   else{
      audioElement.pause();
      masterPlay.classList.add('fa-play-circle');
      masterPlay.classList.remove('fa-pause-circle');
      gif.style.opacity = 0;
   }
})
// Listen To Events
audioElement.addEventListener('timeupdate' , ()=>{
   // Update Seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


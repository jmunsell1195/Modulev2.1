let clicks = 0;
const start = Date.now();
let answer;

document.onclick = function(){
  clicks += 1;
}


/* 
###########################################
#                                         #
#                                         #
#     Box-Sizing based on Screen Size     #
#                                         #
#                                         #
###########################################
*/

// Set the width and height so it doesn't resize with the window
document.querySelector("#cs0").style.width = String(0.85*w) + "px";
document.querySelector("#cs0").style.height = String(0.675*h) + "px";
document.querySelector("#cs1").style.width = String(0.85*w) + "px";
document.querySelector("#cs1").style.height = String(0.675*h) + "px";
document.querySelector("#cs2").style.width = String(0.85*w) + "px";
document.querySelector("#cs2").style.height = String(0.675*h) + "px";
document.querySelector("#cs3").style.width = String(0.85*w) + "px";
document.querySelector("#cs3").style.height = String(0.675*h) + "px";
document.querySelector("#question").style.width = String(0.85*w) + "px";
document.querySelector("#question").style.height = String(0.675*h) + "px";

// Pause Video if frame is closed while video is playing
const pause1 = () => {
  document.querySelector("#audio").pause();
}

const pause2 = () => {
  document.querySelector("#audio2").pause();
}

const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

/* 
###########################################
#                                         #
#     Functions to Control Display        #
#             of Elements                 #
#                                         #
###########################################
*/

// function frame0: true -> show, false-> hide
const frame0 = (show) => {
  if (show) {

    document.querySelector("#cs0").style.display = "grid";

    $("#btn1").on("click",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio") 
      document.querySelector("#audio-events").event.value = "frame 0 to frame 1";
      document.querySelector("#audio-events").videoNumber.value = "0";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = "0";
      $("#audio-events").triggerHandler("submit")})

  }
  else {

    document.querySelector("#cs0").style.display = "none";
  }
}

// function frame1: true -> show, false-> hide, clearInterval
const frame1 = (show) => {
  if (show){

    document.querySelector("#cs1").style.display = "grid";
    const audio = document.querySelector("#audio");

    $("#btn2").on("click",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio") 
      document.querySelector("#audio-events").event.value = "frame 1 to frame 0";
      document.querySelector("#audio-events").videoNumber.value = "0";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = "0";
      $("#audio-events").triggerHandler("submit")})
    
    $("#btn3").on("click",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio") 
      document.querySelector("#audio-events").event.value = "frame 1 to frame 2";
      document.querySelector("#audio-events").videoNumber.value = "0";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = "0";
      $("#audio-events").triggerHandler("submit")})



    //Define anime.js timeline to sync animation with audio
    const tl = anime.timeline({
   easing: 'linear',
   autoplay: false,
  });
  tl.add({
    targets: "#level2",
    translateY: -7*size,
  },9000)
  tl.add({
    targets: "#level3",
    translateY: -4*size,
  },9000)
  tl.add({
    targets: "#thermo,#grad,#level,#level2,#level3",
    opacity: 1
  },9000)
  tl.add({
    targets: "#level,#level2,#level3",
    opacity: 0,
  },13000)
  tl.add({
    targets: "#thermo,#grad",
    opacity: 0,
  },13000)
  tl.add({
    targets: "#watch,#sec-hand",
    opacity: 1
  },14000)
  tl.add({
    targets: "#sec-hand",
    rotate: 360,
    duration: 60000,
  },14000)
  tl.add({
    targets: "#watch,#sec-hand",
    opacity: 0
  },22000)
  tl.add({
    targets: "#map",
    opacity: 1
  },23000)
  tl.add({
    targets: "#mh",
    opacity: 1
  },28000)
  tl.add({
    targets: "#leg,#mh-leg,#a-circ",
    opacity: 1,
  },28000)
  tl.add({
    targets: "#a-circ",
    scale: 0.9*size,
  },36000)
  tl.add({
    targets: "#disp2,#mag2",
    opacity: 1
  },38000)
  tl.add({
    targets: "#disp2,#mag2,#a-circ",
    opacity: 0
  },41500)
  tl.add({
    targets: "#disp",
    opacity: 1
  },46000)
  tl.add({
    targets: "#fh,#fh-leg",
    opacity: 1
  },46000)
  tl.add({
    targets: "#mag",
    opacity: 1
  },46000)
  tl.add({
    targets: "#comp",
    opacity: 1
  },54000)
  tl.add({
    targets: "#theta",
    opacity: 1,
  },68000)
  //Set Interval checks -> 50ms for audio time. 
  const x = setInterval(function(){
      let place = audio.currentTime;
      //anime timeline syncs animation with audio
        tl.seek(place*1000);
    },50);
  }
  else{
    //If function called with arg false, hide window and clear interval
    document.querySelector("#cs1").style.display = "none";
    if (typeof x != 'undefined') {
      clearInterval(x);
    }}

}

// function frame2: true -> show, false-> hide, clearInterval
const frame2 = (show) => {

    if (show) {

    const audio2 = document.querySelector("#audio2")
    document.querySelector("#cs2").style.display = "grid";


        const tl = anime.timeline({
    easing: 'linear',
    autoplay: false
  })
    tl.add({
    targets: "#force-vec,#force-lab,#theta2",
    opacity: 1
  },10000)
    tl.add({
      targets: "#force-vec",
      scale: 1.2
    },13000)
    tl.add({
      targets: "#force-vec",
      scale: 1
    },15000)
    tl.add({
      targets: "#theta2",
      scale: 1.2
    },18000)
    tl.add({
      targets: "#theta2",
      scale: 1
  },20000)
    tl.add({
      targets: "#theta2",
      opacity: 0
    },22000)
    tl.add({
      targets: "#theta3",
      opacity: 1
    },22000)
    tl.add({
      targets: "#theta3",
      opacity: 0
    },26500)
    tl.add({
      targets: "#theta2",
      opacity: 1
    },26500)
  tl.add({
    targets: "#lighty,#shadowy",
    opacity:1,
    begin: function(){
      document.querySelector("#cs2 .ctr").style.backgroundColor = "#343a40";
    }
  },40000)
  tl.add({
    targets: "#lighty,#shadowy",
    opacity: 0
  },43000)
  tl.add({
    targets: "#xcomp,#xdash,#xcomp-lab",
    opacity: 1
  },43000)
  tl.add({
    targets: "#lightx,#shadowx",
    opacity: 1
  },46500)
  tl.add({
    targets: "#ycomp,#ydash,#ycomp-lab",
    opacity: 1
  },49000)
  tl.add({
    targets: "#lightx,#shadowx",
    opacity: 0,
    begin: function(){
      document.querySelector("#cs2 .ctr").style.backgroundColor = "#f5f5f5";
    }
  },49000)
  tl.add({
    targets: "#ycomp",
    translateX: 11.9*size
  },72000)
  tl.add({
    targets: "#ycomp-lab",
    translateX: 16.1*size
  },72500)
  tl.add({
    targets: "#axes,#xdash,#ydash",
    opacity: 0
  },73000)
  tl.add({
    targets: "#force-lab",
    translateX: -0.84*6.5*size,
    translateY: 0.54*6.5*size,
  },73000)
  tl.add({
    targets: "#force-lab",
    opacity: 0
  },72000)
  tl.add({
    targets: "#magF",
    opacity: 1
  },72000)
  tl.add({
    targets: "#magF",
    translateX: -0.84*6.5*size,
    translateY: 0.54*6.5*size,
  },73000)
  tl.add({
    targets: "#magF",
    opacity: 0
  },75400)
  tl.add({
    targets: "#xcomp,#xcomp-lab,#ycomp,#ycomp-lab,#force-vec,#theta2",
    opacity: 0 
  },76000)
  tl.add({
    targets: "#force-lab",
    opacity: 0
  },78000)
  tl.add({
    targets: "#triangle2",
    opacity: 1
  },75000)
  tl.add({
    targets: "#triangle2",
    scale: (1/15)*size,
    translateY: -2.2*size,
    translateX: 6*size
  },93000)
  tl.add({
    targets: "#eqn1",
    opacity: 1
  },157000)
  tl.add({
    targets: "#eqn2",
    opacity: 1
  },171000)
  tl.add({
    targets: "#eqn3",
    opacity: 1
  },180000)
  tl.add({
    targets: "#cue11",
    opacity: 1,
  },172000)
  tl.add({
    targets: "#cue21",
    opacity: 1,
  },176000)
  tl.add({
    targets: "#cue12",
    opacity: 1,
  },173000)
  tl.add({
    targets: "#cue22",
    opacity: 1
  },177000)
  tl.add({
    targets: "#cue11",
    opacity: 0,
  },182000)
  tl.add({
    targets: "#cue21",
    opacity: 0,
  },182000)
  tl.add({
    targets: "#cue13",
    opacity: 1
  },182000)
  tl.add({
    targets: "#cue23",
    opacity: 1
  },190000)
  tl.add({
    targets: "#eqn1,#eqn2,#eqn3,#cue13,#cue12,#cue22,#cue23",
    opacity: 0
  },208500)
  tl.add({
    targets: "#eqn4",
    opacity: 1
  },210000)
  tl.add({
    targets: "#eqn5",
    opacity: 1
  },220000)
  tl.add({
    targets: "#cue11",
    opacity: 1
  },224000)
  tl.add({
    targets: "#cue14",
    opacity: 1
  },225000)
  tl.add({
    targets: "#cue21",
    opacity: 1
  },226000)
  tl.add({
    targets: "#cue22",
    opacity: 1
  },227000)
  tl.add({
    targets: "#eqn6",
    opacity: 1
  },231000)
  tl.add({
    targets: "#cue11",
    opacity: 0
  },231500)
  tl.add({
    targets: "#cue13",
    opacity: 1
  },233000)
  tl.add({
    targets: "#cue21",
    opacity: 0
  },234000)
  tl.add({
    targets: "#cue23",
    opacity: 1
  },235000)

  //If function called with arg false, hide window and clear interval
  const x = setInterval(function(){
      let place = document.querySelector("#audio2").currentTime;
        tl.seek(place*1000);
    },50);}
  else{
    document.querySelector("#cs2").style.display = "none";
    if (typeof x != "undefined" ){
      clearInterval(x);
    }
    }}

//Shows frame 3, summary    
const frame3 = (show) => {
  if (show) {
    document.querySelector("#cs3").style.display = "grid";
  }
  else {
    document.querySelector("#cs3").style.display = "none";
  }
}

//Shows quiz question
const question = (show,feedback) => {
  if (show) {
    document.querySelector("#question").style.display = "grid";

    if (feedback) {
      document.querySelector("#audio3").style.display = "inline-block";
      document.querySelector("#nxt-btn").style.display = "inline";
      document.querySelector("#sub-btn").style.display = "none";
      document.querySelector("#btn8").style.display = "none";
      
      const tl = anime.timeline({
        easing: "linear",
        autoplay: false
      })
      tl.add({
        targets: "#vec-image",
        opacity: 0
      },29000)
      tl.add({
        targets: "#tri-image",
        opacity: 1
      },29000)

      let x = setInterval(function(){
        const audio = document.querySelector("#audio3")
        let place = audio.currentTime;
        tl.seek(place*1000);
      },50)
    }
  } else {
    document.querySelector("#question").style.display = "none";
  }
}

/* 
###########################################
#                                         #
#       jQuery Event Listeners/           #
#           Form Submission               #
#                                         #
###########################################
*/

// Quiz question form submission


$("#question-form").submit(function(e){
  e.preventDefault();
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const form = $(this);
  const quiz1time = (Date.now() - start)/1000;
  let url = form.attr("action");
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
      headers: {'X-CSRFToken': csrftoken, 'event': 'submission','clicks':clicks,'datetime':datetime},
      type:"POST",
      url: url,
      data: form.serialize(),
      complete: function(){
        question(true,true);   
      }
      })
   });

// Listens to #audio element. On play submits form with timing data
$("#audio").on("play",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "play";
  document.querySelector("#audio-events").videoNumber.value = "1";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = audio.currentTime;
  $("#audio-events").triggerHandler("submit")})

// Listens to #audio element. On pause submits form with timing data/
// Note: Seeking pauses the video at seek start and plays at seek end
$("#audio").on("pause",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "pause";
  document.querySelector("#audio-events").videoNumber.value = "1";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = audio.currentTime;
  $("#audio-events").triggerHandler("submit")})

// Listens to #audio element. On play submits form with timing data
$("#audio2").on("play",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "play";
  document.querySelector("#audio-events").videoNumber.value = "2";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = audio.currentTime;
  $("#audio-events").triggerHandler("submit")})

// Listens to #audio element. On pause submits form with timing data/
// Note: Seeking pauses the video at seek start and plays at seek end
$("#audio2").on("pause",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio2") 
  document.querySelector("#audio-events").event.value = "pause";
  document.querySelector("#audio-events").videoNumber.value = "2";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = audio.currentTime;
  $("#audio-events").triggerHandler("submit")})

/* 
#####################################
#                                   #
#   jQuery Button Event Listeners   #
#                                   #
#####################################                                   
*/

$("#btn1").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 0 to frame 1";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#btn2").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 1 to frame 0";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#btn3").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 1 to frame 2";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#btn4").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 2 to frame 1";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#btn5").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 2 to frame 3";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#btn6").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 3 to frame 2";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})
  
$("#btn7").on("click",function(){
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const audio = document.querySelector("#audio") 
    document.querySelector("#audio-events").event.value = "frame 3 to assessment";
    document.querySelector("#audio-events").videoNumber.value = "0";
    document.querySelector("#audio-events").timeStamp.value = datetime;
    document.querySelector("#audio-events").videoTime.value = "0";
    $("#audio-events").triggerHandler("submit")})

$("#btn8").on("click",function(){
  const audio = document.querySelector("#audio") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  document.querySelector("#audio-events").event.value = "assessment to frame3";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  $("#audio-events").triggerHandler("submit")})

$("#audio-events").submit(function(e){
  e.preventDefault();
  form = $(this);
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const url = window.location;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
    headers: {'X-CSRFToken': csrftoken,'event':'blah','datetime':datetime},
    type: "POST",
    url: url,
    data: form.serialize(),
  })
})


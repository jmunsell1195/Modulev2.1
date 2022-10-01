// Fix screen size based on native resolution
document.body.style.minWidth = String(0.99*w);
document.body.style.minHeight = String(0.8*h);

let pageSt = 'start'

const userID = document.getElementById("userId").value
console.log(userID)

setInterval(function(){
  console.log(pageSt)
},1000)

/*  
#################################################################################
######################### Data Submission Functions #############################
#################################################################################
*/ 

/* 
###########################################
#                                         #
#      pageEvents submits form data       #
#   page events form, which keeps track   #
#   of the state of the page. (e.g.       #
#   moving between videos or seeking in   #
#      the video, for videos (1/2)        #
#                                         #
###########################################
*/

const pageEvents = (evnt,vdoNMBR) => {
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
  const AudioForm = document.querySelector("#audio-events")

  AudioForm.pageState.value = pageSt
  AudioForm.event.value = evnt;
  AudioForm.videoNumber.value = `video number ${vdoNMBR}`;
  AudioForm.timeStamp.value = datetime;
  AudioForm.user.value = userID


  if (vdoNMBR === '1'){
    const audio = document.querySelector("#audio") 
    AudioForm.videoTime.value = audio.currentTime;
  } else if (vdoNMBR === '2'){
    const audio = document.querySelector("#audio2") 
    AudioForm.videoTime.value = audio.currentTime;
  } else if (vdoNMBR === '3'){
    const audio = document.querySelector("#audio3") 
    AudioForm.videoTime.value = audio.currentTime;
  } else {
    AudioForm.videoTime.value = "NA"
  }

  $("#audio-events").triggerHandler("submit")
}



/* 
#####################################################################
#                                                                   #
#        mouseEvents keeps track of user inputs (e.g. mouse)        #
#               movements/clicks and keyboard input                 #
#                                                                   #
#####################################################################
*/


  


/* 
###########################################
#                                         #
#       zoned handles submission of       #
#               form data                 #
#                                         #
#        For mind wandering prompt        #
#                                         #
###########################################
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

wandCNT = 0

const wanderFunc = () =>{
  const randX = getRandomInt(120,240)
  const WanderDIV = document.getElementById("wander")
      setTimeout(function(){
        if(pageSt != 'Vectors Question' && pageSt != 'Vectors Question Feedback'){
        WanderDIV.style.display = "block"
        document.getElementById("tone").play()
        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

        let Audio
        const AudioForm = document.querySelector("#audio-events2")
        AudioForm.user.value = userID
        AudioForm.event.value = 'Wander Prompt';
        AudioForm.pageState.value = pageSt
        switch (pageSt) {
          case 'start':
          
            AudioForm.videoNumber.value = "NA";
            AudioForm.timeStamp.value = datetime;
            AudioForm.videoTime.value = "NA";
            break;

          case 'Vectors Frame 0':

            AudioForm.videoNumber.value = "NA";
            AudioForm.timeStamp.value = datetime;
            AudioForm.videoTime.value = "NA";
            break;

          case 'Vectors Frame 1':
          
            Audio = document.getElementById("audio")
            Audio.pause()
          
            AudioForm.videoNumber.value = "Video 1";
            AudioForm.timeStamp.value = datetime;
            AudioForm.videoTime.value = Audio.currentTime;
            break;

          case 'Vectors Frame 2':
          
            Audio = document.getElementById("audio2")
            Audio.pause()
          
            AudioForm.videoNumber.value = "Video 2";
            AudioForm.timeStamp.value = datetime;
            AudioForm.videoTime.value = Audio.currentTime;
            break;
        
          default:
        
            AudioForm.videoNumber.value = "NA";
            AudioForm.timeStamp.value = datetime;
            AudioForm.videoTime.value = "NA";
            break;
          }


          document.addEventListener("keydown",function(e){
            if (e.code === "KeyY" || e.code === "KeyN") {
              WanderDIV.style.display = 'none'
              AudioForm.Wandering.value = e.code
              $("#audio-events2").triggerHandler("submit")
          }
          })

          
          wanderFunc()
      }},randX*1000)
  }

wanderFunc()


  


/*  
#############################################################################################
################################  Display Functions ######################################### 
#############################################################################################
*/

// Pause Video if frame is closed while video is playing
const pause1 = () => {
  document.querySelector("#audio").pause();
}

const pause2 = () => {
  document.querySelector("#audio2").pause();
}

// Toggle Dim navbar/footer when video is playing
const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

const notPlaying = () => {
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("bottombar").style.opacity = "1";
}

/* 
###########################################
#                                         #
#     startFrame function fires when      #
#         showing/hiding startFrame       #
#                                         #
#    If show === true:                    #
#        -startFrame displays             #
#                                         #
#    If show === false:                   #
#        - startFrame hidden              #
#                                         #
###########################################
*/

const startFrame = (show) => {
  if (show){
    document.getElementById("start").style.display = "block";
  } else {
    document.getElementById("start").style.display = "none";
  }
}


/* 
###########################################
#                                         #
#       Frame 0 function fires when       #
#         showing/hiding Frame 0          #
#                                         #
#    If show === true:                    #
#        -Frame 0 displays                #
#                                         #
#    If show === false:                   #
#        - Frame 0 hidden                 #
#                                         #
###########################################
*/

const frame0 = (show) => {
  if (show) {
    document.querySelector("#cs0").style.display = "grid";
    pageSt = 'Vectors Frame 0'
  }
  else {
    document.querySelector("#cs0").style.display = "none";
  }
};

/* 
###########################################
#                                         #
#    Frame 1 function fires when going    #
#    from frame 0 -> 1 or 2 -> 1          #
#                                         #
#    If show === true:                    #
#        -Frame 1 displays                #
#        -#audio 1 listenters             #
#        -anime js timeline               #
#        -setInterval syncs audio         #
#           and animation                 #
#                                         #
#    If show === false:                   #
#        - Frame 1 hidden                 #
#        - clear #audio1 listeners        #
#        -clearInterval audio/anime       #
#                                         #
#                                         #
###########################################
*/

const frame1 = (show) => {
  if (show){
    pageSt = 'Vectors Frame 1'
    document.querySelector("#cs1").style.display = "grid";
    const audio = document.querySelector("#audio");

    let fired = false;

    //Listens for audio events: play/seek/pause. Fills and submits form "audio-events"
    $("#audio").on("play",function(e){
        pageEvents('Video Play','1')
        isPlaying();
    })

    $(document).on("keydown",function(e){
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        if (!fired){
          pageEvents('Video Seeking Keyboard','1')
          fired = true;
        }}})
    $(document).on("keyup",function(e){
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        pageEvents('Video Seeked Keyboard','1')
        fired = false;
    }})
    
    // Listens to #audio element. On pause submits form with timing data/
    // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio").on("pause",function(e){
      pageEvents('Video Pause','1')
      notPlaying();
    })

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
    targets: "#leg,#mh-leg",
    opacity: 1,
  },28000)
  tl.add({
    targets: "#a-circ",
    opacity: 1
  },37000)
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
    }

  }
};

/* 
###########################################
#                                         #
#    Frame 2 function fires when going    #
#    from frame 1 -> 2 or 3 ->2           #
#                                         #
#    If show === true:                    #
#        -Show Frame 2                    #
#        -#audio 2 listenters             #
#        -anime js timeline               #
#        -setInterval syncs audio         #
#           and animation                 #
#                                         #
#    If show === false:                   #
#        - clear #audio2 listeners        #
#        -clearInterval audio/anime       #
#                                         #
#                                         #
###########################################
*/

const frame2 = (show) => {

  if (show) {
    pageSt = 'Vectors Frame 2'
    const audio2 = document.querySelector("#audio2")
    document.querySelector("#cs2").style.display = "grid";
    let fired = false;

    // Listens to #audio2 element. On play submits form with timing data
    $("#audio2").on("play",function(){
      pageEvents('Video Play','2')
      isPlaying();
    })

    $(document).on("keydown",function(e){
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        if (!fired){
          pageEvents('Video Seeking Keyboard','2')
          fired = true;
          $("#audio-events").triggerHandler("submit")
          }
        }
      })
    $(document).on("keyup",function(e){
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        pageEvents('Video Seeked Keyboard','2')
        fired = false;
        }
    })    


    // Listens to #audio2 element. On pause submits form with timing data/
    // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio2").on("pause",function(){
      pageEvents('Video Paused','2')
      notPlaying();
    })


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
          document.querySelector("#cs2 .ctr").style.backgroundColor = "#535c66";
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
        opacity: 0
      },92500)
      tl.add({
        targets: "#triangle35",
        opacity: 1
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
        },50);
  }  else  {
    document.querySelector("#cs2").style.display = "none";
    if (typeof x != "undefined" ){
      clearInterval(x);
    }
  }
};

//Shows frame 3, summary    
const frame3 = (show) => {
  if (show) {
    pageSt = 'Vectors Frame 3'

    document.querySelector("#cs3").style.display = "grid";
  }
  else {
    document.querySelector("#cs3").style.display = "none";
  }
}

/* 
###########################################
#                                         #
#    question function fires when         #
#    answering assessment question        #
#                                         #
#    If show === true:                    #
#        -Show Frame Question             #
#        -#audio 3 listenters             #
#        -anime js timeline               #
#        -setInterval syncs audio         #
#           and animation                 #
#        If feedback === true:            #
#            -Animated Feedback           #
#                                         #
#    If show === false:                   #
#        -clear #audio3 listeners         #
#        -clearInterval audio/anime       #
#                                         #
#                                         #
###########################################
*/

const question = (show,feedback) => {
  if (show) {
    pageSt = 'Vectors Question'
    document.querySelector("#question").style.display = "grid";

    if (feedback) {
      pageSt = 'Vectors Question Feedback'
      document.querySelector("#audio3").style.display = "inline-block";
      document.querySelector("#nxt-btn").style.display = "inline";
      document.querySelector("#sub-btn").style.display = "none";
      document.querySelector("#btn8").style.display = "none";
      let fired = false;

    // Listens to #audio element. On play submits form with timing data
    $("#audio3").on("play",function(){

      //Form values
      pageEvents('Video Play','3')
      //Dims navbar/footer when audio plays
      isPlaying();
    })
    //Seeking using arrow keys
    $(document).on("keydown",function(e){
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        if (!fired){
          pageEvents('Video Seeking Keyboard','3')
          fired = true;
        }}})
    $(document).on("keyup",function(e){
      if (e.code === "ArrowRight" || e.code ==="ArrowLeft") {
        pageEvents('Video Seeked Keyboard','3')
        fired = false;
      }})

      // Listens to #audio element. On pause submits form with timing data/
      // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio3").on("pause",function(){
      pageEvents('Video Paused','3')
      notPlaying();
    })
    
      const tl = anime.timeline({
        easing: "linear",
        autoplay: false
      })
      tl.add({
        targets:"#form-box",
        opacity: 0
      },1000)
      tl.add({
        targets: "#cue54",
        opacity: 1
      },16000)
      tl.add({
        targets: "#cue54",
        opacity: 0
      },26000)
      tl.add({
        targets: "#vec-image",
        opacity: 0
      },29000)
      tl.add({
        targets: "#tri-image",
        opacity: 1
      },29000)
      tl.add({
        targets: "#cue51",
        opacity: 1
      },58000)
      tl.add({
        targets: "#cue51",
        opacity: 0
      },61000)
      tl.add({
        targets: "#cue52",
        opacity: 1
      },64000)
      tl.add({
        targets: "#cue52",
        opacity: 0
      },66500)
      tl.add({
        targets: "#cue61",
        opacity: 1
      },69000)
      tl.add({
        targets: "#cue61",
        opacity: 0
      },73000)
      tl.add({
        targets: "#eqn51",
        opacity: 1
      },79000)
      tl.add({
        targets: "#eqn52",
      opacity: 1
      },85000)
      tl.add({
        targets: "#cue55",
        opacity: 1
      },87000)
      tl.add({
        targets: "#cue51",
        opacity: 1
      },87000)
      tl.add({
        targets: "#cue61",
        opacity: 1
      },89000)
      tl.add({
        targets: "#cue63",
        opacity: 1
      },89000)
      tl.add({
        targets: "#eqn53",
        opacity: 1
      },102000)
      tl.add({
        targets: "#cue55",
        opacity: 0
      },103000)
      tl.add({
        targets: "#cue56",
        opacity: 1
      },103000)
      tl.add({
        targets: "#cue62",
        opacity: 1
      },104000)
      tl.add({
        targets: "#cue63",
        opacity: 0
      },104000)
      tl.add({
        targets: "#eqn54",
        opacity: 1
      },116000)
      tl.add({
        targets: "#cue51,#cue52,#cue55,#cue56,#cue61,#cue62",
        opacity: 0
      },115000)
      tl.add({
        targets: "#eqn51,#eqn52,#eqn53,#eqn54",
        opacity: 0
      },120000)
      tl.add({
        targets: "#eqn59",
        opacity: 1
      },121000)
      tl.add({
        targets: "#eqn59",
        opacity: 0
      },126000)
      tl.add({
        targets: "#eqn55",
        opacity: 1
      },128000)
      tl.add({
        targets: "#eqn56",
        opacity: 1
      },134000)
      tl.add({
        targets: "#cue52",
        opacity: 1
      },137000)
      tl.add({
        targets: "#cue55",
        opacity: 1
      },137000)
      tl.add({
        targets: "#cue61",
        opacity: 1
      },138000)
      tl.add({
        targets: "#cue63",
        opacity: 1
      },138000)
      tl.add({
        targets: "#eqn57",
        opacity: 1
      },147000)
      tl.add({
        targets: "#cue55",
        opacity: 0
      },148000)
      tl.add({
        targets: "#cue56",
        opacity: 1
      },149000)
      tl.add({
        targets: "#cue63",
        opacity: 0
      },150000)
      tl.add({
        targets:"#cue62",
        opacity: 1
      },151000)
      tl.add({
        targets: "#cue52,#cue61,#cue62,#cue56",
        opacity: 0
      },163000)
      tl.add({
        targets: "#eqn58",
        opacity: 1
      },164000)
      tl.add({
        targets: "#eqn55,#eqn56,#eqn57,#eqn58",
        opacity: 0
      },171000)
      tl.add({
        targets: "#eqn59",
        opacity: 1
      },172000)
      tl.add({
        targets: "#eqn60",
        opacity: 1
      },173000)
      tl.add({
        targets: "#eqn59,#eqn60",
        opacity: 0
      },181500)
      tl.add({
        targets: "#form-box",
        opacity: 1
      },183000)
      tl.add({
        targets: "#cue53",
        opacity: 1
      },183500)


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
###########################################################################################
############################# Button Event Listeners ######################################
###########################################################################################
*/

const startBTN = document.getElementById("start-btn")
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const nextBTN = document.getElementById('nxt-btn')
const subBTN = document.getElementById('sub-btn')
const audio1 = document.getElementById('audio')
const audio2 = document.getElementById('audio2')

// Event Listener for start button
startBTN.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  mouseForm.event.value = 'Clicked Start Button'

  mouseForm.keyPressed.value = "NA"

  let rect = startBTN.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Start to Frame 0','NA')
  startBTN.style.backgroundColor = "red"
  setTimeout(function(){
    startFrame(false);
    frame0(true);
    startBTN.style.backgroundColor = "#8c979d"
  },250)
})

// Event Listener for button1
btn1.addEventListener('click',function(e){

    // Populate and Submit Mouse Events Form
    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt

    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.event.value = 'Clicked Button 1'
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn1.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID
  
    $('#mouse-events').triggerHandler("submit")

  // Submit page events form
  pageEvents('Moving From Frame 0 to Frame 1','NA')
  btn1.style.backgroundColor = "red"
  setTimeout(function(){
    btn1.style.backgroundColor = "#8C979D";
    frame0(false);
    frame1(true);
  },250)
})

//Event Listener for button2
btn2.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  mouseForm.event.value = 'Clicked Button 2'

  mouseForm.keyPressed.value = "NA"

  let rect = btn2.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 1 to Frame 0','NA')
  btn2.style.backgroundColor = "red"
  audio1.pause()
  setTimeout(function(){
    btn2.style.backgroundColor = "#8c979d"
    frame1(false)
    frame0(true)
  },250)
})

btn3.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clickked Button 3'

  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  mouseForm.keyPressed.value = "NA"

  let rect = btn3.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 1 to Frame 2',"NA")
  btn3.style.backgroundColor = "red"
  audio1.pause()
  setTimeout(function(){
    frame1(false)
    frame2(true)
    btn3.style.backgroundColor = "#8c979d"
  },250)
})

btn4.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clickked Button 4'

  mouseForm.keyPressed.value = "NA"
  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  let rect = btn4.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 2 to Frame 1','NA')
  audio2.pause()
  btn4.style.backgroundColor = 'red'
  setTimeout(function(){
    frame2(false)
    frame1(true)
    btn4.style.backgroundColor = '#8c979d'
  },250)
})

btn5.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clicked Button 5'

  mouseForm.keyPressed.value = "NA"
  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  let rect = btn5.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 2 to Frame 3','NA')
  btn5.style.backgroundColor = "red"
  audio2.pause()
  setTimeout(function(){
    frame2(false)
    frame3(true)
    btn5.style.backgroundColor = "#8c979d"
  },250)
})

btn6.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clicked Button 6'

  mouseForm.keyPressed.value = "NA"
  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  let rect = btn6.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 3 to Frame 2','NA')
  btn6.style.backgroundColor = "red"
  setTimeout(function(){
    frame3(false)
    frame2(true)
    btn6.style.backgroundColor = "#8c979d"
  },250)
})

btn7.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clicked Button 7'

  mouseForm.keyPressed.value = "NA"
  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  let rect = btn7.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Frame 3 to Question','NA')
  btn7.style.backgroundColor = "red"
  setTimeout(function(){
    btn7.style.backgroundColor = '#8c979d'
    frame3(false)
    question(true,false)
  },250)
})

btn8.addEventListener('click',function(e){

  // Populate and Submit Mouse Events Form
  mouseForm = document.getElementById("mouse-events")

  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`

  mouseForm.timeStamp.value = datetime
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.pageState.value = pageSt

  mouseForm.event.value = 'Clicked Button 8'

  mouseForm.keyPressed.value = "NA"
  mouseForm.videoNumber.value = "NA"
  mouseForm.videoTime.value = "NA"

  let rect = btn8.getBoundingClientRect();
  mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
  mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
  mouseForm.user.value = userID

  $('#mouse-events').triggerHandler("submit")

  pageEvents('Moving From Question to Frame 3','NA')
  btn8.style.backgroundColor = "red"
  setTimeout(function(){
    question(false,false)
    frame3(true)
    btn8.style.backgroundColor = "#8c979d"
  },250)
})

subBTN.addEventListener('click',function(e){
    // Populate and Submit Mouse Events Form
    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Submit Button'
  
    mouseForm.keyPressed.value = "NA"
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    let rect = subBTN.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID
  
    $('#mouse-events').triggerHandler("submit")
  
    pageEvents('Submitted Question','NA')
    subBTN.style.backgroundColor = "red"
    setTimeout(function(){
      question(true,true);
      subBTN.style.backgroundColor = "#8c979d" 
    })
})

nextBTN.addEventListener('click',function(){
  window.location.replace('/Force/Force_HLG/Forces')
})

/*
###########################################################################################
######################## User Input Event Listeners #######################################
###########################################################################################
*/

/* 
#################################################
#                                               #
#       Event Listener for Mouse Movement       #
#                                               #
#       Fires once at the start of each         #
#       mouse movement and once at the          #
#          end of each mouse movement           #
#                                               #
#################################################
*/

let fired = false;
let prevX;
let prevY;

document.addEventListener("mousemove",function(e){
  let locX = e.pageX;
  let locY = e.pageY;
  const mouseForm = document.querySelector("#mouse-events")
  if (!fired){
    mouseForm.pageState.value = pageSt
    mouseForm.event.value = 'mouse-start'
    mouseForm.mouseX.value = locX
    mouseForm.mouseY.value = locY
    mouseForm.keyPressed.value = "NA"
    mouseForm.clickedITMtl.value = "NA"
    mouseForm.clickedITMbr.value  = "NA"
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    mouseForm.timeStamp.value = datetime
    mouseForm.user.value = userID
    $("#mouse-events").triggerHandler("submit")
    fired = true;
  }
  setTimeout(function(){
    if(locX === prevX && locY === prevY){
      mouseForm.pageState.value = pageSt
      mouseForm.event.value = 'mouse-stop'
      mouseForm.mouseX.value = e.pageX
      mouseForm.mouseY.value = e.pageY
      mouseForm.keyPressed.value = "NA"
      mouseForm.clickedITMtl.value = "NA"
      mouseForm.clickedITMbr.value  = "NA"
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
      mouseForm.timeStamp.value = datetime
      mouseForm.user.value = userID
      $("#mouse-events").triggerHandler("submit")
      fired=false;
    }
  },300)
  prevX = locX
  prevY = locY
})

document.addEventListener("click",function(e){
  
  const mouseForm = document.getElementById("mouse-events")

  mouseForm.pageState.value = pageSt
  mouseForm.event.value = 'click'
  mouseForm.mouseX.value = e.pageX
  mouseForm.mouseY.value = e.pageY
  mouseForm.keyPressed.value = "NA"
  mouseForm.clickedITMtl.value = "NA"
  mouseForm.clickedITMbr.value  = "NA"
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  mouseForm.timeStamp.value = datetime
  mouseForm.user.value = userID
  $("#mouse-events").triggerHandler("submit")
})

let fired2 = false

document.addEventListener("keydown",function(e){
  if(!fired2){
    const mouseForm = document.getElementById("mouse-events")

    mouseForm.pageState.value = pageSt
    mouseForm.event.value = 'key pressed'
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.keyPressed.value = e.code
    mouseForm.clickedITMtl.value = "NA"
    mouseForm.clickedITMbr.value  = "NA"
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    mouseForm.timeStamp.value = datetime
    mouseForm.user.value = userID
    fired2 = true
    $("#mouse-events").triggerHandler("submit")
  }
})

document.addEventListener("keyup",function(e){
  fired2 = false;
})




/* 
###########################################################################################
######################## jQuery Asynchronous Form Submission ##############################
###########################################################################################
*/

$("#mouse-events").submit(function(e){
  e.preventDefault();
  form = $(this);
  const url = window.location;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
      headers: {'X-CSRFToken': csrftoken,'event':'mouse','user':userID},
      type: "POST",
      url: url,
      data: form.serialize(),
      })
  })

  $("#question-form").submit(function(e){
    e.preventDefault();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const form = $(this);
    const quiz1time = (Date.now() - start)/1000;
    let url = form.attr("action");

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'event': 'submission','datetime':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        })
     });
  
  $("#audio-events").submit(function(e){
    e.preventDefault();
    form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const url = window.location;
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken,'event':'page','datetime':datetime},
        type: "POST",
        url: url,
        data: form.serialize(),
      })
    })

$("#audio-events2").submit(function(e){
  e.preventDefault();
  form = $(this);
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  const url = window.location;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
      headers: {'X-CSRFToken': csrftoken,'event':'page','datetime':datetime},
      type: "POST",
      url: url,
      data: form.serialize(),
    })
  })
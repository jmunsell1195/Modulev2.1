$(document).on('keydown',function(e){
  console.log(e.type === 'keydown')
})

// Fix screen size based on native resolution
document.body.style.minWidth = String(0.99*w);
document.body.style.minHeight = String(0.8*h);

const start = Date.now();
let answer;


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

const startFrame = (show) => {
  if (show){
    document.getElementById("start").style.display = "block";
  } else {
    document.getElementById("start").style.display = "none";
  }
}

document.querySelector("#start").addEventListener("click",function(){
  startFrame(false);
  frame0(true);
})

const frame0 = (show) => {
  if (show) {

    document.querySelector("#cs0").style.display = "grid";
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
    document.querySelector("#cs1").style.display = "grid";
    const audio = document.querySelector("#audio");

    let fired = false;

    //Listens for audio events: play/seek/pause. Fills and submits form "audio-events"
    $("#audio").on("play",function(e){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio") 
      document.querySelector("#audio-events").event.value = "play";
      document.querySelector("#audio-events").videoNumber.value = "1";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;
      isPlaying();

      $(document).on("keydown",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          if (!fired){
            const newDate = new Date();
            const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
            const audio = document.querySelector("#audio") 
            document.querySelector("#audio-events").event.value = "kb_seek_start";
            document.querySelector("#audio-events").videoNumber.value = "1";
            document.querySelector("#audio-events").timeStamp.value = datetime;
            document.querySelector("#audio-events").videoTime.value = audio.currentTime;
            console.log('key-down')
            fired = true;
            $("#audio-events").triggerHandler("submit")
          }}})
      $(document).on("keyup",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          const newDate = new Date();
          const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
          const audio = document.querySelector("#audio") 
          document.querySelector("#audio-events").event.value = "kb_seek_stop";
          document.querySelector("#audio-events").videoNumber.value = "1";
          document.querySelector("#audio-events").timeStamp.value = datetime;
          document.querySelector("#audio-events").videoTime.value = audio.currentTime;
          fired = false;
                $("#audio-events").triggerHandler("submit")
              }})

      $("#audio-events").triggerHandler("submit")})
    
    // Listens to #audio element. On pause submits form with timing data/
    // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio").on("pause",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio") 
      document.querySelector("#audio-events").event.value = "pause";
      document.querySelector("#audio-events").videoNumber.value = "1";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;
      notPlaying();
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
    $("#audio").off()
    $(document).off()
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
    const audio2 = document.querySelector("#audio2")
    document.querySelector("#cs2").style.display = "grid";
    let fired = false;

    // Listens to #audio2 element. On play submits form with timing data
    $("#audio2").on("play",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      document.querySelector("#audio-events").event.value = "play";
      document.querySelector("#audio-events").videoNumber.value = "2";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;
      isPlaying();

      $(document).on("keydown",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          if (!fired){
            const newDate = new Date();
            const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
            document.querySelector("#audio-events").event.value = "kb_seek_start";
            document.querySelector("#audio-events").videoNumber.value = "2";
            document.querySelector("#audio-events").timeStamp.value = datetime;
            document.querySelector("#audio-events").videoTime.value = audio.currentTime;
            fired = true;
            $("#audio-events").triggerHandler("submit")
            }
          }
        });
      $(document).on("keyup",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          const newDate = new Date();
          const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
          document.querySelector("#audio-events").event.value = "kb_seek_stop";
          document.querySelector("#audio-events").videoNumber.value = "2";
          document.querySelector("#audio-events").timeStamp.value = datetime;
          document.querySelector("#audio-events").videoTime.value = audio.currentTime;
          fired = false;
          $("#audio-events").triggerHandler("submit")
          }    
        })
      $("#audio-events").triggerHandler("submit")})

    // Listens to #audio2 element. On pause submits form with timing data/
    // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio2").on("pause",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio2") 
      document.querySelector("#audio-events").event.value = "pause";
      document.querySelector("#audio-events").videoNumber.value = "2";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;
      notPlaying();
      $("#audio-events").triggerHandler("submit")})

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
    //Clear event listeners
    $("#audio2").off()
    $(document).off()
    }
};


//Shows frame 3, summary    
const frame3 = (show) => {
  if (show) {

    current = 3;

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

//Shows quiz question
const question = (show,feedback) => {
  if (show) {

    document.querySelector("#question").style.display = "grid";

    if (feedback) {

      document.querySelector("#audio3").style.display = "inline-block";
      document.querySelector("#nxt-btn").style.display = "inline";
      document.querySelector("#sub-btn").style.display = "none";
      document.querySelector("#btn8").style.display = "none";
      let fired = false;

    // Listens to #audio element. On play submits form with timing data
    $("#audio3").on("play",function(){

      //Form values
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio3") 
      document.querySelector("#audio-events").event.value = "play";
      document.querySelector("#audio-events").videoNumber.value = "3";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;

      //Dims navbar/footer when audio plays
      isPlaying();

      //Seeking using arrow keys
      $(document).on("keydown",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          if (!fired){
            const newDate = new Date();
            const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
            document.querySelector("#audio-events").event.value = "kb_seek_start";
            document.querySelector("#audio-events").videoNumber.value = "2";
            document.querySelector("#audio-events").timeStamp.value = datetime;
            document.querySelector("#audio-events").videoTime.value = audio.currentTime;
            fired = true;
            $("#audio-events").triggerHandler("submit")
          }}})
      $(document).on("keyup",function(e){
        if (e.code === "ArrowRight" || e.code ==="ArrowLeft") {
          const newDate = new Date();
          const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
          document.querySelector("#audio-events").event.value = "kb_seek_stop";
          document.querySelector("#audio-events").videoNumber.value = "2";
          document.querySelector("#audio-events").timeStamp.value = datetime;
          document.querySelector("#audio-events").videoTime.value = audio.currentTime;
          fired = false;
            $("#audio-events").triggerHandler("submit")
        }})
      $("#audio-events").triggerHandler("submit")})

      // Listens to #audio element. On pause submits form with timing data/
      // Note: Seeking pauses the video at seek start and plays at seek end
    $("#audio3").on("pause",function(){
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      const audio = document.querySelector("#audio2") 
      document.querySelector("#audio-events").event.value = "pause";
      document.querySelector("#audio-events").videoNumber.value = "3";
      document.querySelector("#audio-events").timeStamp.value = datetime;
      document.querySelector("#audio-events").videoTime.value = audio.currentTime;
      notPlaying();
      $("#audio-events").triggerHandler("submit")})
      
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
#########################################
#                                       #
#   Event Listener For Mouse Movement   #
#                                       #   
#    Catches Event and Submits Form     #
#    Only Logs Mouse Start and Stop     #
#                                       #
#########################################
*/


let fired = false;
let prevX;
let prevY;

document.addEventListener("mousemove",function(e){
  let locX = e.pageX;
  let locY = e.pageY;
  const me = document.querySelector("#mouse-events")
  if (!fired){
    me.event.value = 'mouse-start'
    me.mouseX.value = locX
    me.mouseY.value = locY
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    me.timeStamp.value = datetime
    $("#mouse-events").triggerHandler("submit")
    fired = true;
  }
  setTimeout(function(){
    if(locX === prevX && locY === prevY){
      me.event.value = 'mouse-stop'
      me.mouseX.value = e.pageX
      me.mouseY.value = e.pageY
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      me.timeStamp.value = datetime
      $("#mouse-events").triggerHandler("submit")
      fired=false;
    }
  },300)
  prevX = locX
  prevY = locY
})

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
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
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

$("#audio-events").submit(function(e){
  e.preventDefault();
  form = $(this);
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const url = window.location;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
      headers: {'X-CSRFToken': csrftoken,'event':'blah','datetime':datetime},
      type: "POST",
      url: url,
      data: form.serialize(),
    })
  })

// Listens to #audio element. On play submits form with timing data
// $("#audio").on("play",function(){
//   const newDate = new Date();
//   const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
//   const audio = document.querySelector("#audio") 
//   document.querySelector("#audio-events").event.value = "play";
//   document.querySelector("#audio-events").videoNumber.value = "1";
//   document.querySelector("#audio-events").timeStamp.value = datetime;
//   document.querySelector("#audio-events").videoTime.value = audio.currentTime;
//   $("#audio-events").triggerHandler("submit")})

// // Listens to #audio element. On pause submits form with timing data/
// // Note: Seeking pauses the video at seek start and plays at seek end
// $("#audio").on("pause",function(){
//   const newDate = new Date();
//   const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
//   const audio = document.querySelector("#audio") 
//   document.querySelector("#audio-events").event.value = "pause";
//   document.querySelector("#audio-events").videoNumber.value = "1";
//   document.querySelector("#audio-events").timeStamp.value = datetime;
//   document.querySelector("#audio-events").videoTime.value = audio.currentTime;
//   $("#audio-events").triggerHandler("submit")})

// // Listens to #audio element. On play submits form with timing data
// $("#audio2").on("play",function(){
//   const newDate = new Date();
//   const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
//   const audio = document.querySelector("#audio") 
//   document.querySelector("#audio-events").event.value = "play";
//   document.querySelector("#audio-events").videoNumber.value = "2";
//   document.querySelector("#audio-events").timeStamp.value = datetime;
//   document.querySelector("#audio-events").videoTime.value = audio.currentTime;
//   $("#audio-events").triggerHandler("submit")})

// // Listens to #audio element. On pause submits form with timing data/
// // Note: Seeking pauses the video at seek start and plays at seek end
// $("#audio2").on("pause",function(){
//   const newDate = new Date();
//   const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
//   const audio = document.querySelector("#audio2") 
//   document.querySelector("#audio-events").event.value = "pause";
//   document.querySelector("#audio-events").videoNumber.value = "2";
//   document.querySelector("#audio-events").timeStamp.value = datetime;
//   document.querySelector("#audio-events").videoTime.value = audio.currentTime;
//   $("#audio-events").triggerHandler("submit")})

/* 
#####################################
#                                   #
#   jQuery Button Event Listeners   #
#                                   #
#####################################                                   
*/

$("#btn1").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 0 to frame 1";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame0(false); 
  frame1(true);
  $("#audio-events").triggerHandler("submit")})

$("#btn2").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 1 to frame 0";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame1(false);
  frame0(true); 
  pause1();
  notPlaying();
  $("#audio-events").triggerHandler("submit")})

$("#btn3").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 1 to frame 2";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame1(false); 
  frame2(true); 
  pause1();
  notPlaying();
  $("#audio-events").triggerHandler("submit")})

$("#btn4").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 2 to frame 1";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame1(true); 
  frame2(false);
  pause2();
  notPlaying();
  $("#audio-events").triggerHandler("submit")})

$("#btn5").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 2 to frame 3";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame2(false); 
  frame3(true);
  pause2();
  notPlaying();
  $("#audio-events").triggerHandler("submit")})

$("#btn6").on("click",function(){
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  const audio = document.querySelector("#audio") 
  document.querySelector("#audio-events").event.value = "frame 3 to frame 2";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  frame3(false); 
  frame2(true);
  $("#audio-events").triggerHandler("submit")})
  
$("#btn7").on("click",function(){
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const audio = document.querySelector("#audio") 
    document.querySelector("#audio-events").event.value = "frame 3 to assessment";
    document.querySelector("#audio-events").videoNumber.value = "0";
    document.querySelector("#audio-events").timeStamp.value = datetime;
    document.querySelector("#audio-events").videoTime.value = "0";
    frame3(false); 
    question(true);
    $("#audio-events").triggerHandler("submit")})

$("#btn8").on("click",function(){
  const audio = document.querySelector("#audio") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  document.querySelector("#audio-events").event.value = "assessment to frame3";
  document.querySelector("#audio-events").videoNumber.value = "0";
  document.querySelector("#audio-events").timeStamp.value = datetime;
  document.querySelector("#audio-events").videoTime.value = "0";
  question(false);
  frame3(true);
  $("#audio-events").triggerHandler("submit")})

$("#nxt-btn").on("click",function(){
  window.location.replace('/Force/Force_HLG/Forces')
})

$("#mouse-events").submit(function(e){
  e.preventDefault();
  form = $(this);
  const url = window.location;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  $.ajax({
      headers: {'X-CSRFToken': csrftoken,'event':'mouse'},
      type: "POST",
      url: url,
      data: form.serialize(),
      })
  })


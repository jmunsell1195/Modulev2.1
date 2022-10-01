const start = Date.now();

const userID = document.getElementById("userId").value
console.log(userID)

let pageSt = 'start'

// Fix screen size based on native resolution
document.body.style.minWidth = String(0.99*w);
document.body.style.minHeight = String(0.8*h);


// Toggle Dim navbar/footer when video is playing
const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

const notPlaying = () => {
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("bottombar").style.opacity = "1";
}


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
###########################################
#                                         #
#         wanderFunc submission of        #
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
  
  const wanderFunc = () =>{
    const randX = getRandomInt(120,240)
    const WanderDIV = document.getElementById("wander")
        setTimeout(function(){
        if(pageSt != 'Question' && pageSt != 'Feedback' && pageSt != 'Review1' && pageSt != 'Review2'){
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
  
            case 'Forces Frame 0':
  
              AudioForm.videoNumber.value = "NA";
              AudioForm.timeStamp.value = datetime;
              AudioForm.videoTime.value = "NA";
              break;
  
            case 'Forces Frame 1':
            
              Audio = document.getElementById("audio")
              Audio.pause()
            
              AudioForm.videoNumber.value = "Video 1";
              AudioForm.timeStamp.value = datetime;
              AudioForm.videoTime.value = Audio.currentTime;
              break;
  
            case 'Forces Frame 2':
            
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

const strt = (show) => {
    if(show){
        document.getElementById("start").style.display = "block"
    } else {
        document.getElementById("start").style.display = "none"
    }
}

const initial = (show) => {
    if (show){
        pageSt = 'Forces Frame 0'
        document.getElementById("csi").style.display = "grid"
    } else {
        document.getElementById("csi").style.display = "none"
    }
}

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



/* 
#########################################################
#                                                       #
#      Frame 0 function fires when going                #
#   from initial -> frame 0 or frame0 -> initial        #
#                                                       #
#     If show === true:                                 #
#            -Frame 0 displays                          #
#            -#audio   listenters                       #
#            -anime js timeline                         #
#            -setInterval syncs audio                   #
#             and animation                             #
#                                                       #
#     If show === false:                                #
#           - Frame 0 hidden                            #
#           - clear #audio  listeners                   #
#           - clearInterval audio/anime                 #
#                                                       #
#                                                       #
#########################################################
*/

const frame0 = (show) => {
    let x;
    const audio = document.querySelector("#audio");
    const frame = document.getElementById("cs0")

    let fired = false;

    if(show){
        pageSt = 'Forces Frame 1'
        frame.style.display = "grid"

            // Listens to #audio2 element. On play submits form with timing data
        $("#audio").on("play",function(){
            pageEvents('Video Play','1')
            isPlaying();
        })
        
        $(document).on("keydown",function(e){
            if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
            if (!fired){
                pageEvents('Video Seeking KB','1')
                fired = true;
                $("#audio-events").triggerHandler("submit")
                }
            }
            });

        $(document).on("keyup",function(e){
            if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
            pageEvents('Video Seeked KB','1')
            fired = false;
            }    
            })
            // Listens to #audio2 element. On pause submits form with timing data/
            // Note: Seeking pauses the video at seek start and plays at seek end
            $("#audio").on("pause",function(){
                pageEvents('Video Pause','1')
                notPlaying();
            })

        let tl = anime.timeline({
            easing : 'linear',
            autoplay: false
        })
        tl.add({
            targets: "#vec1",
            opacity: 1
        },8000)
        tl.add({
            targets: "#vec3",
            opacity: 0
        },8000)
        tl.add({
            targets: "#vec1",
            opacity: 0
        },30000)
        tl.add({
            targets: "#vec2",
            opacity: 1
        },30000)
        tl.add({
            targets: "#vec2",
            opacity: 0
        },69000)
        tl.add({
            targets: "#N2",
            opacity: 1
        },69500)
        tl.add({
            targets: "#cueA,#motion-head",
            opacity: 1
        },72000)
        tl.add({
            targets: "#cueF,#force-head",
            opacity: 1
        },74000)
        tl.add({
            targets: "#cueF,#cueA,#N2,#force-head,#motion-head",
            opacity: 0
        },102000)
        tl.add({
            targets: "#Fnetx,#equals,#max",
            opacity: 1
        },103000)
        tl.add({
            targets: "#Fnety,#equals2,#may",
            opacity: 1
        },112000)
        tl.add({
            targets: "#Fnetx",
            opacity: 0
        },132000)
        tl.add({
            targets: "#sumx",
            opacity: 1
        },134000)
        tl.add({
            targets: "#Fnety",
            opacity: 0
        },139000)
        tl.add({
            targets: "#sumy",
            opacity: 1
        },140000)
        tl.add({
            targets: "#sumx,#sumy,#equals,#equals2,#max,#may",
            opacity: 0
        },157000)
        tl.add({
            targets: "#prblm-stmnt",
            opacity: 1
        },160000)
        tl.add({
            targets: "#xax",
            opacity: 1
        },186000)
        tl.add({
            targets: "#yax",
            opacity: 1
        },193000)
        tl.add({
            targets: "#ft-cue1,#ft-cue2",
            opacity: 1
        },208000)
        tl.add({
            targets: "#F,#F-lab,#F-lab11",
            opacity: 1
        },209000)
        tl.add({
            targets: "#fg-cue1",
            opacity: 1
        },230000)
        tl.add({
            targets: "#fg-vec,#fg-lab,#fg-lab11",
            opacity: 1
        },232000)
        tl.add({
            targets: "#fk-cue1",
            opacity: 1
        },237000)
        tl.add({
            targets: "#Ffk-vec,#Ffk-lab,#Ffk-lab11",
            opacity: 1
        },251000)
        tl.add({
            targets: "#fn-lab,#fn-vec,#fn-lab11",
            opacity: 1
        },258000)
        tl.add({
            targets: "#prblm-stmnt,#ft-cue1,#ft-cue2,#fg-cue1,#fk-cue1",
            opacity: 0
        },270000)
        tl.add({
            targets: "#Fnet,#ma",
            opacity: 1
        },271000)
        tl.add({
            targets: "#Fnet",
            opacity: 0
        },274000)
        tl.add({
            targets: "#F-lab11",
            translateX: -27.5*size,
            translateY: -6*size
        },275000)
        tl.add({
            targets: "#plus1",
            opacity: 1
        },275500)
        tl.add({
            targets: "#fn-lab11",
            translateX: -12.3*size,
            translateY: -9.05*size
        },276000)
        tl.add({
            targets: "#plus2",
            opacity: 1
        },276500)
        tl.add({
            targets: "#Ffk-lab11",
            translateX: -4*size,
            translateY:-14.5*size
        },277000)
        tl.add({
            targets: "#plus3",
            opacity: 1
        },277500)
        tl.add({
            targets: "#fg-lab11",
            translateX: -1.5*size,
            translateY: -17.2*size
        },278000)
        tl.add({
            targets: "#fn-lab11,#Ffk-lab11,#fg-lab11,#F-lab11,#ma,#plus1,#plus2,#plus3",
            opacity: 0
        },284000)
        tl.add({
            targets: "#Fnetx2,#equals11,#max1",
            opacity: 1
        },286000)
        tl.add({
            targets: "#Fnety2,#equals222,#may1",
            opacity: 1
        },292000)
        tl.add({
            targets: "#yax,#fn-vec,#fn-lab,#Fg-vec,#Fg-lab",
            opacity:0
        },306000)
        tl.add({
            targets: "#xdash,#fx-vec2,#Fx,#Fx2",
            opacity: 1
        },310000)
        tl.add({
            targets: "#F,#F-lab,#xdash,#Ffk-vec,#Ffk-lab",
            opacity: 0
        },312000)
        tl.add({
            targets: "#Ffk-vec2,#Ffk-lab2,#Ffk-lab3",
            opacity:1
        },312000)
        tl.add({
            targets: "#Fnetx2,#max1",
            opacity: 0
        },314000)
        tl.add({
            targets: "#xdash2,#xdash3,#xdash4",
            opacity: 1
        },325500)
        tl.add({
            targets: "#Fx2",
            translateX: -31*size,
            translateY: -15.5*size
        },316000)
        tl.add({
            targets: "#Ffk-lab3",
            translateX: -15.5*size,
            translateY: -14.8*size
        },325000)
        tl.add({
            targets: "#minus",
            opacity: 1
        },324500)
        tl.add({
            targets: "#Ffk-vec2",
            translateX: 6.75*size,
            translateY: -2*size
        },330000)
        tl.add({
            targets: "#Ffk-lab2",
            translateX: 11*size,
            translateY: -6*size
        },330000)
        tl.add({
            targets: "#max-vec,#max-lab,#max-lab2",
            opacity: 1
        },339000)
        tl.add({
            targets: "#max-lab2",
            translateX:-14.5*size,
            translateY:-8.8*size
        },347000)
        tl.add({
            targets: "#xax,#xdash2,#xdash3,#xdash4,#max2,#Fx,#Ffk-vec2,#max-lab,#max-vec,#Ffk-lab2,#Fx-vec2",
            opacity: 0
        },369000)
        tl.add({
            targets: "#yax,#fn-vec2,#fy-vec,#Fg-vec2,#Fy-vec2,#Fy,#Fy22,#Fg-lab2,#Fg-lab3,#fn-lab2,#fn-lab3",
            opacity: 1
        },369500)
        tl.add({
            targets: "#Fnety2,#equals222,#may1",
            opacity: 0
        },369500)
        tl.add({
            targets: "#equals33",
            opacity: 1
        },370000)
        tl.add({
            targets: "#ydash2,#ydash3,#ydash4",
            opacity: 1
        },369500)
        tl.add({
            targets: "#Fy-vec2",
            translateX: -0.75*size,
            translateY: -2.75*size
        },373000)
        tl.add({
            targets: "#Fy22,#Fy",
            translateY: -1.5*size
        },373000)
        tl.add({
            targets: "#fn-lab2,#fn-lab3",
            translateX: 4.5*size,
            translateY: 2.6*size
        },373000)
        tl.add({
            targets: "#fn-lab3",
            translateX: 9*size,
            translateY: -9*size
        },382000)
        tl.add({
            targets: "#plus4",
            opacity: 1
        },382000)
        tl.add({
            targets: "#Fy22",
            translateX: 10.5*size,
            translateY: -9*size
        },383000)
        tl.add({
            targets: "#Fg-vec2",
            translateX: -2*size,
            translateY: - 8*size
        },386000)
        tl.add({
            targets: "#Fg-lab2,#Fg-lab3",
            translateX: - 2.5*size,
            translateY: -10*size
        },386000)

        tl.add({
            targets: "#minus2",
            opacity: 1
        },392500)
        tl.add({
            targets: "#Fg-lab3",
            translateX: 20.5*size,
            translateY: -17.5*size
        },393000)
        tl.add({
            targets: "#zero",
            opacity: 1
        },411000)
        x = setInterval(function(){
            let place = audio.currentTime;
            tl.seek(1000*place)
        },50)

    } else {
        frame.style.display = "none";
        audio.pause()
        if (typeof x != 'undefined'){
            clearInterval(x)
        }
    }
}

/* 
#########################################################
#                                                       #
#      Frame 1 function fires when going                #
#   from frame 0 -> frame 1 or frame1 -> frame 0        #
#                                                       #
#     If show === true:                                 #
#            -Frame 1 displays                          #
#            -#audio 1 listenters                       #
#            -anime js timeline                         #
#            -setInterval syncs audio                   #
#             and animation                             #
#                                                       #
#     If show === false:                                #
#           - Frame 1 hidden                            #
#           - clear #audio1 listeners                   #
#           - clearInterval audio/anime                 #
#                                                       #
#                                                       #
#########################################################
*/

const frame1 = show => {
    let x;
    const audio = document.getElementById("audio2")
    let frame = document.querySelector("#cs1")
    if(show){
    pageSt = 'Forces Frame 2'
    let fired = false;
    

            //Listens for audio events: play/seek/pause. Fills and submits form "audio-events"
    $("#audio2").on("play",function(){
        pageEvents('Video Play','2')
        isPlaying();
    })
    $(document).on("keydown",function(e){
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        if (!fired){
            pageEvents('Video Seeking KB','2')
            fired = true;

        }}})
        $(document).on("keyup",function(e){
          if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
            pageEvents('Video Seeked','2')
            fired = false;
        }})

      
      // Listens to #audio element. On pause submits form with timing data/
      // Note: Seeking pauses the video at seek start and plays at seek end
      $("#audio2").on("pause",function(){
        pageEvents('Video Paused','2')
        notPlaying();
    })

        frame.style.display = 'grid';

        let tl = anime.timeline({
            autoplay: false,
            easing: 'linear'
        })
        tl.add({
            targets: "#N2x-eqn1,#N2y-eqn1",
            opacity: 1
        },0)
        tl.add({
            targets: "#diagram1",
            opacity: 1
        },19000)
        tl.add({
            targets: "#diagram1",
            opacity: 0
        },82000)
        tl.add({
            targets: "#diagram2",
            opacity: 1
        },82000)
        tl.add({
            targets: "#diagram2",
            translateY: 5*size
        },83000)
        tl.add({
            targets: "#diagram2",
            opacity: 0
        },111000)
        tl.add({
            targets: "#eqn4",
            opacity: 1
        },102000)
        tl.add({
            targets: "#eqn3",
            opacity: 1
        },108000)
        tl.add({
            targets: "#eqn5",
            opacity: 1
        },119000)
        tl.add({
            targets: "#eqn6",
            opacity: 1
        },146000)
        tl.add({
            targets: "#eqn3,#eqn6,#eqn4,#eqn5",
            opacity: 0
        },187000)
        tl.add({
            targets: "#eqn7,#one",
            opacity: 1
        },187500)
        tl.add({
            targets: "#eqn8,#two",
            opacity: 1
        },187500)
        tl.add({
            targets: "#N2x-eqn1,#N2y-eqn1,#eqn3,#eqn4,#eqn5,#eqn6",
            opacity: 0
        },192000)
        tl.add({
            targets: "#prblm-stmnt2,#ft-cue12,#ft-cue22,#fg-cue12,#fk-cue12",
            opacity: 1
        },192000)
        tl.add({
            targets: "#eqn9",
            opacity: 1
        },263000)
        tl.add({
            targets: "#eqn10",
            opacity: 1
        },270000)
        tl.add({
            targets: "#eqn11",
            opacity: 1
        },285000)
        tl.add({
            targets: "#eqn9,#eqn10",
            opacity: 0
        },290000)
        tl.add({
            targets: "#chk1",
            opacity: 1
        },290000)
        tl.add({
            targets: "#eqn11",
            translateY: -11*size
        })
        tl.add({
            targets: "#eqn12",
            opacity: 1
        },309000)
        tl.add({
            targets: "#eqn13",
            opacity: 1
        },327000)
        tl.add({
            targets: "#eqn14",
            opacity: 1
        },343000)
        tl.add({
            targets: "#eqn12,#eqn13",
            opacity: 0
        },350500)
        tl.add({
            targets: "#chk2",
            opacity: 1
        },350500)
        tl.add({
            targets: "#eqn14",
            translateY: -10.5*size
        },350500)
        let x = setInterval(function(){
            let place = audio.currentTime;
            tl.seek(place*1000)
        },50)
    } else {
        frame.style.display = 'none';
        audio.pause();
        if(typeof x != 'undefined'){
            clearInterval(x)
        }
    }
}

/* 
##################################################
#                                                #
#    func. reivew controls display of review     #
#                                                #
#           show:                                #
#               true  -> display                 #
#               false -> hide                    #
#                                                #
##################################################
*/

const review1 = (show) => {
    const frame = document.getElementById("review")
    if (show) {
        pageSt = "Review1"
        frame.style.display = "grid";
    } else {
        frame.style.display = "none";
    }
}

/* 
##################################################
#                                                #
#    func. review2 controls display of review2   #
#                                                #
#           show:                                #
#               true  -> display                 #
#               false -> hide                    #
#                                                #
##################################################
*/

const review2 = (show) => {
    const frame = document.getElementById("review2")
    if (show) {
        pageSt = 'Review2'
        frame.style.display = "grid";
    } else {
        frame.style.display = "none";
    }
}

/* 
#########################################################
#                                                       #
#      question function fires when going               #
#   from frame 1 -> question or question -> frame1      #
#                                                       #
#     If show === true:                                 #
#            -question displays                         #
#            If feedback == true:                       #
#               -#audio 1 listenters                    #
#                -anime js timeline                     #
#                -setInterval syncs audio               #
#                 and animation                         #
#                                                       #
#     If show === false:                                #
#           - Frame 1 hidden                            #
#           - clear #audio1 listeners                   #
#           - clearInterval audio/anime                 #
#                                                       #
#                                                       #
#########################################################
*/

const question = (show,feedback) => {
    const frame = document.querySelector("#fback")
    if (show) {
        pageSt = 'Question'
        frame.style.display = "grid"
        if (feedback){
            pageSt = 'Feedback'
            document.getElementById("sub-btn").style.display = "none";
            document.getElementById("btn8").style.display = "none";

            document.getElementById("audio3").style.display = "inline";
            document.getElementById("nxt-btn").style.display = "inline";

            let tl = anime.timeline({
                autoplay: false,
                easing: 'linear'
            })
            tl.add({
                targets: "#form-box",
                opacity: 0
            },0)
            tl.add({
                targets: "#img1",
                opacity: 1
            },19000)
            tl.add({
                targets: "#img2",
                opacity: 1
            },31000)
            tl.add({
                targets: "#img3",
                opacity: 1
            },46000)
            tl.add({
                targets: "#img4",
                opacity: 1
            },53000)
            tl.add({
                targets: "#eqn1",
                opacity: 1
            },67000)
            tl.add({
                targets: "#eqn2",
                opacity: 1
            },93000)
            tl.add({
                targets: "#img4,#img3,#img2,#img1",
                opacity: 0
            },99000)
            tl.add({
                targets: "#img5",
                opacity: 1
            },99000)
            tl.add({
                targets: "#img5",
                opacity: 0
            },107000)
            tl.add({
                targets: "#img6",
                opacity: 1
            },107000)
            tl.add({
                targets: "#fbeqn3",
                opacity: 1
            },127000)
            tl.add({
                targets: "#fbeqn4",
                opacity: 1
            },144000)
            tl.add({
                targets: "#img6",
                opacity: 0
            },160000)
            tl.add({
                targets: "#eqn1,#eqn2,#fbeqn3,#fbeqn4",
                opacity: 0
            },160000)
            tl.add({
                targets: "#form-box",
                opacity: 1
            },160000)
            tl.add({
                targets: "#corr",
                opacity: 1
            },160000)

            let x = setInterval(function(){
                let audio = document.querySelector("#audio3")
                let place = audio.currentTime

                tl.seek(place*1000)
            },50)
        }
    } else {
        frame.style.display = "none"
    }
}

// Function to control display of calibration statement
const cal = (show) => {
    if (show) {
        document.getElementById("calibration").style.display = "grid"
    } else {
        document.getElementById("calibration").style.display = "none"
}}


/* 
#####################################
#                                   #
#      Button Event Listeners       #
#                                   #
#####################################                                   
*/

const strtBTN = document.getElementById("start-btn")
const btn0 = document.getElementById("btn0")
const btn11 = document.getElementById("btn11")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const br1b = document.getElementById("btn-r1-back")
const br1n = document.getElementById("btn-r1-next")
const br2b = document.getElementById("btn-r2-back")
const br2n = document.getElementById("btn-r1-next")
const btn8 = document.getElementById('btn8')
const subBTN = document.getElementById('sub-btn')
const calBTN = document.getElementById('cal')

strtBTN.addEventListener('click',function(e){
    strtBTN.style.backgroundColor = 'red';

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Start Button'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = strtBTN.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID
  
    $('#mouse-events').triggerHandler("submit")



    pageEvents('Moving From Start to Forces Frame 0','NA')
    setTimeout(function(){
        strt(false);
        initial(true);
        strtBTN.style.backgroundColor = '#8C979D';
    },250)
})

btn0.addEventListener('click',function(e){
    btn0.style.backgroundColor = 'red'

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 0'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn0.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Forces Frame 0 to Forces Frame 1','NA')
    setTimeout(function(){
        initial(false);
        frame0(true);
        btn0.style.backgroundColor = '#8C979D';
    },250)
})

btn11.addEventListener('click',function(e){
    btn11.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 11'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn11.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Forces Frame 1 to Forces Frame 0','NA')
    setTimeout(function(){
        frame0(false);
        initial(true);
        btn11.style.backgroundColor = "#8c979d"
    },250)
})

btn1.addEventListener('click',function(e){
    btn1.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 1'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn1.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Forces Frame 1 to Forces Frame 2','NA')
    setTimeout(function(){
        frame0(false);
        frame1(true);
        btn1.style.backgroundColor = "#8c979d"
    },250)
})

btn2.addEventListener('click',function(e){
    btn2.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 2'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn2.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Forces Frame 2 to Forces Frame 1','NA')
    setTimeout(function(){
        frame1(false);
        frame0(true);
        btn2.style.backgroundColor = "8c979d"
    },250)
})

btn3.addEventListener('click',function(e){
    btn3.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 3'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn3.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Forces Frame 2 to Review 1','NA')
    setTimeout(function(){
        frame1(false);
        review1(true)
        btn3.style.backgroundColor = "#8c979d"
    },250)
})

br1b.addEventListener("click",function(e){
    br1b.style.backgroundColor = 'red'

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button Review 1 Back'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = br1b.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Review1 to Forces Frame 3','NA')
    setTimeout(function(){
        review1(false)
        frame1(true)
        br1b.style.backgroundColor = "#8c979d"
    },250)
})

br1n.addEventListener("click",function(e){
    br1n.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button Review 1 Next'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = br1n.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Review 1 to Review 2','NA')
    setTimeout(function(){
        review1(false)
        review2(true)
        br1n.backgroundColor = "#8c979d"
    },250)
})

br2b.addEventListener("click",function(e){
    br2b.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button Review 2 Back'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = br2b.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Review 2 to Review 1','NA')
    setTimeout(function(){
        review2(false)
        review1(true)
        br2b.style.backgroundColor = "#8c979d"
    },250)
})

br2n.addEventListener("click",function(e){
    br2n.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button Review 2 Next'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = br2n.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Review 2 to Question','NA')
    setTimeout(function(){
        review2(false)
        question(true,false)
        br2n.style.backgroundColor = "#8c979d"
    },250)
})

btn8.addEventListener('click',function(){
    btn8.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Button 8'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = btn8.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Moving From Question to Review 2','NA')
    setTimeout(function(){
        question(false,false);
        frame1(true);
        btn8.style.backgroundColor = "8c979d"
    },250)
})

subBTN.addEventListener('click',function(e){
    subBTN.style.backgroundColor = "red"

    mouseForm = document.getElementById("mouse-events")

    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
  
    mouseForm.timeStamp.value = datetime
    mouseForm.mouseX.value = e.pageX
    mouseForm.mouseY.value = e.pageY
    mouseForm.pageState.value = pageSt
  
    mouseForm.event.value = 'Clicked Submit Button'
  
    mouseForm.videoNumber.value = "NA"
    mouseForm.videoTime.value = "NA"
  
    mouseForm.keyPressed.value = "NA"
  
    let rect = subBTN.getBoundingClientRect();
    mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
    mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`
    mouseForm.user.value = userID

    $('#mouse-events').triggerHandler("submit")

    pageEvents('Submitted Question','NA')
    setTimeout(function(){
        subBTN.style.backgroundColor = "8c979d"
    },250)
})

document.getElementById("nxt-btn").addEventListener("click",function(){
    document.getElementById("audio3").pause()
    question(false,false)
    cal(true)
})

document.getElementById("cal").addEventListener('click',function(){
    window.location.replace("/Force/Force_HLG/Post/")
})


/* 
###########################################
#                                         #
#       jQuery Event Listeners/           #
#           Form Submission               #
#                                         #
###########################################
*/

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
        complete: function(){
            setTimeout(function(){
                question(true,true);
            },250)
        }
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
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
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
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
      me.timeStamp.value = datetime
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

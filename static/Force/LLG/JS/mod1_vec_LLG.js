const start = Date.now();


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

const frame0 = (show) => {
  if (show) {
    document.querySelector("#cs0").style.display = "grid";
  }
  else {
    document.querySelector("#cs0").style.display = "none";
  }
};

const startScreen = (state) => {
  document.querySelector("#start").style.display = String(state);
}

document.querySelector("#start-btn").addEventListener('click',function(){
  document.querySelector("#start-btn").style.backgroundColor = "red";
  setTimeout(function(){
      startScreen('none');
      frame0('grid');
  },250)
})

const me = document.querySelector("#mouse-events")
const pe = document.querySelector("#page-events")

/* 
###########################################
#                                         #
#    Frame 1 function fires when going    #
#    from frame 0 -> 1 or 2 -> 1          #
#                                         #
#    If show === true:                    #
#        -Frame 1 displays                #
#        -Add event listeners             #
#         to buttons to display           #
#         content on mouse-enter          #
#                                         #
#    If show === false:                   #
#        - Frame 1 hidden                 #
#        - Clear listeners                #
#                                         #
#                                         #
###########################################
*/

const frame1 = (show) => {

  //Grab buttons
  const scalars = document.querySelector("#scalars");
  const dist = document.querySelector("#dist");
  const disp = document.querySelector("#disp");

  //Grab content
  const sclrStmnt = document.querySelector("#scalar-stmnt");
  const thermo = document.querySelector("#thermo");
  const watch = document.querySelector("#watch");
  const areaStmnt = document.querySelector("#area-stmnt");
  const areaPic = document.querySelector("#area-pic");
  const vecStmnt = document.querySelector("#vec-stmnt");
  const vecPic = document.querySelector("#vec-pic");
  const btn3 = document.querySelector("#btn3");
  const btn2 = document.querySelector("#btn2");


  //Content Functions 
  const sclr = (e,show) =>{
    if (show) {

      let locX = e.pageX;
      let locY = e.pageY;

      //Controls display of content
      sclrStmnt.style.opacity = 1;
      thermo.style.opacity = 1;
      watch.style.opacity = 1;
      scalars.style.backgroundColor = "#6c63ff";
      dist.style.opacity = 0.4;
      disp.style.opacity = 0.4;


      //Target "scalar div" content area
      btn = scalars


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = "entered scalars div";
      me.event.value = "entered scalars div";

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")
    } else {

      let evnt = "left scalars div";
      let locX = e.pageX;
      let locY = e.pageY;

      //Control display
      sclrStmnt.style.opacity = 0;
      thermo.style.opacity = 0;
      watch.style.opacity = 0;
      scalars.style.backgroundColor = "#8c979d";
      dist.style.opacity = 1;
      disp.style.opacity = 1;

      //Target "scalar div" content area
      btn = scalars

      //Grab Forms
      const pe = document.querySelector("#page-events")
      const me = document.querySelector("#mouse-events")

      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left scalars div';
      me.event.value = 'left scalars div';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3){
          document.querySelector("#btn3").style.opacity = 1;
        }
      },50)
    }
  }

  const dst = (e,show) => {

    let locX = e.pageX;
    let locY = e.pageY

    if (show) {

      areaStmnt.style.opacity =1;
      areaPic.style.opacity = 1;
      scalars.style.opacity =0.4;
      disp.style.opacity = 0.4;
      dist.style.backgroundColor = "#6c63ff";

      //Target "distance" content area
      btn = dist


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered distance area';
      me.event.value =  'entered distance area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")
} else {

      areaStmnt.style.opacity =0;
      areaPic.style.opacity = 0;
      scalars.style.opacity =1;
      disp.style.opacity = 1;
      dist.style.backgroundColor = "#8c979d";

      //Target "scalar div" content area
      btn = dist


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left distance area';
      me.event.value =  'left distance area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3){
          document.querySelector("#btn3").style.opacity = 1;
        }
      },50)
    }
  }

  const dsp = (e,show) => {

    let locX = e.pageX
    let locY = e.pageY

    if (show) {
      vecStmnt.style.opacity =1;
      vecPic.style.opacity = 1;
      scalars.style.opacity =0.4;
      dist.style.opacity = 0.4;
      disp.style.backgroundColor = "#6c63ff";

      //Target "displacement div" content area
      btn = disp


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered diplacement area';
      me.event.value =  'entered displacement area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

    } else {
      vecStmnt.style.opacity =0;
      vecPic.style.opacity = 0;
      scalars.style.opacity =1;
      dist.style.opacity = 1;
      disp.style.backgroundColor = "#8c979d";

      //Target "scalar div" content area
      btn = disp


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left displacement area';
      me.event.value =  'left displacement area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")


      setTimeout(function(){
        if (box1 && box2 && box3){
          document.querySelector("#btn3").style.opacity = 1;
        }
      },50)
    }
  }


  //Flags to know if button has been entered
  let box1 = false;
  let box2 = false;
  let box3 = false;

  if (show){
    //Show content-stage1
    document.querySelector("#cs1").style.display = "grid";

    //Add event listener to scalars button 
    // Shows content on scalar button mouseenter
    scalars.addEventListener("mouseenter",(e)=>{
      sclr(e,true);
    })
     // Hides content on scalar button mouseleave
    scalars.addEventListener("mouseleave",(e)=>{
      sclr(e,false);
      box1 = true;
    })

    //Add event listener to distance button
    //Shows content on mouseenter
    dist.addEventListener("mouseenter",(e)=>{
      if(box2) {
        dst(e,true)
      }
    })
    //Hides content on mouseleave
    dist.addEventListener("mouseleave",(e)=>{
      dst(e,false)
      box2 = true;
    })
    
    //Add event listener to displacement button
    //Shows content on mouseenter
    disp.addEventListener("mouseenter",(e)=>{
      dsp(e,true)
    })
    //hides content on mouseleave
    disp.addEventListener("mouseleave",(e)=>{
      dsp(e,false)
      box3 = true;
    })

    //If show, display the content stage div
    } else {
      document.querySelector("#cs1").style.display = "none";
      scalars.removeEventListener("mouseenter",()=>{
        sclr(e,true)
      })

      scalars.removeEventListener("mouseleave",()=>{
        sclr(e,false)
        box1 = true;
      })
  
      //Add event listener to distance button
      //Shows content on mouseenter
      dist.removeEventListener("mouseenter",()=>{
        if (box2){
          dst(e,true)
        }
      })
      //Hides content on mouseleave
      dist.removeEventListener("mouseleave",()=>{
        dst(e,false)
        box2 = true;
      })
      
      //Add event listener to displacement button
      //Shows content on mouseenter
      disp.removeEventListener("mouseenter",()=>{
        dsp(e,true)
        
      })
      //hides content on mouseleave
      disp.removeEventListener("mouseleave",()=>{
        dsp(e,false)
        box3 = true;
      })
    }}


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

  //Grab buttons
  const vecButt = document.querySelector("#vectorsbutt");
  const meaning = document.querySelector("#meaning");
  const FxButt = document.querySelector("#fx-butt");
  const FyButt = document.querySelector("#fy-butt");
  const BTN4 = document.querySelector("#btn4");
  const BTN5 = document.querySelector("#btn5");

  //Grab content
  const vec = document.querySelector("#vector-main");
  const vecStmnt = document.querySelector("#vectorStmnt");
  const lightX = document.querySelector("#lightx");
  const lightY = document.querySelector("#lighty");
  const xComp = document.querySelector("#xcomp");
  const yComp = document.querySelector("#ycomp"); 
  const compStmnt = document.querySelector("#compStmnt");
  const xCompStmnt = document.querySelector("#x-compStmnt")
  const yCompStmnt = document.querySelector("#y-compStmnt")
  const tri = document.querySelector("#tri"); 
  const eqn1 = document.querySelector("#eqn1"); 
  const eqn2 = document.querySelector("#eqn2"); 
  const eqn3 = document.querySelector("#eqn3"); 
  const eqn4 = document.querySelector("#eqn4"); 
  const eqn5 = document.querySelector("#eqn5"); 
  const eqn6 = document.querySelector("#eqn6");

  //Grab Forms

  const me = document.querySelector("#mouse-events")
  const pe = document.querySelector("#page-events")

  //Content Seen Flags
  let box1 = false;
  let box2 = false;
  let box3 = false;
  let box4 = false;

  //Content functions
  const vec_cont = (e,show) => {

    let locX = e.pageX
    let locY = e.pageY

    if (show) {
      vec.style.opacity = 1;
      vecStmnt.style.opacity = 1;
      meaning.style.opacity = 0.4;
      FxButt.style.opacity = 0.4;
      FyButt.style.opacity = 0.4;
      vecButt.style.backgroundColor = "#6c63ff";

      //Target "displacement div" content area
      btn = vecButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered vectors area';
      me.event.value =  'entered vectors area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

    } else {
      vec.style.opacity = 0;
      vecStmnt.style.opacity = 0;
      meaning.style.opacity = 1;
      FxButt.style.opacity = 1;
      FyButt.style.opacity = 1;
      vecButt.style.backgroundColor = "#8c979d";
      box1 = true;

      //Target "displacement div" content area
      btn = vecButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left vectors area';
      me.event.value =  'left vectors area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3 && box4){
          document.querySelector("#btn5").style.opacity = 1;
        }
      },50)
    }
  }

  const mean = (e,show) => {

    let locX = e.pageX
    let locY = e.pageY

    if (show) {
      document.querySelector("#cs2 .ctr").style.backgroundColor = "#535c66";
      lightX.style.opacity = 1;
      lightY.style.opacity = 1;
      xComp.style.opacity = 1;
      yComp.style.opacity = 1;
      compStmnt.style.opacity = 1;
      FyButt.style.opacity = 0.4;
      FxButt.style.opacity = 0.4;
      meaning.style.backgroundColor = "#6c63ff"
      vecButt.style.opacity = 0.4;

      //Target "displacement div" content area
      btn = meaning


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered meaning area';
      me.event.value =  'entered meaning area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

    } else {
      document.querySelector("#cs2 .ctr").style.backgroundColor = "#f5f5f5";
      lightX.style.opacity = 0;
      lightY.style.opacity = 0;
      xComp.style.opacity = 0;
      yComp.style.opacity = 0;
      compStmnt.style.opacity = 0;
      FyButt.style.opacity = 1;
      FxButt.style.opacity = 1;
      meaning.style.backgroundColor = "#8c979d";
      vecButt.style.opacity = 1;
      box2 = true;

      //Target "meaning div" content area
      btn = meaning


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left meaning area';
      me.event.value =  'left meaning area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3 && box4){
          document.querySelector("#btn5").style.opacity = 1;
        }
      },50)
    }
  }

  const Fxx = (e,show) => {

    let locX = e.pageX
    let locY = e.pageY

    if (show) {
      tri.style.opacity = 1;
      eqn1.style.opacity = 1;
      eqn2.style.opacity = 1;
      eqn3.style.opacity = 1;
      xCompStmnt.style.opacity = 1;
      FxButt.style.backgroundColor = "#6c63ff";
      FyButt.style.opacity = 0.4;
      meaning.style.opacity = 0.4;
      vecButt.style.opacity = 0.4;

      //Target "Fx div" content area
      btn = FxButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered Fx area';
      me.event.value =  'entered Fx area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

    } else {
      tri.style.opacity = 0;
      eqn1.style.opacity = 0;
      eqn2.style.opacity = 0;
      eqn3.style.opacity = 0;
      xCompStmnt.style.opacity = 0;
      FxButt.style.backgroundColor = "#8c979d";
      FyButt.style.opacity = 1;
      meaning.style.opacity = 1;
      vecButt.style.opacity = 1;
      box3=true;

      //Target "Fx div" content area
      btn = FxButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered meaning area';
      me.event.value =  'entered meaning area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3 && box4){
          document.querySelector("#btn5").style.opacity = 1;
        }
      },50)
    }
  }

  const Fyy = (e,show) => {

    let locX = e.pageX
    let locY = e.pageY

    if (show) {
      tri.style.opacity = 1;
      eqn4.style.opacity = 1;
      eqn5.style.opacity = 1;
      eqn6.style.opacity = 1;
      yCompStmnt.style.opacity = 1;
      FyButt.style.backgroundColor = "#6c63ff";
      FxButt.style.opacity = 0.4;
      meaning.style.opacity = 0.4;
      vecButt.style.opacity = 0.4;

      //Target "Fy div" content area
      btn = FyButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'entered Fy area';
      me.event.value =  'entered Fy area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

    } else {
      tri.style.opacity = 0;
      eqn4.style.opacity = 0;
      eqn5.style.opacity = 0;
      eqn6.style.opacity = 0;
      yCompStmnt.style.opacity = 0;
      FxButt.style.opacity = 1; 
      FyButt.style.backgroundColor = "#8c979d";
      meaning.style.opacity = 1;
      vecButt.style.opacity = 1;
      box4 = true;

      //Target "Fy div" content area
      btn = FyButt


      //Date Stamp
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      
      //Log event type
      pe.event.value = 'left Fy area';
      me.event.value =  'left Fy area';

      //Log timeStamp
      pe.timeStamp.value = datetime;
      me.timeStamp.value = datetime;

      //Get absolute mouseX and mouseY
      pe.clickX.value = locX;
      pe.clickY.value = locY;

      me.clickX.value = locX;
      me.clickY.value = locY;

      //Get item location on screen
      let rect = btn.getBoundingClientRect();
      me.clickedITMtl.value = `(${rect.left},${rect.top})`
      me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

      //Submit
      $("#page-events").triggerHandler("submit")
      $("#mouse-events").triggerHandler("submit")

      setTimeout(function(){
        if (box1 && box2 && box3 && box4){
          document.querySelector("#btn5").style.opacity = 1;
        }
      },50)
    }
  }

  if (show) {
    document.querySelector("#cs2").style.display = "grid";

  vecButt.addEventListener("mouseenter",(e)=>{
    vec_cont(e,true)
  })
  vecButt.addEventListener("mouseleave",(e) => {
    vec_cont(e,false);
  })

  meaning.addEventListener("mouseenter",(e)=>{
    mean(e,true)
  })        
  meaning.addEventListener("mouseleave",(e)=>{
    mean(e,false)
  })

  FxButt.addEventListener("mouseenter",(e)=>{
    Fxx(e,true)
  })
  FxButt.addEventListener("mouseleave",(e)=>{
    Fxx(e,false)
  })

  FyButt.addEventListener("mouseenter",(e)=>{
    if (box4) {
      Fyy(e,true);
    }
  })        
  FyButt.addEventListener("mouseleave",(e)=>{
    Fyy(e,false);
  })
    } else {
      document.querySelector("#cs2").style.display = "none";

      vecButt.removeEventListener("mouseenter",(e) => {
        vec_cont(e,true)
      })
      vecButt.removeEventListener("mouseleave",(e) => {
        vec_cont(e,false)
      })
    
      meaning.removeEventListener("mouseenter",(e)=>{
        mean(e,true);
      })        
      meaning.removeEventListener("mouseleave",(e)=>{
        mean(e,false)
      })
    
      FxButt.removeEventListener("mouseenter",(e)=>{
        Fxx(e,true)
      })
      FxButt.removeEventListener("mouseleave",(e)=>{
        Fxx(e,false)
      })
    
      FyButt.removeEventListener("mouseenter",(e)=>{
        if (box4) {
          Fyy(e,true)
        }
      })        
      FyButt.removeEventListener("mouseleave",(e)=>{
        Fyy(e,false)
      })
    }}

const frame3 = (show) => {
  if (show){
    document.querySelector("#cs3").style.display="grid";
  } else {
    document.querySelector("#cs3").style.display = "none";
  } 
  }

const ques = (show,feedback) => {
  if(show){
    document.querySelector("#question").style.display = "grid";
    if(feedback){
      document.querySelector("#sub-btn").style.display = "none";
      document.querySelector("#btn8").style.display = "none";
      document.querySelector("#cue53").style.opacity = 1;
      document.querySelector("#nxt-btn").style.display = "inline";
    }
  } else {
    document.querySelector("#question").style.display = "none";
  }
}

/* 
#################################
#                               #
#   jQuery Button Listeners     #
#                               #
#################################
*/

//Frame 0 buttons
$("#btn1").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn1")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events")
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 0 to frame 1";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 1 back";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame0(false);
    frame1(true);
    $("#btn1").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
});

//Frame 1 buttons
$("#btn2").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn2")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 1 to frame 0";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 1 back";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame1(false);
    frame0(true)
    $("#btn2").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

$("#btn3").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn3")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 1 to frame 2";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 1 next";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame1(false);
    frame2(true);
    $("#btn3").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

//Frame 2 buttons
$("#btn4").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn4")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 2 to frame 1";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 2 back";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame2(false);
    frame1(true);
    $("#btn4").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

$("#btn5").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn5")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 2 to frame 3";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 2 next";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame2(false);
    frame3(true);
    $("#btn5").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

//Frame 3 buttons
$("#btn6").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.getElementById("btn6")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events") 
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 3 to frame 2";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 3 back";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame3(false);
    frame2(true);
    $("#btn6").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

$("#btn7").on('click',function(e){
  $(this).css('backgroundColor','red')
  btn = document.querySelector("#btn7")
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events")  
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame 3 to frame question";
  pe.timeStamp.value = datetime;
  me.event.value = "frame 3 next";
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    frame3(false);
    ques(true,false);
    $("#btn7").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

//Frame question buttons
$("#btn8").on('click',function(e){
  btn = document.querySelector("#btn8")
  $(this).css('backgroundColor','red')
  const pe = document.querySelector("#page-events")
  const me = document.querySelector("#mouse-events")
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  pe.event.value = "frame question to frame 3";
  pe.timeStamp.value = datetime;
  me.event.value = 'clicked question back';
  me.timeStamp.value = datetime;
  me.clickX.value = e.pageX;
  me.clickY.value = e.pageY;
  let rect = btn.getBoundingClientRect();
  me.clickedITMtl.value = `(${rect.left},${rect.top})`
  me.clickedITMbr.value = `(${rect.right},${rect.bottom})`
  setTimeout(function(){
    ques(false,false)
    frame3(true)
    $("#btn8").css('backgroundColor',"#8c979d")
  },250)
  $("#page-events").triggerHandler("submit")
  $("#mouse-events").triggerHandler("submit")
})

let fired = false;
let prevX;
let prevY;

document.addEventListener("mousemove",function(e){
  let locX = e.pageX;
  let locY = e.pageY;
  const me = document.querySelector("#mouse-events2")
  if (!fired){
    me.event.value = 'mouse-start'
    me.mouseX.value = locX
    me.mouseY.value = locY
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    me.timeStamp.value = datetime
    $("#mouse-events2").triggerHandler("submit")
    fired = true;
    console.log('start')
  }
  setTimeout(function(){
    if(locX === prevX && locY === prevY){
      me.event.value = 'mouse-stop'
      me.mouseX.value = e.pageX
      me.mouseY.value = e.pageY
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
      me.timeStamp.value = datetime
      $("#mouse-events2").triggerHandler("submit")
      fired=false;
      console.log('stop')
    }
  },300)
  prevX = locX
  prevY = locY
})


document.addEventListener("click",function(e){
  const me = document.querySelector("#mouse-events2")
  me.event.value = 'click'
  me.mouseX.value = e.pageX
  me.mouseY.value = e.pageY
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
  me.timeStamp.value = datetime
  $("#mouse-events2").triggerHandler("submit")
})

$("#question-form").submit(function(e){
  e.preventDefault();
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
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
        ques(true,true);   
      }
      })
   });

$("#page-events").submit(function(e){
  e.preventDefault();
  form = $(this);
  const newDate = new Date();
  const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
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

  $("#mouse-events2").submit(function(e){
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

frame0(false);
frame1(false);

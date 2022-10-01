/* 
########################################################
#                                                      #
#    ---Controls The Functionality of LLG Pretest---   #
#                                                      #
#       Listens for mouse movement submits form        #
#       with mouse data. Submits content questions.    #
#           Logs user trajectory through pretest       #
#                                                      #  
########################################################
*/

const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

const startScreen = (state) => {
    document.querySelector("#start").style.display = String(state);
}

// Function that toggles display of pre_statement (first frame)
const pre_statement = state => {
    document.getElementById("pre-statement").style.display = String(state);}

//Function that toggles display of ques1
const ques1 = state => document.getElementById("q1-container").style.display = String(state);

//Function that toggles display of ques2
const ques2 = state => document.getElementById("q2-container").style.display = String(state);

//Function that toggles display of ques3
const ques3 = state => document.getElementById("q3-container").style.display = String(state);

//Function that toggles display of ques4
const ques4 = state => document.getElementById("q4-container").style.display = String(state);

//Function that toggles display of ques5
const ques5 = state => document.getElementById("q5-container").style.display = String(state);

//Function that toggles display of ques6
const ques6 = state => document.getElementById("q6-container").style.display = String(state);

//Function that toggles display of ques7
const ques7 = state => document.getElementById("q7-container").style.display = String(state);

//Function that toggles display of ques8
const ques8 = state => document.getElementById("q8-container").style.display = String(state);

//Function that toggles display of ques9
const ques9 = state => document.getElementById("q9-container").style.display = String(state);

//Function that toggles display of ques10
const ques10 = state => document.getElementById("q10-container").style.display = String(state);


/* 
#################################################
#                                               #
#     Questions are all display none until      #
#        user moves past pre-statement          #
#                                               #
#################################################
*/
pre_statement('none');
ques1('none');
ques2('none');
ques3('none');
ques4('none');
ques5('none');
ques6('none');
ques7('none');
ques8('none');
ques9('none');
ques10('none');


/* 
#########################################
#                                       #
#   Button Event Listeners              #
#       -Controls Flow of Page          #
#       -Captures Mouse Click           #
#                Data                   #
#       -Captures Button Location       #
#                                       #
#########################################
*/

//Initial screen with button at absolute center
document.querySelector("#start-btn").addEventListener('click',function(){
    document.querySelector("#start-btn").style.backgroundColor = "red";
    setTimeout(function(){
        startScreen('none');
        pre_statement('grid');
    },250)
})

//Add event listener to move from pre-statement to question1 on button click
document.querySelector('#pre-btn').addEventListener('click',() => {
    document.querySelector("#pre-btn").style.backgroundColor = "red";
    setTimeout(function(){
        pre_statement('none');
        ques1("grid");
        isPlaying();
    },250)
});

//Add event listener to #btn1 that turns #btn1 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn1").addEventListener('click',function(e){
    //grab button 1
    btn = document.getElementById("btn1")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question1 to question2";
    me.event.value = "click btn1 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn2 that turns #btn2 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn2").addEventListener('click',function(e){
    //grab button 2
    btn = document.getElementById("btn2")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question2 to question3";
    me.event.value = "click btn2 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn1 that turns #btn1 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn3").addEventListener('click',function(e){
    //grab button 3
    btn = document.getElementById("btn3")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question3 to question4";
    me.event.value = "click btn3 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value =clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn4 that turns #btn4 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn4").addEventListener('click',function(e){
    //grab button 4
    btn = document.getElementById("btn4")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question4 to question5";
    me.event.value = "click btn4 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn5 that turns #btn5 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn5").addEventListener('click',function(e){
    //grab button 5
    btn = document.getElementById("btn5")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question5 to question6";
    me.event.value = "click btn5 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn6 that turns #btn6 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn6").addEventListener('click',function(e){
    //grab button 6
    btn = document.getElementById("btn6")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question6 to question7";
    me.event.value = "click btn6 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y

    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn7 that turns #btn7 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn7").addEventListener('click',function(e){
    //grab button 7
    btn = document.getElementById("btn7")
    btn.style.backgroundColor = "red";

    let clickX = e.pageX;
    let clickY = e.pageY;

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question7 to question8";
    me.event.value = "click btn7 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn8 that turns #btn8 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn8").addEventListener('click',function(e){
    //grab button 1
    btn = document.getElementById("btn8")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question8 to question9";
    me.event.value = "click btn8 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn9 that turns #btn9 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn9").addEventListener('click',function(e){
    //grab button 1
    btn = document.getElementById("btn9")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question9 to question10";
    me.event.value = "click btn9 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = clickX;
    me.clickY.value = clickY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
})

//Add event listener to #btn10 that turns #btn10 red, logs the click location and the button location
//Submits the relevant forms
document.querySelector("#btn10").addEventListener('click',function(e){
    //grab button 1
    btn = document.getElementById("btn10")
    btn.style.backgroundColor = "red";

    //grab the forms
    me = document.querySelector("#mouse-events");
    pe = document.querySelector("#page-events");

    let clickX = e.pageX;
    let clickY = e.pageY;

    //create datetime
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    
    //Log mouse events and page events
    pe.event.value = "question10 to next page";
    me.event.value = "click btn10 submit";

    //Log timestamp
    pe.timeStamp.value = datetime;
    me.timeStamp.value = datetime;

    //Get absolute mouseX and mouse Y
    pe.clickX.value = clickX;
    pe.clickY.value = clickY;

    me.clickX.value = e.pageX;
    me.clickY.value = e.pageY;

    //Get location of #btn1 on page
    let rect = btn.getBoundingClientRect();
    me.clickedITMtl.value = `(${rect.left},${rect.top})`
    me.clickedITMbr.value = `(${rect.right},${rect.bottom})`

    //Submit forms
    $("#page-events").triggerHandler("submit")
    $("#mouse-events").triggerHandler("submit")
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

//Logs clicks
document.addEventListener("click",function(e){
    const me = document.querySelector("#mouse-events2")
    me.event.value = 'mouse-location'
    me.mouseX.value = e.pageX
    me.mouseY.value = e.pageY
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    me.timeStamp.value = datetime
    mouseMove = false;
    $("#mouse-events2").triggerHandler("submit")
})

/* 
################################
#                              #
#   Quiz Question Submission   #
#                              #
#    Async From Submission     #
#                              #
################################
*/

//jQuery listens for submission of question 1
$("#question1").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q1','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques1('none');ques2('grid')}
         });
    },250)
})

//jQuery listens for submission of question 2
$("#question2").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q2','timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques2("none"); ques3("grid");}
        })
    },250)
     });

//jQuery listens for submission of question 3
$("#question3").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q3','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques3("none"); ques4("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 4
$("#question4").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q4','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques4("none"); ques5("grid");}
            })
    },250)
    });

//jQuery listens for submission of question 5
$("#question5").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q5','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques5("none"); ques6("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 6
$("#question6").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q6','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques6("none"); ques7("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 7
$("#question7").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q7','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques7("none"); ques8("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 8
$("#question8").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission','question': 'q8','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques8("none"); ques9("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 9
$("#question9").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission','question': 'q9','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){ques9("none"); ques10("grid");}
            })
    },250)
     });

//jQuery listens for submission of question 10
$("#question10").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q10','timeStamp':datetime},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){window.location.replace('/Force/Force_LLG/vectors')}
            })
    },250)
     });

/* 
#################################
#                               #
#   Event Submits Event Forms   #
#                               #
#################################
*/


$("#page-events").submit(function(e){
e.preventDefault();
form = $(this);
const url = window.location;
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
$.ajax({
    headers: {'X-CSRFToken': csrftoken,'event':'page'},
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
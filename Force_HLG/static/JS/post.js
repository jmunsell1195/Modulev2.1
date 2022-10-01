/* 
########################################################
#                                                      #
#    ---Controls The Functionality of HLG Pretest---   #
#                                                      #
#       Listens for mouse movement submits form        #
#       with mouse data. Submits content questions.    #
#           Logs user trajectory through pretest       #
#                                                      #  
########################################################
*/

let pageSt = 'start'

strtDIV = document.getElementById("start")
preDIV = document.getElementById("pre-statement")
q1 = document.getElementById('q1-container')
q2 = document.getElementById('q2-container')
q3 = document.getElementById('q3-container')
q4 = document.getElementById('q4-container')
q5 = document.getElementById('q5-container')
q6 = document.getElementById('q6-container')
q7 = document.getElementById('q7-container')
q8 = document.getElementById('q8-container')
q9 = document.getElementById('q9-container')
q10 = document.getElementById('q10-container')

const isPlaying = () => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
}

const startScreen = (show) => {
    if (show){
        strtDIV.style.display = 'grid';
    } else {
        strtDIV.style.display = 'none';
    }
    
}

// Function that toggles display of pre_statement (first frame)
const pre_statement = (show) => {
    if (show) {
        preDIV.style.display = 'grid'
        pageSt = 'Instructions'
    } else{
        preDIV.style.display = 'none'
    }
}

//Function that toggles display of ques1
const ques1 = (show) => {
    if(show){
        pageSt = 'Question 1'
        q1.style.display = 'grid'
    } else {
        q1.style.display = 'none'
    }
};

//Function that toggles display of ques2
const ques2 = (show) => {
    if(show){
        pageSt = 'Question 2'
        q2.style.display = 'grid'
    } else {
        q2.style.display = 'none'
    }
};

//Function that toggles display of ques3
const ques3 = (show) => {
    if(show){
        pageSt = 'Question 3'
        q3.style.display = 'grid'
    } else {
        q3.style.display = 'none'
    }
};

//Function that toggles display of ques4
const ques4 = (show) => {
    if(show){
        pageSt = 'Question 4'
        q4.style.display = 'grid'
    } else {
        q4.style.display = 'none'
    }
};

//Function that toggles display of ques5
const ques5 = (show) => {
    if(show){
        pageSt = 'Question 5'
        q5.style.display = 'grid'
    } else {
        q5.style.display = 'none'
    }
};

//Function that toggles display of ques6
const ques6 = (show) => {
    if(show){
        pageSt = 'Question 6'
        q6.style.display = 'grid'
    } else {
        q6.style.display = 'none'
    }
};

//Function that toggles display of ques7
const ques7 = (show) => {
    if(show){
        pageSt = 'Question 7'
        q7.style.display = 'grid'
    } else {
        q7.style.display = 'none'
    }
};

//Function that toggles display of ques8
const ques8 = (show) => {
    if(show){
        pageSt = 'Question 8'
        q8.style.display = 'grid'
    } else {
        q8.style.display = 'none'
    }
};

//Function that toggles display of ques9
const ques9 = (show) => {
    if(show){
        pageSt = 'Question 9'
        q9.style.display = 'grid'
    } else {
        q9.style.display = 'none'
    }
};

//Function that toggles display of ques10
const ques10 = (show) => {
    if(show){
        pageSt = 'Question 10'
        q10.style.display = 'grid'
    } else {
        q10.style.display = 'none'
    }
};


/* 
#################################################
#                                               #
#     Questions are all display none until      #
#        user moves past pre-statement          #
#                                               #
#################################################
*/
pre_statement(false);
ques1(false);
ques2(false);
ques3(false);
ques4(false);
ques5(false);
ques6(false);
ques7(false);
ques8(false);
ques9(false);
ques10(false);


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

// Grab buttons
strtBTN = document.getElementById('start-btn')
preBTN = document.getElementById('pre-btn')
btn1 = document.getElementById("btn1")
btn2 = document.getElementById("btn2")
btn3 = document.getElementById("btn3")
btn4 = document.getElementById("btn4")
btn5 = document.getElementById("btn5")
btn6 = document.getElementById("btn6")
btn7 = document.getElementById("btn7")
btn8 = document.getElementById("btn8")
btn9 = document.getElementById("btn9")
btn10 = document.getElementById("btn10")

//Initial screen with button at absolute center
strtBTN.addEventListener('click',function(e){
    strtBTN.style.backgroundColor = "red";
    setTimeout(function(){

        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Moving From Start to Instructions'
        mouseForm.event.value = "Clicked Start Button"

        let rect = strtBTN.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

        startScreen(false);
        pre_statement(true);
    },250)
})

//Add event listener to move from pre-statement to question1 on button click
preBTN.addEventListener('click',function(e){
    preBTN.style.backgroundColor = "red";
    setTimeout(function(){

        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt

        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Moving From Instructions to Question 1'
        mouseForm.event.value = "Clicked pre-button"

        let rect = preBTN.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")


        pre_statement(false);
        ques4(true);
        isPlaying();


    },250)
});

//Add event listener to #btn1 that turns #btn1 red, logs the click location and the button location
//Submits the relevant forms
btn1.addEventListener('click',function(e){
    btn1.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 1'
        mouseForm.event.value = "Clicked Button 1"

        let rect = btn1.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn2 that turns #btn2 red, logs the click location and the button location
//Submits the relevant forms
btn2.addEventListener('click',function(e){
    btn2.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 2'
        mouseForm.event.value = "Clicked Button 2"

        let rect = btn2.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn1 that turns #btn1 red, logs the click location and the button location
//Submits the relevant forms
btn3.addEventListener('click',function(e){
    btn3.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 3'
        mouseForm.event.value = "Clicked Button 3"

        let rect = btn3.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn4 that turns #btn4 red, logs the click location and the button location
//Submits the relevant forms
btn4.addEventListener('click',function(e){
    btn4.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 4'
        mouseForm.event.value = "Clicked Button 4"

        let rect = btn4.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn5 that turns #btn5 red, logs the click location and the button location
//Submits the relevant forms
btn5.addEventListener('click',function(e){
    btn5.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 5'
        mouseForm.event.value = "Clicked Button 5"

        let rect = btn5.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn6 that turns #btn6 red, logs the click location and the button location
//Submits the relevant forms
btn6.addEventListener('click',function(e){
    btn6.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 6'
        mouseForm.event.value = "Clicked Button 6"

        let rect = btn6.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn7 that turns #btn7 red, logs the click location and the button location
//Submits the relevant forms
btn7.addEventListener('click',function(e){
    btn7.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 7'
        mouseForm.event.value = "Clicked Button 7"

        let rect = btn7.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn8 that turns #btn8 red, logs the click location and the button location
//Submits the relevant forms
btn8.addEventListener('click',function(e){
    btn8.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 8'
        mouseForm.event.value = "Clicked Button 8"

        let rect = btn8.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn9 that turns #btn9 red, logs the click location and the button location
//Submits the relevant forms
btn9.addEventListener('click',function(e){
    btn9.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 9'
        mouseForm.event.value = "Clicked Button 9"

        let rect = btn9.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
})

//Add event listener to #btn10 that turns #btn10 red, logs the click location and the button location
//Submits the relevant forms
btn10.addEventListener('click',function(e){
    btn10.style.backgroundColor = "red"
    setTimeout(function(){
        pageForm = document.getElementById("page-events")
        mouseForm = document.getElementById("mouse-events")

        pageForm.pageState.value = pageSt
        mouseForm.pageState.value = pageSt


        const newDate = new Date();
        const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
 
        pageForm.timeStamp.value = datetime
        mouseForm.timeStamp.value = datetime

        pageForm.event.value = 'Submitted Question 10'
        mouseForm.event.value = "Clicked Button 10"

        let rect = btn10.getBoundingClientRect();
        mouseForm.clickedITMtl.value = `(${rect.left},${rect.top})`
        mouseForm.clickedITMbr.value  = `(${rect.right},${rect.bottom})`

        mouseForm.mouseX.value = e.pageX
        mouseForm.mouseY.value = e.pageY

        $("#page-events").triggerHandler("submit")
        $("#mouse-events").triggerHandler("submit")

    },250)
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
    me.clickedITMtl.value = ``
    me.clickedITMbr.value  = ``
    $("#mouse-events").triggerHandler("submit")
    fired = true;
    console.log('start')
  }
  setTimeout(function(){
    if(locX === prevX && locY === prevY){
      me.event.value = 'mouse-stop'
      me.mouseX.value = e.pageX
      me.mouseY.value = e.pageY
      const newDate = new Date();
      const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
      me.timeStamp.value = datetime
      me.clickedITMtl.value = ``
      me.clickedITMbr.value  = ``
      $("#mouse-events").triggerHandler("submit")
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
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    me.timeStamp.value = datetime
    mouseMove = false;
    me.clickedITMtl.value = ``
    me.clickedITMbr.value  = ``
    $("#mouse-events").triggerHandler("submit")
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
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q1','timeStamp':datetime,'pageState':'Question 1'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques1(false);
                ques2(true);
            }
         });
    },250)
})

//jQuery listens for submission of question 2
$("#question2").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q2','timeStamp':datetime,'pageState':'Question 2'},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){
            ques2(false)
            ques3(true)
        }
        })
    },250)
     });

//jQuery listens for submission of question 3
$("#question3").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q3','timeStamp':datetime,'pageState':'Question 3'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques3(false)
                ques4(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 4
$("#question4").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q4','timeStamp':datetime,'pageState':'Question 4'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques4(false)
                ques5(true)
            }
            })
    },250)
    });

//jQuery listens for submission of question 5
$("#question5").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q5','timeStamp':datetime,'pageState':'Question 5'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques5(false)
                ques6(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 6
$("#question6").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q6','timeStamp':datetime,'pageState':'Question 6'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques6(false)
                ques7(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 7
$("#question7").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q7','timeStamp':datetime,'pageState':'Question 7'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques7(false)
                ques8(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 8
$("#question8").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission','question': 'q8','timeStamp':datetime,'pageState':'Question 8'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques8(false)
                ques9(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 9
$("#question9").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission','question': 'q9','timeStamp':datetime,'pageState':'Question 9'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){
                ques9(false)
                ques10(true)
            }
            })
    },250)
     });

//jQuery listens for submission of question 10
$("#question10").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setTimeout(function(){
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'submission', 'question': 'q10','timeStamp':datetime,'pageState':'Question 10'},
            type:"POST",
            url: url,
            data: form.serialize(),
            complete: function(){window.location.replace('/Force/Force_HLG/Complete/')}
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
    const form = $(this);
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        $.ajax({
            headers: {'X-CSRFToken': csrftoken, 'event':'page'},
            type:"POST",
            url: url,
            data: form.serialize(),
            })
     });

$("#mouse-events").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'event':'mouse'},
        type:"POST",
        url: url,
        data: form.serialize(),
        })
    });




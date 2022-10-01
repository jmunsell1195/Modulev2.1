// Count Clicks
let clicks = 0;

document.addEventListener('click',function(){clicks += 1})

//Time on page load
let start = Date.now();

// Function that toggles display of pre_statement (first frame)
const pre_statement = state => {
    document.getElementById("navbar").style.opacity = "0.4";
    document.getElementById("bottombar").style.opacity = "0.4";
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

// ques1('none');
// ques2('none');
// ques3('none');
// ques4('none');
// ques5('none');
// ques6('none');
// ques7('none');
// ques8('none');
// ques9('none');
// ques10('none');

//Add event listener to move from pre-statement to question1 on button click
document.querySelector('#pre-btn').addEventListener('click',() => {pre_statement('none');ques1("grid")});


//Submit Meta Data through headers rather than 
//fill in client-side to reduce js footprint

//jQuery listens for submission of question 1
$("#question1").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q1', 'num_clicks': clicks, 'quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){
            $("#btn1").style.backgroundColor = "red"
            setTimeout(function(){
                ques1("none"); ques2("grid");
            },250)}
        })
     });

//jQuery listens for submission of question 2
$("#question2").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    start = Date.now();
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q2','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques2("none"); ques3("grid");}
        })
     });

//jQuery listens for submission of question 3
$("#question3").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q3','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques3("none"); ques4("grid");}
        })
     });

//jQuery listens for submission of question 4
$("#question4").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    start = Date.now()
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q4','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques4("none"); ques5("grid");}
        })
    });

//jQuery listens for submission of question 5
$("#question5").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q5','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques5("none"); ques6("grid");}
        })
     });

//jQuery listens for submission of question 6
$("#question6").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    let url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q6','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques6("none"); ques7("grid");}
        })
     });

//jQuery listens for submission of question 7
$("#question7").submit(function(e){
    e.preventDefault();
    const form = $(this);
    let quiz1time = (Date.now() - start)/1000;
    let url = form.attr("action");
    start = Date.now();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q7','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques7("none"); ques8("grid");}
        })
     });

//jQuery listens for submission of question 8
$("#question8").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    const url = form.attr("action");
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q8','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques8("none"); ques9("grid");}
        })
     });

//jQuery listens for submission of question 9
$("#question9").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q9','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ques9("none"); ques10("grid");}
        })
     });

//jQuery listens for submission of question 10
$("#question10").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const quiz1time = (Date.now() - start)/1000;
    start = Date.now();
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    const url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken, 'question': 'q10','quiz1time':quiz1time,'timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){window.location.replace('/Force/Force_HLG/vectors')}
        })
     });
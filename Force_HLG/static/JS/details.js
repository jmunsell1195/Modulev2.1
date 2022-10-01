const main0 = (show) => {
    if (show) {
        document.getElementById("main0").style.display = 'grid';
        const audio = document.getElementById("audio")
        document.getElementById("btn0").style.opacity = "1"
    } else {
        document.getElementById("main0").style.display = 'none';
    }
}

const main1 = (show) => {
    if (show) {
        document.getElementById("main1").style.display = 'grid';
    } else {
        document.getElementById("main1").style.display = 'none';
    }
}
const main2 = (show) => {
    if (show) {
        document.getElementById("main2").style.display = 'grid';
    } else {
        document.getElementById("main2").style.display = 'none';
    }
}
const main3 = (show) => {
    if (show) {
        document.getElementById("main3").style.display = 'grid';
    } else {
        document.getElementById("main3").style.display = 'none';
    }
}

document.getElementById("btn0").addEventListener("click",function(){
    main0(false);
    main1(true);
})

document.getElementById("btn1").addEventListener("click",function(){
    main1(false);
    main2(true);
})
document.getElementById("btn2").addEventListener("click",function(){
    main2(false);
    main1(true);
})
document.getElementById("btn3").addEventListener("click",function(){
    main2(false);
    main3(true);
})
document.getElementById("btn4").addEventListener("click",function(){
    main3(false);
    main2(true);
})
document.getElementById("btn5").addEventListener("click",function(){
    main2(false);
    main3(true);
})
const nextPage = () => {
    window.location.replace('warmup/')
}

main1(true)
main0(false);
main2(false);
main3(false);



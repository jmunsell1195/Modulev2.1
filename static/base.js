const navStatus = (navText,Active) => {
    document.querySelector("#navbar").querySelector(".navbar-logo").innerHTML += String(navText);
    switch (Active) {
        case 1:
            document.querySelector("#navbar").querySelector(".tabs").querySelector("Login").setAttribute('class','active');
            break;
        case 2:
            document.querySelector("#navbar").querySelector(".tabs").querySelector("Warm-up").setAttribute('class','active');
            break;
        case 3:
            document.querySelector("#navbar").querySelector(".tabs").querySelector("Instruction").setAttribute('class','active');
            break;
        case 4:
            document.querySelector("#navbar").querySelector(".tabs").querySelector("Final").setAttribute('class','active');
            break;
    }
}
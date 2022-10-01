const back = () => {
    $("#login-container").css({"display":"flex","padding":"5vw","margin":"5vw","height":"30vw"});
    $("#help").css("display","none");
    $("#log-img").css("width","100%");

  };

  const help = () => {
    $("#login-container").css("display","none");
    $("#help").css("display","grid");
    try {$(".error").css("display","none")}
    catch {pass};
  }
    const login = () => {
      window.location.replace('/Auth/login/')
    }


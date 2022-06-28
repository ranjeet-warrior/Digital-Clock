function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am");
  
    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
  }
  setInterval(clock, 1000);
  
  function Makediv() {
    var container = document.createElement("div");
    // container.className="grid-item"
    container.id = "dynamic-block";
    document.getElementById("grid-container1").appendChild(container);
    var invalue = document.getElementById("wakeUpTimeSelector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML = "Wake up time" + value;
  }
  
  function settime() {
    var i = document.getElementById("wakeUpTimeSelector").value;
    var hours = new Date().getHours();
    var j = document.getElementById("lunchTimeSelector").value;
    var hours = new Date().getHours();
    var k = document.getElementById("napTimeSelector").value;
    var hours = new Date().getHours();
    var l = document.getElementById("sleepTimeSelector").value;
    var hours = new Date().getHours();
  
    if (i == hours) {
      document.getElementById("img-container").style.backgroundImage =
        "url(./assests/night.jpg)";
      document.getElementById("text-container").innerHTML =
        "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("morning-text").innerHTML = "GOOD MORNING!!";
    }
    if (j == hours) {
      document.getElementById("img-container").style.backgroundImage =
        "url(./assests/lunchTime.png)";
      document.getElementById("text-container").innerHTML =
        "LETS HAVE SOME LUNCH !!";
      document.getElementById("morning-text").innerHTML = "GOOD AFTERNOON!!";
    }
    if (k == hours) {
      document.getElementById("img-container").style.backgroundImage =
        "url(./assests/EveningTime.png)";
      document.getElementById("text-container").innerHTML =
        "STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
      document.getElementById("morning-text").innerHTML = "GOOD EVENING!!";
    }
    if (l == hours) {
      document.getElementById("img-container").style.backgroundImage =
        "url(./assests/goodNight.png)";
      document.getElementById("text-container").innerHTML =
        "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("morning-text").innerHTML = "GOOD NIGHT!!";
    }
  
    Makediv();
  }
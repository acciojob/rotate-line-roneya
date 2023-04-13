//your JS code here. If required.
 function rotateLine() {
      var line = document.getElementById("line");
      var rotationAngle = 0;
      setInterval(function() {
        rotationAngle += 5;
        line.style.transform = "rotate(" + rotationAngle + "deg)";
      }, 50);
    }
    rotateLine();
 window.requestAnimationFrame = (function () {
     return (
         window.requestAnimationFrame ||
         window.requestAnimationFrame ||
         window.requestAnimationFrame ||
         function (callback) {
             window.setTimeout(callback, 1000 / 60);
         }
     );
 })();

//  initialize the clock in a self-invoking function
 (function clock() {
     var hour = document.getElementById("hour"),
     min = document.getElementById("min"),
     sec = document.getElementById("sec");
     loop
     (function loop () {
         requeatAnimFrame(loop);
         draw();
     })();

      hands
     function draw() {
         var now = new Date(), now
         then = new Date(
             now.getFullYear(),
             now.getMonth(),
             now.getDate(),
             0,
             0,
             0
        ), midnight
         diffInMill = now.getTime() - then.getTime(), // difference in milliseconds
         h = diffInMill / (1000 * 60 * 60), //hours
         m = h * 60, minutes
         s = m * 60; seconds
        //  rotate the hands accordingly
         sec.style.webkitTranform = "rotate(" + s * 6 + "deg)";
         hour.style.webkitTranform = "rotate(" + (h * 30 + h/2) + "deg)";
         min.style.webkitTranform = "rotate(" + m * 6 + "deg)";
     }
 })();


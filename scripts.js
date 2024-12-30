
var focus = false;
function focuswindow() { focus = true; }
function hidewindow() { focus = false; }

window.onfocus = focuswindow;
window.onblur = hidewindow;


function sayHello(){
    if (focus == true){
        document.title = "This is a webpage"
    } else {
        document.title = "we miss you 🍆"
    }
}
setInterval(sayHello, 100); // Calls sayHello every 1 second (1000 milliseconds)
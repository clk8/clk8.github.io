
function sudo() {
Math.PI = 0;
window.banPlayer = function() {return 0;}
window.banPlayerConfirmed = function() {return 0;}
window.punishPopup = function() {return 0;}
window.punishPlayer = function() {return 0;}
}
sudo()
var url = "https://unpkg.com/three@latest/build/three.min.js"
    var xml;
    xml = new XMLHttpRequest();
    xml.open("GET", url, false);
    xml.send();
    eval(xml.responseText); //load three
var oldDoc1 = document;
var kx = oldDoc1.createElement("script")
kx.innerHTML = `

(function (open) {
XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
    if(/results/.test(url)) {
      console.log(this.onreadystatechange);
        this.addEventListener("readystatechange", function () {
            console.log('readystate: ' + this.readyState);
            if(this.responseText !== '') {
                this.responseText = this.responseText.replace(".toString()","")
            }
        }, false);
    }
    open.call(this, method, url, async, user, pass);
};
})(XMLHttpRequest.prototype.open);


`;
kx.type = "module"
document.body.prepend(kx)
var openx = window.open
var win = openx('about:blank','Krunker Worker v1.21');

win.document.write(`<html>
<head>
<title>
==> Krunker Worker <===
</title>
<style>





html {
background:#121111;
border:4px solid;
border-color:#598f5c;
width:98%;
heigth:98%;
min-width:98% !important;
min-heigth:98% !important;
font-family:Arial;
color:white;
border-radius:5px;
position: absolute;
top:0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
font-size:17px;
}
input {
border-radius:1px;
}
input[type='checkbox'] {
position: relative;
appearance: none; outline: none;
width: 50px; height: 30px;
background-color: #ffffff; border: 1px solid #D9DADC;
border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
transition-duration: 200ms;
}
input[type='checkbox']:after {
content: "";
position: absolute;
top: 1px; left: 1px;
width: 26px; height: 26px;
background-color: transparent;
border-radius: 50%; box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
}
input[type='checkbox']:checked {
border-color: #598f5c;
box-shadow: inset 20px 0 0 0 #598f5c;
}
input[type='checkbox']:checked:after {
left: 20px;
box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
}
button {
background:black;
color:white;
border-radius:2px;
box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
}




















</style>
</head>
<body>
<script>
</script>
<center><h2>
<font color = "#227332">
	Krunker Worker by Viruster and EroLIE

</font>

</h2>
<font size = "8px">Leading krunker cheat in 2022.</font>
</center>
<hr>

<button id = "esp">Player simple ESP </button><br>
<button id = "ab">AimBot </button><br>
<button id = "cs">Go to the Comsos </button><br>
Super logger:<br>
<textarea id = "ws" value = "====! LOGS !====">
</textarea><br>
<center><h2>Aim bot</h2></center><hr>
AimBot minimal aim distance:<input id = "abmd"><br>
Defect level:<input id = "pp"><br>
Delay before aim:<input id = "delay"><br>
Assistence aimbot mode: <input type = "checkbox" id = "ass">
AI aimbot mode: <input type = "checkbox" id = "ai">
<br>

<center><h2>Auto B-Hop</h2></center>
<hr>
Enable/Disable: <input type = "checkbox" id = "abh">
</body>
</html>


`);
var sp;
var rnum = 0;
WebSocket.prototype.request = WebSocket.prototype.send
WebSocket.prototype.send = function(d) {
  rnum += 1;
  var data = new Uint8Array(d)
  win.document.getElementById("ws").value += data+ "\r\n";
  sudo()
  if (rnum == 1) {
  sp = this;
  win.document.getElementById("ws").value += "WebSocket handshaked!\r\n";
  WebSocket.prototype.send = WebSocket.prototype.request
  win.document.getElementById("ws").value += "Authentification passed!\r\n";
  }
  this.request(d)
  
  
  
}


const tempVector = new THREE.Vector3();

const tempObject = new THREE.Object3D();
tempObject.rotation.order = 'YXZ';

const geometry = new THREE.EdgesGeometry( new THREE.BoxGeometry( 5, 15, 5 ).translate( 0, 7.5, 0 ) );

const material = new THREE.RawShaderMaterial( {
	vertexShader: `

	attribute vec3 position;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	void main() {

		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		gl_Position.z = 1.0;

	}

	`,
	fragmentShader: `

	void main() {

		gl_FragColor = vec4( 0.0, 1.0, 0.0, 1.0 );

	}

	`
} );

let scene;

WeakMap.prototype.set = new Proxy( WeakMap.prototype.set, {
	apply( target, thisArgs, args ) {

		if ( args[ 0 ].type === 'Scene' && args[ 0 ].name === 'Main' ) {

			scene = args[ 0 ];

		}

		return Reflect.apply( ...arguments );

	}
} );
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animate() {
	window.requestAnimationFrame(animate)
	var pog = parseInt(win.document.getElementById("pp").value)
	var delay = parseInt(win.document.getElementById("delay").value)
	var fov = parseInt(win.document.getElementById('fov').value);
	var ai = win.document.getElementById('ai').checked;


	if ( scene === undefined ) {

		return;

	}
	
	const players = [];

	let myPlayer;

	for ( let i = 0; i < scene.children.length; i ++ ) {

		const child = scene.children[ i ];

		if ( child.type === 'Object3D' ) {

			try {

				if ( child.children[ 0 ].children[ 0 ].type === 'PerspectiveCamera' ) {

					myPlayer = child;

				} else {

					players.push( child );

					child.visible = espon || child.visible;

					if ( ! child.box ) {

						const box = new THREE.LineSegments( geometry, material );
						box.frustumCulled = false;

						child.add( box );

						child.box = box;

					}

					child.box.visible = espon;
				if (abon) {
								let targetPlayer;
	let minDistance = parseInt(win.document.getElementById("abmd").value);
 
	for ( let i = 0; i < players.length; i ++ ) {
 
		const player = players[ i ];
 
		if ( player.position.x === myPlayer.position.x && player.position.z === myPlayer.position.z ) {
 
			continue;
 
		}
 		sleep(delay)
		const distance = player.position.distanceTo( myPlayer.position );
		myPlayer.fov = fov;
 
		if ( distance < minDistance ) {
		 	
 
			targetPlayer = player;
 
			minDistance = distance;

 
		}
 
	}
 
	if ( targetPlayer === undefined ) {
 
		return;
 
	}
 	if (win.document.getElementById("abh").checked) {
	            if (player.yVel < -0.04) {
                document.querySelectorAll("canvas")[0].dispatchEvent(new KeyboardEvent('keyup', {'key': 'shift'}));
                setTimeout(() => {
                 document.querySelectorAll("canvas")[0].dispatchEvent(new KeyboardEvent('keydown', {'key': 'shift'}));
                }, 350);
                // ToDo:space
	document.querySelectorAll("canvas")[0].dispatchEvent(new KeyboardEvent('keyup', {'key': 'space'}));
	document.querySelectorAll("canvas")[0].dispatchEvent(new KeyboardEvent('keydown', {'key': 'space'}));
            }
	}
	tempVector.setScalar( 0 );
 
	targetPlayer.children[ 0 ].children[ 0 ].localToWorld( tempVector );
 
	tempObject.position.copy( myPlayer.position );
 
	tempObject.lookAt( tempVector );
	if (ai) {
	if (player.position.x > myPlayer.position.x)  {
	myPlayer.rotation.y = tempObject.rotation.y + Math.PI;
	} else {
	myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x + pog
	}
	if (player.position.x == myPlayer.position.x) {
		myPlayer.rotation.y = tempObject.rotation.y;
		myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x + pog
		myPlayer.rotation.y = tempObject.rotation.y + Math.PI;
	}
	if (player.position.x < myPlayer.position.x) {
		myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x;
		myPlayer.rotation.y = tempObject.rotation.y + Math.PI;
	}

	return;
	}
 	if (win.document.getElementById("ass").checked) {
	if (player.position.y == myPlayer.position.y)  {
	 myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x + pog
	}
	if (player.position.x == myPlayer.position.x)  {
	myPlayer.rotation.y = tempObject.rotation.y + Math.PI + pog
	}
	if (player.position.y != myPlayer.position.y)  {
	
	myPlayer.rotation.y = tempObject.rotation.y + Math.PI + pog - 0.05
	}
	if (player.position.x != myPlayer.position.x)  {
	 myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x + pog - 0.05
	}
	}
	
	myPlayer.rotation.y = tempObject.rotation.y + Math.PI;
	myPlayer.children[ 0 ].rotation.x = - tempObject.rotation.x;
	
	
}

				}

			} catch ( err ) {}

		

		}

	}

}

animate()
var espon = false;
var esp = win.document.querySelector("#esp")
esp.addEventListener('click',function(){
    espon = !espon
})
var abon = false;
var ab = win.document.querySelector("#ab")
ab.addEventListener('click',function(){
    abon = !abon
})




(function(){
var repl = String.prototype.replace;





	function hook_join(wnd) {
		const array_join = wnd.Array.prototype.join;
		wnd.Array.prototype.join = new Proxy(array_join, {
			apply: function(target, _this, _arguments) {
				var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
				if (_arguments.length && _arguments[0] == '' && _this.length > 1000) {
					var game_js = ret;
					game_js = game_js.repl(/(if\(!\w+\['\w+'\]\)conti)nue;/, '/*$1*/'); // esp whilst keeping same script length

					return game_js;
				}
				return ret;
			}
		});
	}

	const append_child = HTMLBodyElement.prototype.appendChild;
	HTMLBodyElement.prototype.appendChild = new Proxy(append_child, {
		apply: function(target, _this, _arguments) {
			var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
			if (_arguments.length && _arguments[0].__proto__ == HTMLIFrameElement.prototype) {
				hook_join(_arguments[0].contentWindow);
			}
			return ret;
		}
	});

var addedNodes = [document.querySelectorAll("script")[15]]
try {
addedNodes.forEach(node => {
    // See above for script tag checks…

    node.type = 'javascript/blocked'

    // Firefox has this additional event which prevents scripts from beeing executed
    const beforeScriptExecuteListener = function (event) {
        // Prevent only marked scripts from executing
        if(node.getAttribute('type') === 'javascript/blocked')
            event.preventDefault()
        node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener)
    }
    node.addEventListener('beforescriptexecute', beforeScriptExecuteListener)
})

var oldDoc = document;
// ==================Anti anti-cheat by Viruster================
// p.s modified by EroLIE
// Anti-anticheat cool stuff
document.querySelectorAll("script")[15].type = 'javascript/blocked'
oldDoc.querySelectorAll("script")[15].remove()
document.querySelectorAll("script")[15].remove()
oldDoc.querySelectorAll("script")[15].type = 'javascript/blocked'

window.onload = function() {
oldDoc.querySelectorAll("script")[15].remove()
document.querySelectorAll("script")[15].remove()
document.querySelectorAll("script")[15].type = 'javascript/blocked'
oldDoc.querySelectorAll("script")[15].type = 'javascript/blocked'
}
} catch(e) {}


})()

XMLHttpRequest.prototype.send = function() {
  return false;
}

window.fetch = function(){return false;}
fetch = function(){return false;}
var oldEval = eval;
window.eval = function(f) {oldEval(f.replace(".toString","").replace(".indexOf",".penisOf"))}
window.Function = function(){return false;}
Function = function(){return false;}
window.setTimeout = function(f,t) {oldEval(f.replace(".toString","").replace(".indexOf",".penisOf"))}
document.write = function(f) {oldEval(f.replace(".toString","").replace(".indexOf",".penisOf"))}
document.createElement = function(){return false;}

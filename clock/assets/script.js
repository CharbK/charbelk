const gui = new lil.GUI();

const params1 = {
    'background': 0,
	'date': false,
	'seconds': true,
	'24-hour time': true
};

gui.add(params1, 'background', { Carbon: 0, PurpleBlueprint: 1, Blueprint: 2, Triangles: 3, Night: 4, Honey: 5, Pyramid: 6 });
gui.add(params1, 'date');
gui.add(params1, 'seconds');
gui.add(params1, '24-hour time');

const colorFormats = {
	"text color": '#ffffff',
	int: 0xffffff,
	object: { r: 1, g: 1, b: 1 },
	array: [ 1, 1, 1 ]
};

gui.addColor( colorFormats, 'text color' );

time = document.getElementById("time");
seconds = document.getElementById("seconds")
date = document.getElementById("date")
bg = document.getElementById("bg")

currentBackground = 0

bg.style.background = "linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)";
bg.style.backgroundColor = "#131313";
bg.style.backgroundSize = "20px 20px";

var updateTime = window.setInterval(function() {
    time.innerHTML = params1["24-hour time"] ? Date().substring(16,21) : (Number(Date().substring(16,18)) <= 12 ? Date().substring(16,21) : "0" + (Number(Date().substring(16,18)) - 12) + Date().substring(18,21));
    seconds.innerHTML = params1["seconds"] ? Date().substring(22,24) : "";
	date.innerHTML = params1["date"] ? Date().substring(0,15) : "";

}, 500);

var updateParams = window.setInterval(function() {
	
	time.style.color = colorFormats["text color"];	
	seconds.style.color = colorFormats["text color"];
	date.style.color = colorFormats["text color"];
	
	if (currentBackground != params1["background"]) {

		if (params1["background"] === 0) {
			bg.style.background = "linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)";
			bg.style.backgroundColor = "#131313";
			bg.style.backgroundSize = "20px 20px";

			currentBackground = 0;
		}

		if (params1["background"] === 1) {

			bg.style.backgroundImage = "linear-gradient(black 2px, transparent 2px),linear-gradient(90deg, black 2px, transparent 2px),linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)";
			bg.style.backgroundColor = "#4020B0";
			bg.style.backgroundSize = "100px 100px, 100px 100px, 20px 20px, 20px 20px";
			bg.style.backgroundPosition = "-2px -2px, -2px -2px, -1px -1px, -1px -1px";

			currentBackground = 1;

		}
		
		if (params1["background"] === 2) {

			bg.style.backgroundImage = "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px),linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)";
			bg.style.backgroundColor = "#269";
			bg.style.backgroundSize = "100px 100px, 100px 100px, 20px 20px, 20px 20px";
			bg.style.backgroundPosition = "-2px -2px, -2px -2px, -1px -1px, -1px -1px";

			currentBackground = 2;

		}

		if (params1["background"] === 3) {

			bg.style.background = "linear-gradient(115deg, transparent 75%, rgba(0,0,0,.8) 75%) 0 0,linear-gradient(245deg, transparent 75%, rgba(0,0,0,.8) 75%) 0 0,linear-gradient(115deg, transparent 75%, rgba(0,0,0,.8) 75%) 7px -15px,linear-gradient(245deg, transparent 75%, rgba(0,0,0,.8) 75%) 7px -15px,#36c";
			bg.style.backgroundColor = "#36c";
			bg.style.backgroundSize = "15px 30px";

			currentBackground = 3;

		}
		
		if (params1["background"] === 4) {

			bg.style.background = "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)";
			bg.style.backgroundColor = "black";
			bg.style.backgroundSize = "550px 550px, 350px 350px, 250px 250px, 150px 150px";
			bg.style.backgroundPostion = "0 0, 40px 60px, 130px 270px, 70px 100px";

			currentBackground = 4;

		}

		if (params1["background"] === 5) {

			bg.style.background = "radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1";
			bg.style.backgroundSize = "40px 60px";

			currentBackground = 5;

		}

		if (params1["background"] === 6) {

			bg.style.background = "linear-gradient(315deg, transparent 75%, #d45d55 0)-10px 0,linear-gradient(45deg, transparent 75%, #d45d55 0)-10px 0,linear-gradient(135deg, #a7332b 50%, transparent 0) 0 0,linear-gradient(45deg, #6a201b 50%, #561a16 0) 0 0 #561a16";
			bg.style.backgroundSize = "20px 20px";

			currentBackground = 6;

		}

		console.log(currentBackground)
	
	}

	if (params1["seconds"]) {
		time.style.left = "15vw";
	} else {
		time.style.left = "20vw";
		seconds.innerHTML = "";
	}
}, 1);

function print_ascii() {
	
     console.log(`\x1b[34m                                                                                  
                                             ..........                                             
                                    .,:coxkO00KXXXXXXK00Okxol:,.                                    
                               .;lxOXNWMMMMMMMMMMMMMMMMMMMMMMMNX0xl;.                               
                           .;oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOo;.                           
                        .:xKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx:.                        
                      ,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,                      
                   .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.                   
                  ;ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO;                  
                'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx'                
              .cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.              
             .xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx.             
            'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO'            
           'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO'           
          .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.          
         .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.         
         :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:         
        .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.        
        ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;        
        lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0odKNNNWMMNXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl        
       .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0:..''',::,.lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.       
       .xMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXOxc.       .,oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.       
       .xWMMMMMMMMMMMMMMMMMMMMMMMMMNKOxl:'.          .dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.       
        oWMMMMMMMMMMMMMMMMMMMWXOxl:'.   ..,cox00xdddl'.:kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo        
        cNMMMMMMMMMMMMMMMMMMMWx.  ..,cok0XWMMMMMMMMMWXd'.,xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN:        
        '0MMMMMMMMMMMMMMMMMMMMXxok0XWMMMMMMMMMMMMMMMMMMXx,.,dXMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'        
         oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.'oKWMMMMMMMMMMMMMMMMMMMMMMMMWo         
         'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO:..l0WMMMMMMMMMMMMMMMMMMMMMMO'         
          :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c..cOWMMMMMMMMMMMMMMMMMMMX:          
           lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl..:kNMMMMMMMMMMMMMMMMNl           
           .lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'.;kNMMMMMMMMMMMMMNl            
             cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd,.,xXMMMMMMMMMMXc             
              ;0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.'dXMMMMMMW0;              
               .dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkclKMMMMMXd.               
                 ,kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMNk;                 
                  .:ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO:.                  
                    .;xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx;                     
                       'lONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl'                       
                          'lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkl'                          
                             .;okKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKko;.                             
                                 .,:oxOKXNWMMMMMMMMMMMMMMWNXKOxo:,.                                 
                                       ..';:cclooooollcc:;'..                                       
    
	Charbel's Clock
	${Date().substring(0,15)}
	`)

}

print_ascii()

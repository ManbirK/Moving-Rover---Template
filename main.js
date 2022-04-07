canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 110;
rover_height = 77;


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 200;
rover_y = 300;

//Create "add()" function
 function add(){
     background_Tag = new Image(); //defining a variable with a new image
     background_Tag.onload = uploadBackground; // setting a function, onloading this variable
     background_Tag.src = background_image; // load image



     rover_Tag = new Image();  //defining a variable with a new image
     rover_Tag.onload = uploadRover;  // setting a function, onloading this variable
     rover_Tag.src = rover_image;   // load image


 }
	                                     
	                                     
	                                     

                                         
	                                    
	                                   
//Create "uploadBackground()" function.
 function uploadBackground(){
     //Draw image of background
     ctx.drawImage(background_Tag, 0, 0, canvas.width, canvas.height); // 2dContext of canvas.drawImage(frame,x,y,Width,Height);
 }   
 
 //Create "uploadrover()" function.
 function uploadRover(){
     
    //Draw image of rover

     ctx.drawImage(rover_Tag, rover_x, rover_y, rover_width, rover_height);
 }                          
                                         





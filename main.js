function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,150,110,340,280);
    fill(0,50,78);
    stroke(0,20,110);
    circle(35,450,50);
    circle(600,450,50);
    circle(600,35,50);
    circle(35,35,50);
    fill(0,150,100);
    rect(45,440,550, 20);
    rect(45,25,550, 20);
    rect(590,52,20, 380);
    rect(25,52,20, 380);
}
function take_snapshot(){
    save('student_name_png');
}

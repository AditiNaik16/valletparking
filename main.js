canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
rover_width=130;
rover_height=110

bg = mars_images[random];
rover="car.jpg";

rover_x=10;
rover_y=15;

function add() {
    bg_img= new Image();
    bg_img.onload = uploadBackground;
    bg_img.src = bg;

    rover_img= new Image;
    rover_img.onload = uploadrover;
    rover_img.src= rover;
}

function uploadBackground() {
    ctx.drawImage(bg_img, 0 , 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    if(keyPressed == '38')
    {
        up();
    }
    if(keyPressed == '40')
    {
        down();
    }
    if(keyPressed == '37')
    {
        left();
    }
    if(keyPressed == '39')
    {
        right();
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}
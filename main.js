canvas = new fabric.Canvas('myCanvas');

Player_x = 10;
Player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";

function Player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
           top:Player_y,
           left:Player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
           top:Player_y,
           left:Player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey == true && key_pressed == '80') {
       console.log("P & Shift-Key is Pressed Together");
       block_width = block_width + 10;
       block_height = block_height + 10;
       document.getElementById("width").innerHTML = block_width;
       document.getElementById("height").innerHTML = block_height;
    }

    if (e.shiftKey == true && key_pressed == '77') {
        console.log("M & Shift-Key is Pressed Together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
     }

     if (key_pressed == '38') {
         up();
         console.log("UP");
     }

     if (key_pressed == '40') {
        down();
        console.log("DOWN");
    }

    if (key_pressed == '37') {
        left();
        console.log("LEFT");
    }

    if (key_pressed == '39') {
        right();
        console.log("RIGHT");
    }

    if (key_pressed == '87') {
        new_image('wall.jpg');
        console.log("W");
    }

    if (key_pressed == '71') {
        new_image('ground.png');
        console.log("G");
    }

    if (key_pressed == '76') {
        new_image('light_green.png');
        console.log("L");
    }

    if (key_pressed == '84') {
        new_image('trunk.jpg');
        console.log("T");
    }

    if (key_pressed == '82') {
        new_image('roof.jpg');
        console.log("R");
    }

    if (key_pressed == '89') {
        new_image('yellow_wall.png');
        console.log("Y");
    }

    if (key_pressed == '68') {
        new_image('dark_green.png');
        console.log("D");
    }

    if (key_pressed == '67') {
        new_image('cloud.jpg');
        console.log("C");
    }
    if (key_pressed == '85') {
        new_image('unique.png');
        console.log("U");
    }
}

function up() {
    if (Player_y >= 0) {
        Player_y = Player_y - block_height;
        console.log("Block Image Height = " + block_height);
        console.log("When up arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function down() {
    if (Player_y <= 500) {
        Player_y = Player_y + block_height;
        console.log("Block Image Height = " + block_height);
        console.log("When down arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function left() {
    if (Player_x > 0) {
        Player_x = Player_x - block_width;
        console.log("Block Image Width = " + block_width);
        console.log("When left arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function right() {
    if (Player_x <= 850) {
        Player_x = Player_x + block_width;
        console.log("Block Image Width = " + block_width);
        console.log("When right arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}
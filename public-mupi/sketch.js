let canvas;
let time = 0;
let counter = 5;
let users = [];
const API_ENDPOINT_GET_USER = "http://localhost:5500/show-user-data";

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(255);
    textSize(32);
    countDown();

    if (users.length == 0) return;
    users.forEach((user, index) => {
        text(user.name, 50, 50 + (index * 50));
    });
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    getUserData();
}

function countDown() {
    time++;
    if (time % 60 == 0) {
        counter--;
    }
    if (time > (600)) {
        console.log('update');
        getUserData()
        time = 0;
        counter = 2;
    }
}

//---------------------------------------- async fetch functions
async function getUserData() {
    const query = await fetch(API_ENDPOINT_GET_USER);
    const data = await query.json();
    console.log('User to show: ', data);
    users = data;
}
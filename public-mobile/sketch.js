let canvas;

const API_ENDPOINT_SEND_USER = "http://localhost:5500/send-user-data";

let user = {
    name: '',
    email: ''
};

let userInputName;
let userInputEmail;
let button;

function setup() {
    frameRate(30);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    userInputName = createInput('');
    userInputName.position((windowWidth / 2) - 80, windowHeight - 300);
    userInputName.size(200);
    userInputName.input(inputNameEvent);

    userInputEmail = createInput('');
    userInputEmail.position((windowWidth / 2) - 80, windowHeight - 220);
    userInputEmail.size(200);
    userInputEmail.input(inputEmailEvent);

    button = createButton('Enviar');
    button.position((windowWidth / 2) - 80, windowHeight - 100);
    button.mousePressed(submitForm);

}

function draw() {
    background(255, 50);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    userInputName.position((windowWidth / 2) - 80, windowHeight - 300);
    userInputEmail.position((windowWidth / 2) - 80, windowHeight - 220);
    button.position((windowWidth / 2) - 80, windowHeight - 100);
}

function mouseClicked() {
}

// Inputs y botón:
function inputNameEvent() {
    user.name = this.value();
}
function inputEmailEvent() {
    user.email = this.value();
}
function submitForm() {
    sendUserData(user);
    console.table(user);
}

//---------------------------------------- petición POST con Fetch
async function sendUserData(player) {
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    }
    await fetch(API_ENDPOINT_SEND_USER, request);
}
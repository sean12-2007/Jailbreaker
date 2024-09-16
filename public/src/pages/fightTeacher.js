// Initialize money and hp values
var money = 0;
var hp = 100;
var shieldActive = false; // Initially shield is not active
var wordBall = document.querySelector('.wordBall');
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Interval ID for switching character status
var intervalId = null;
var isWalking = false; // Flag to track if character is currently walking
document.getElementById("skill1Button").onclick = startSkill1Animation;
document.getElementById("skill2Button").onclick = startSkill2Animation;
document.getElementById("skill3Button").onclick = startSkill3Animation;
const socket = io('/socket.io');

// Send a game event to the server
function sendGameEvent(eventName, data) {
  socket.emit('game-event', { eventName, data });
}

// Listen for game events from the server
socket.on('game-event', (data) => {
    if (data.eventName === 'use-skill') {
      if (data.data.skillName === 'Skill1') {
        // Update the character position or apply damage
      }
    }
  });
function startSkill1Animation() {
    var images = ['/images/ts11.png', '/images/ts12.png', '/images/ts13.png'];
    var teacher = document.querySelector('.teacher');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i];
    }

    var intervalId = setInterval(function() {
        teacher.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images

        // Check if the current image is ts13.png
        if (index === images.length - 1) {
            // Start the wordBall animation when the ts13.png image is displayed
            startWordBallAnimation();
        }
    }, 400); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        teacher.style.backgroundImage = "url('/images/character_teacher.png')"; // Revert to original picture
    }, 400 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
    sendGameEvent('teacher-use-skill', { skillName: 'Skill1' });
}
function startWordBallAnimation() {
    var teacher = document.querySelector('.teacher');
    var wordBall = document.querySelector('.wordBall');
    var teacherRect = teacher.getBoundingClientRect();

    wordBall.style.left = (teacherRect.right - 250) + 'px';
    wordBall.style.top = (teacherRect.top - 0) + 'px';
    wordBall.style.display = 'block';

    var wordBallMoveInterval = setInterval(function() {
        var wordBallLeft = parseInt(wordBall.style.left);
        wordBall.style.left = (wordBallLeft + 10) + 'px';

        if (wordBallLeft > window.innerWidth) {
            clearInterval(wordBallMoveInterval);
            wordBall.style.display = 'none';
        }
    }, 50);
}

function startSkill2Animation() {
    var images = ['/images/ts21.png', '/images/ts22.png'];
    var student = document.querySelector('.teacher');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i];
    }

    var intervalId = setInterval(function() {
        student.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images
    }, 400); 
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/character_teacher.png')"; // Revert to original picture
    }, 400 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}

function startSkill3Animation() {
    var images = ['/images/ts31.png', '/images/ts32.png', '/images/ts33.png', '/images/ts34.png', '/images/ts35.png', '/images/ts36.png', '/images/ts37.png'];
    var student = document.querySelector('.teacher');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i];
    }

    var intervalId = setInterval(function() {
        student.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images
    }, 200); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/character_teacher.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}

// Update hp and money values
function updateValues() {
    // Update money
    document.getElementById("money").textContent = "Money: " + money;

    // Update hp (example: decrement by 10% each time)
    // hp -= 10;
    if (hp < 0) hp = 0; // Ensure hp doesn't go negative
    document.getElementById("hp").textContent = "HP: " + hp + "%";
}

function handleKeyDown(event) {
    if (!isWalking && (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'ArrowLeft')) {
        startWalkingAnimation(event.key);
        moveTeacher(event.key);
        isWalking = true;
    } else if (event.key >= '1' && event.key <= '3') {
        switch (event.key) {
            case '1':
                startSkill1Animation();
                break;
            case '2':
                startSkill2Animation();
                break;
            case '3':
                startSkill3Animation();
                break;
        }
    }
}

// Function to handle keyup event
function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'ArrowLeft')) {
        clearInterval(intervalId); // Stop the interval for character animation
        isWalking = false;
        document.querySelector('.teacher').style.backgroundImage = "url('/images/character_teacher.png')"; // Switch to default character image
    }
}

// Function to start walking animation
function startWalkingAnimation(direction) {
    var count = 0;
    var teacher = document.querySelector('.teacher');
    intervalId = setInterval(function() {
        //if (count % 2 === 0) {
            //teacher.style.backgroundImage = "url('/images/walk 1.png')";
        //} else {
            //teacher.style.backgroundImage = "url('/images/walk 2.png')";
        //}
        moveTeacher(direction); // Move character based on the direction
        count++;
    }, 200); // Switch character image every 0.2 seconds
}

// Function to move the teacher character
// Function to move the teacher character
function moveTeacher(direction) {
    var teacher = document.querySelector('.teacher');
    var teacherStyle = getComputedStyle(teacher);
    var teacherTop = parseInt(teacherStyle.top); // Use top instead of down
    var teacherLeft = parseInt(teacherStyle.left); // Use left instead of right

    var moveAmount = 10; // Adjust as needed

    if (direction === 'ArrowRight') {
        teacher.style.left = (teacherLeft + moveAmount) + 'px';
    } else if (direction === 'ArrowDown') {
        teacher.style.top = (teacherTop + moveAmount) + 'px'; 
    } else if (direction === 'ArrowLeft') {
        teacher.style.top = (teacherTop + moveAmount) + 'px'; 
    } else if (direction === 'ArrowUp') {
        teacher.style.top = (teacherTop + moveAmount) + 'px'; 
    }
    
    // Update the position of the summon character
    var summon = document.querySelector('.summon');
    summon.style.top = teacher.style.top; 
    summon.style.left = teacher.style.left; 
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Call updateValues function every 3 seconds (adjust as needed)
setInterval(updateValues, 3000);

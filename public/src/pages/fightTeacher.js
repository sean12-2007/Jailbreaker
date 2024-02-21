// Initialize money and hp values
var money = 0;
var hp = 100;
var shieldActive = false; // Initially shield is not active

// Interval ID for switching character status
var intervalId = null;
var isWalking = false; // Flag to track if character is currently walking
document.getElementById("skill1Button").onclick = startSkill1Animation;
document.getElementById("skill2Button").onclick = startSkill2Animation;
document.getElementById("skill3Button").onclick = startSkill3Animation;

// Function for 自動筆刀
function startSkill1Animation() {
    var images = ['/images/ts11.png', '/images/ts12.png', '/images/ts13.png'];
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
    }, 400); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/character_teacher.png')"; // Revert to original picture
    }, 400 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}

// Function for 美工刀 skill 1
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
    }, 400); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/character_teacher.png')"; // Revert to original picture
    }, 400 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
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

// Call updateValues function every 3 seconds (adjust as needed)
setInterval(updateValues, 3000);

// Function to handle keydown event
function handleKeyDown(event) {
    if (!isWalking && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) {
        startWalkingAnimation(event.key);
        moveTeacher(event.key); // Call moveTeacher function to update position
        isWalking = true;
    }
}
// Function to handle keydown event
function handleKeyDown(event) {
    if (!isWalking && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) {
        startWalkingAnimation(event.key);
        moveTeacher(event.key); // Call moveTeacher function to update position
        isWalking = true;
    }
}


// Function to handle keyup event
function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) {
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
        if (count % 2 === 0) {
            teacher.style.backgroundImage = "url('/images/walk 1.png')";
        } else {
            teacher.style.backgroundImage = "url('/images/walk 2.png')";
        }
        moveTeacher(direction); // Move character based on the direction
        count++;
    }, 200); // Switch character image every 0.2 seconds
}

// Function to move the teacher character
// Function to move the teacher character
function moveTeacher(direction) {
    var teacher = document.querySelector('.teacher');
    var teacherStyle = getComputedStyle(teacher);
    var teacherDown = parseInt(teacherStyle.bottom); // Use bottom instead of down
    var teacherRight = parseInt(teacherStyle.right);

    var moveAmount = 10; // Adjust as needed

    if (direction === 'ArrowRight') {
        teacher.style.right = (teacherRight + moveAmount) + 'px';
    } else if (direction === 'ArrowDown') {
        teacher.style.bottom = (teacherDown + moveAmount) + 'px'; // Use bottom instead of down
    }
    
    // Update the position of the summon character
    var summon = document.querySelector('.summon');
    summon.style.bottom = teacher.style.bottom; // Use bottom instead of down
    summon.style.right = teacher.style.right;
}


// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

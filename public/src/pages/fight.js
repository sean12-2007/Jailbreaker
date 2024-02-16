
// Initialize money and hp values
var money = 0;
var hp = 100;
var shieldActive = false; // Initially shield is not active

// Interval ID for switching character status
var intervalId = null;
var isWalking = false; // Flag to track if character is currently walking

// Function to handle the change event of the weapon dropdown
function handleWeaponChange() {
    // Get the selected weapon from the dropdown
    var selectedWeapon = document.getElementById("weapon-dropdown").value;

    // Update skill buttons based on selected weapon
    document.getElementById("skill1Button").textContent = selectedWeapon + " - Skill1";
    document.getElementById("skill2Button").textContent = selectedWeapon + " - Skill2";
    document.getElementById("skill3Button").textContent = selectedWeapon + " - Skill3";

    // If the selected weapon is "自動筆", set up skill 1 animation
    if (selectedWeapon === "自動筆") {
        document.getElementById("skill1Button").onclick = startpSkill1Animation;
    } else {
        // For other weapons, remove the onclick handler for skill 1
        document.getElementById("skill1Button").onclick = null;
    }
    // Function to handle the click event of 自動筆 skill 2 button
    document.getElementById("skill2Button").addEventListener("click", function() {
    // Check if the selected weapon is 自動筆
    var selectedWeapon = document.getElementById("weapon-dropdown").value;
    if (selectedWeapon === "自動筆") {
        // 自動筆 is selected, so start skill 2 animation
        startSkill2Animation();
    }
});

}
// Function for 自動筆刀
function startpSkill1Animation() {
    var images = ['/images/bp11.png', '/images/bp12.png', '/images/bp13.png', '/images/bp14.png'];
    var student = document.querySelector('.student');
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
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}

// Function for 自動筆 skill 2
function startSkill2Animation() {
    var images = ['/images/bp21.png', '/images/bp22.png', '/images/bp23.png'];
    var student = document.querySelector('.student');
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
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}




// Update hp and money values
function updateValues() {
    // Update money
    document.getElementById("money").textContent = "Money: " + money;

    // Update hp (example: decrement by 10% each time)
    //hp -= 10;
    if (hp < 0) hp = 0; // Ensure hp doesn't go negative
    document.getElementById("hp").textContent = "HP: " + hp + "%";
}

// Call updateValues function every 3 seconds (adjust as needed)
setInterval(updateValues, 3000);
// Function to handle keydown event
function handleKeyDown(event) {
    if (!isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        startWalkingAnimation(event.key);
        isWalking = true;
    }
}

// Function to handle keyup event
function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        clearInterval(intervalId); // Stop the interval for character animation
        isWalking = false;
        document.querySelector('.student').style.backgroundImage = "url('/images/walk 1.png')"; // Switch to default character image
    }
}

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Function to move the student character
function moveStudent(direction) {
    var student = document.querySelector('.student');
    var studentStyle = getComputedStyle(student);
    var studentTop = parseInt(studentStyle.top);
    var studentLeft = parseInt(studentStyle.left);

    var moveAmount = 10; // Adjust as needed

    if (direction === 'ArrowLeft') {
        student.style.left = (studentLeft - moveAmount) + 'px';
    } else if (direction === 'ArrowUp') {
        student.style.top = (studentTop - moveAmount) + 'px';
    }
}



// Function to toggle shield status
function toggleShield() {
    if (shieldActive) {
        // If shield is active, hide shield status images and show player character
        document.getElementById('shieldStatus1').style.display = 'none';
        document.getElementById('shieldStatus2').style.display = 'none';
        document.querySelector('.student').style.display = 'block';
        shieldActive = false; // Set shield as inactive
    } else {
        // If shield is not active, activate shield
        activateShield();
        shieldActive = true; // Set shield as active
    }
}

// Function to activate shield
function activateShield() {
    var shieldStatus1 = document.getElementById('shieldStatus1');
    var shieldStatus2 = document.getElementById('shieldStatus2');
    var student = document.querySelector('.student');
    var studentStyle = getComputedStyle(student);
    var studentTop = parseInt(studentStyle.top);
    var studentLeft = parseInt(studentStyle.left);

    // Set shield position relative to student
    shieldStatus1.style.top = studentTop + 'px';
    shieldStatus1.style.left = studentLeft + 'px';
    shieldStatus2.style.top = studentTop + 'px';
    shieldStatus2.style.left = studentLeft + 'px';

    // Display first shield status image
    shieldStatus1.style.display = 'block';

    // After 1 second, switch to the second shield status image
    setTimeout(function() {
        shieldStatus1.style.display = 'none';
        shieldStatus2.style.display = 'block';

        // After 10 seconds, hide the shield status image and show the original character image
        setTimeout(function() {
            shieldStatus2.style.display = 'none';
            document.querySelector('.student').style.display = 'block';
        }, 10000); // 10 seconds
    }, 1000); // 1 second
}


// Function to handle keydown event
function handleKeyDown(event) {
    if (!isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        startWalkingAnimation(event.key);
        isWalking = true;
    }
}

// Function to handle keyup event
function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        clearInterval(intervalId); // Stop the interval for character animation
        isWalking = false;
        document.querySelector('.student').style.backgroundImage = "url('/images/walk\ 1.png')"; // Switch to default character image
    }
}

// Function to start walking animation
function startWalkingAnimation(direction) {
    var count = 0;
    var student = document.querySelector('.student');
    intervalId = setInterval(function() {
        if (count % 2 === 0) {
            student.style.backgroundImage = "url('/images/walk\ 2.png')";
        } else {
            student.style.backgroundImage = "url('/images/walk\ 1.png')";
        }
        moveStudent(direction); // Move character based on the direction
        count++;
    }, 200); // Switch character image every 0.2 seconds
}


// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

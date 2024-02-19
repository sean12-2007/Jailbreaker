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

    // If the selected weapon is "自動筆", set up skill 1 animation
    if (selectedWeapon === "自動筆") {
        document.getElementById("skill1Button").onclick = startpSkill1Animation;
        document.getElementById("skill2Button").addEventListener("click", function() {
            // 自動筆 is selected, so start skill 2 animation
            startpSkill2Animation();
        });
    } else if (selectedWeapon === "美工刀") {
        // For 美工刀, set up skill 1 animation
        document.getElementById("skill1Button").onclick = startkSkill1Animation;
        document.getElementById("skill2Button").onclick = startkSkill2Animation;
    } else if (selectedWeapon === "剪刀") {
    // For 美工刀, set up skill 1 animation
    document.getElementById("skill1Button").onclick = startsSkill1Animation;
    document.getElementById("skill2Button").onclick = startsSkill2Animation;
    } else if (selectedWeapon === "魔導書") {
    // For 美工刀, set up skill 1 animation
    document.getElementById("skill1Button").onclick = startbSkill1Animation;
    document.getElementById("skill2Button").onclick = startbSkill2Animation;
    }else {
        // For other weapons, remove the onclick handler for skill 1
        document.getElementById("skill1Button").onclick = null;
    }
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
function startpSkill2Animation() {
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

// Function for 美工刀 skill 1
function startkSkill1Animation() {
    var images = ['/images/bk21.png', '/images/bk22.png','/images/bk23.png','/images/bk24.png','/images/bk25.png'];
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
// Function for 美工刀 skill 2
function startkSkill2Animation() {
    var images = ['/images/bk11.png', '/images/bk12.png'];
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
// Function for 剪刀 skill 1
function startsSkill1Animation() {
    var images = ['/images/bs11.png', '/images/bs12.png'];
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
// Function for 剪刀 skill 2
function startsSkill2Animation() {
    var images = ['/images/bs21.png', '/images/bs22.png', '/images/bs23.png'];
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
// Function for 魔導書 skill 1
function startbSkill1Animation() {
    var images = ['/images/bb11.png', '/images/bb12.png', '/images/bb13.png', '/images/bb14.png', '/images/bb15.png', '/images/bb16.png', '/images/bb17.png', '/images/bb18.png', '/images/bb19.png', '/images/bb110.png', '/images/bb111.png', '/images/bb112.png', '/images/bb113.png', '/images/bb114.png', '/images/bb115.png', '/images/bb116.png'];
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
// Function for 魔導書 skill 2
function startbSkill2Animation() {
    var images = ['/images/bb21.png', '/images/bb22.png'];
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
// Function to handle the click event of the shield button
document.getElementById("shieldButton").addEventListener("click", function() {
    // Call the function to toggle shield
    toggleShield();
});

// Function for shield
function toggleShield() {
    // Toggle shieldActive variable
    shieldActive = !shieldActive;

    // Check if the shield is active
    if (shieldActive) {
        var images = ['/images/p1.png', '/images/p2.png'];
        var student = document.querySelector('.student');
        var index = 0;

        var preloadedImages = [];
        for (var i = 0; i < images.length; i++) {
            preloadedImages[i] = new Image();
            preloadedImages[i].src = images[i];
        }

        // Switch to shield picture
        student.style.backgroundImage = "url('" + preloadedImages[0].src + "')";

        // After 500 milliseconds, switch to shield picture 2
        setTimeout(function() {
            student.style.backgroundImage = "url('" + preloadedImages[1].src + "')";
        }, 500);

        // After 10 seconds, switch back to 'walk 1.png'
        setTimeout(function() {
            student.style.backgroundImage = "url('/images/walk 1.png')";
        }, 10000);
    }
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

// Function to start walking animation
function startWalkingAnimation(direction) {
    var count = 0;
    var student = document.querySelector('.student');
    intervalId = setInterval(function() {
        if (count % 2 === 0) {
            student.style.backgroundImage = "url('/images/walk 2.png')";
        } else {
            student.style.backgroundImage = "url('/images/walk 1.png')";
        }
        moveStudent(direction); // Move character based on the direction
        count++;
    }, 200); // Switch character image every 0.2 seconds
}

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

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

var urlParams = new URLSearchParams(window.location.search);
var character = urlParams.get('character');

if (character === 'boy') {
    document.querySelector('.character').classList.add('student-boy');
} else if (character === 'girl') {
    document.querySelector('.character').classList.add('student-girl');
    document.querySelector('.character').style.backgroundImage = "url('/images/gwalk1.png')";
}

function setCharacter(character) {
    localStorage.setItem('selectedCharacter', character);
}

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
    var selectedCharacter = localStorage.getItem('selectedCharacter'); // Assuming you store the selected character in localStorage
    // Update skill buttons based on selected weapon
    document.getElementById("skill1Button").textContent = selectedWeapon + " - Skill1";
    document.getElementById("skill2Button").textContent = selectedWeapon + " - Skill2";

    if (selectedCharacter === 'character_boy') {
        // Set up skill and walking animations for boy character
        if (selectedWeapon === "自動筆") {
            document.getElementById("skill1Button").onclick = startpSkill1Animation;
            document.getElementById("skill2Button").onclick = startpSkill2Animation;
        } else if (selectedWeapon === "美工刀") {
            document.getElementById("skill1Button").onclick = startkSkill1Animation;
            document.getElementById("skill2Button").onclick = startkSkill2Animation;
        } else if (selectedWeapon === "剪刀") {
            document.getElementById("skill1Button").onclick = startsSkill1Animation;
            document.getElementById("skill2Button").onclick = startsSkill2Animation;
        } else if (selectedWeapon === "魔導書") {
            document.getElementById("skill1Button").onclick = startbSkill1Animation;
            document.getElementById("skill2Button").onclick = startbSkill2Animation;
        } else {
            document.getElementById("skill1Button").onclick = null;
        }
    } else if (selectedCharacter === 'character_girl') {
        // Set up skill and walking animations for girl character
        if (selectedWeapon === "自動筆") {
            document.getElementById("skill1Button").onclick = startgpSkill1Animation;
            document.getElementById("skill2Button").onclick = startgpSkill2Animation;
        } else if (selectedWeapon === "美工刀") {
            document.getElementById("skill1Button").onclick = startgkSkill1Animation;
            document.getElementById("skill2Button").onclick = startgkSkill2Animation;
        } else if (selectedWeapon === "剪刀") {
            document.getElementById("skill1Button").onclick = startgsSkill1Animation;
            document.getElementById("skill2Button").onclick = startgsSkill2Animation;
        } else if (selectedWeapon === "魔導書") {
            document.getElementById("skill1Button").onclick = startgbSkill1Animation;
            document.getElementById("skill2Button").onclick = startgbSkill2Animation;
        } else {
            document.getElementById("skill1Button").onclick = null;
        }
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
/*function startpSkill2Animation() {
    var images = [
        { url: '/images/bp21.png', duration: 200 },
        { url: '/images/bp22.png', duration: 300 },
        { url: '/images/bp23.png', duration: 400 }
    ];
    var student = document.querySelector('.student');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i].url;
    }

    var intervalId = setInterval(function() {
        student.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images
    }, images[index].duration); // Switch character image based on the duration specified in the images array

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, images.reduce((acc, curr) => acc + curr.duration, 0)); // Total duration for cycling through all images, plus a little extra
}*/

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
    var images = ['/images/bk1.png', '/images/bk12.png'];
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
    }, 700); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture

        // Hide the summon character
        var summon = document.querySelector('.summon');
        summon.style.display = 'none';
    }, 700 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra

    // Start teacher skill 1 animation
    startSummonSkill1Animation();
}
function startSummonSkill1Animation() {
    var images = ['/images/scissor1.png', '/images/scissor2.png'];
    var summon = document.querySelector('.summon');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i];
    }

    var intervalId = setInterval(function() {
        summon.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images
    }, 700); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
    }, 700 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
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
function startgpSkill1Animation (){
    var images = ['/images/gp11.png', '/images/gp12.png', '/images/gp13.png', '/images/gp14.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
function startgpSkill2Animation() {
    var images = ['/images/gp21.png', '/images/gp22.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
function startgkSkill1Animation() {
    var images = ['/images/gk11.png', '/images/gk12.png', '/images/gk13.png', '/images/gk14.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
function startgkSkill2Animation() {
    var images = ['/images/gk21.png', '/images/gk22.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
function startSummonSkill1Animation() {
    var images = ['/images/scissor1.png', '/images/scissor2.png'];
    var summon = document.querySelector('.summon');
    var index = 0;

    var preloadedImages = [];
    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = images[i];
    }

    var intervalId = setInterval(function() {
        summon.style.backgroundImage = "url('" + preloadedImages[index].src + "')";
        index = (index + 1) % images.length; // Cycle through the images
    }, 700); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
    }, 700 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}

// Function for 剪刀 skill 1
function startgsSkill1Animation() {
    var images = ['/images/gs11.png', '/images/gs12.png'];
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
    }, 700); // Switch character image every 0.2 seconds

    // After cycling through the images, revert to the original picture
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture

        // Hide the summon character
        var summon = document.querySelector('.summon');
        summon.style.display = 'none';
    }, 700 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra

    // Start teacher skill 1 animation
    startSummonSkill1Animation();
}
// Function for 剪刀 skill 2
function startgsSkill2Animation() {
    var images = ['/images/gs21.png', '/images/gs22.png', '/images/gs23.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
// Function for 魔導書 skill 1
function startgbSkill1Animation() {
    var images = ['/images/gb11.png', '/images/gb12.png', '/images/gb13.png', '/images/gb14.png', '/images/gb15.png', '/images/gb16.png', '/images/gb17.png', '/images/gb18.png', '/images/gb19.png', '/images/gb110.png', '/images/gb111.png', '/images/gb112.png', '/images/gb113.png', '/images/gb114.png', '/images/gb115.png', '/images/gb116.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
// Function for 魔導書 skill 2
function startgbSkill2Animation() {
    var images = ['/images/gb21.png', '/images/gb22.png'];
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
        student.style.backgroundImage = "url('/images/gwalk1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
// Function to handle the click event of the shield button
document.getElementById("shieldButton").addEventListener("click", function() {
    // Call the function to toggle shield
    toggleShield();
});
// Function for shield
function togglebShield() {
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
function togglegShield() {
    // Toggle shieldActive variable
    shieldActive = !shieldActive;

    // Check if the shield is active
    if (shieldActive) {
        var images = ['/images/gp1.png', '/images/gp2.png'];
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
            student.style.backgroundImage = "url('/images/gwalk1.png')";
        }, 10000);
    }
}
function toggleShield() {
    var selectedCharacter = localStorage.getItem('selectedCharacter'); // Assuming you store the selected character in localStorage

    if (selectedCharacter === 'character_boy') {
        // Toggle shield for boy character
        togglebShield();
    } else if (selectedCharacter === 'character_girl') {
        // Toggle shield for girl character
        togglegShield();
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
        startWalking(event.key); // Pass the direction to the startWalking function
        isWalking = true;
    }
}
// Function to handle keyup event
function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        clearInterval(intervalId); // Stop the interval for character animation
        isWalking = false;
        var selectedCharacter = localStorage.getItem('selectedCharacter'); // Assuming you store the selected character in localStorage

        if (selectedCharacter === 'character_boy') {
            document.querySelector('.student').style.backgroundImage = "url('/images/walk 1.png')"; // Switch to default character image
        } else if (selectedCharacter === 'character_girl') {
            document.querySelector('.student').style.backgroundImage = "url('/images/gwalk1.png')"; // Switch to default girl character image
        }
    }
}

function startWalking(direction) {
    var selectedCharacter = localStorage.getItem('selectedCharacter'); // Assuming you store the selected character in localStorage

    if (selectedCharacter === 'character_boy') {
        // Toggle shield for boy character
        startbWalk(direction);
    } else if (selectedCharacter === 'character_girl') {
        // Toggle shield for girl character
        startgWalk(direction);
    }
}

// Function to start walking animation
function startbWalk(direction) {
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
function startgWalk(direction) {
    var count = 0;
    var student = document.querySelector('.student');
    intervalId = setInterval(function() {
        if (count % 2 === 0) {
            student.style.backgroundImage = "url('/images/gwalk2.png')";
        } else {
            student.style.backgroundImage = "url('/images/gwalk1.png')";
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

    var moveAmount = 20; // Adjust as needed

    if (direction === 'ArrowLeft') {
        student.style.left = (studentLeft - moveAmount) + 'px';
    } else if (direction === 'ArrowUp') {
        student.style.top = (studentTop - moveAmount) + 'px';
    }
}

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

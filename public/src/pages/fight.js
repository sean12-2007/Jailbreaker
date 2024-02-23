var urlParams = new URLSearchParams(window.location.search);
var character = urlParams.get('character');
const socket = io('/socket.io');

// Send a game event to the server
function sendGameEvent(eventName, data) {
  socket.emit('game-event', { eventName, data });
}

// Listen for game events from the server
socket.on('game-event', (data) => {
  // Update the game state based on the received event
  if (data.eventName === 'move-character') {
    // Update the character position
  } else if (data.eventName === 'use-skill') {
    // Apply damage or play an animation
  }
});
if (character === 'boy') {
    document.querySelector('.character').classList.add('student-boy');
} else if (character === 'girl') {
    document.querySelector('.character').classList.add('student-girl');
    document.querySelector('.character').style.backgroundImage = "url('/images/gwalk1.png')";
}

function setCharacter(character) {
    localStorage.setItem('selectedCharacter', character);
}
var money = 0;
var hp = 100;
var shieldActive = false;

// Interval ID for switching character status
var intervalId = null;
var isWalking = false; 
function handleWeaponChange() {
    var selectedWeapon = document.getElementById("weapon-dropdown").value;
    var selectedCharacter = localStorage.getItem('selectedCharacter');
    document.getElementById("skill1Button").textContent = selectedWeapon + " - Skill1";
    document.getElementById("skill2Button").textContent = selectedWeapon + " - Skill2";

    if (selectedCharacter === 'character_boy') {
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
    sendGameEvent('student-use-skill', { skillName: 'Skill1' });
}
var projectionMoveInterval;

function startProjectionMovement() {
    var moveAmount = 20;
    var moveInterval = setInterval(function() {
      var projection = document.querySelector('.projection');
      var student = document.querySelector('.student');
      projection.style.left = (parseInt(projection.style.left) - moveAmount) + 'px';
      projection.style.top = student.offsetTop + 'px';
    }, 100);
  }
  function startpSkill2Animation() {
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
    }, images[index].duration);
  
    // Add the projection variable here
    var projection = document.querySelector('.projection');
    projection.style.display = 'block'; // Show the projection
    projection.style.position = 'absolute'; // Change the positioning to be relative to the student character
  
    // Calculate the horizontal and vertical offsets
    var studentRect = student.getBoundingClientRect();
    var projectionRect = projection.getBoundingClientRect();
    var horizontalOffset = (studentRect.width - projectionRect.width) / 2;
    var verticalOffset = (studentRect.height - projectionRect.height) / 2;
  
    // Set the initial left and top positions to be centered on the student
    projection.style.left = (studentRect.left + horizontalOffset) + 'px';
    projection.style.top = (studentRect.top + verticalOffset) + 'px';
  
    startProjectionMovement(); // Start the projection movement
  
    setTimeout(function() {
      clearInterval(intervalId);
      student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
      /*projection.style.display = 'none'; // Hide the projection*/
    }, images.reduce((acc, curr) => acc + curr.duration, 0));
  }
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
    }, 200);

    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); 
}
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
    }, 200); 
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 200 * (images.length + 1));
}

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
    }, 700);
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
        index = (index + 1) % images.length; 
    }, 700);
    setTimeout(function() {
        clearInterval(intervalId);
    }, 700 * (images.length + 1)); 
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
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; 
    }, 200 * (images.length + 1)); 
}
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
    }, 200);
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
    }, 200);
    setTimeout(function() {
<<<<<<< HEAD
      clearInterval(intervalId);
      student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 1000); // Wait for 1000ms (1 second) after the light wave animation starts
  }
  
  function startLightWaveAnimation() {
    var lightWave = document.querySelector('.light-wave');
    var student = document.querySelector('.student');
    var studentRect = student.getBoundingClientRect();
  
    lightWave.style.left = (studentRect.left - 30) + 'px';
    lightWave.style.top = (studentRect.top + 100) + 'px';
    lightWave.style.display = 'block';
  
    setTimeout(function() {
      lightWave.style.display = 'none';
    }, 1000); // Wait for 1000ms (1 second) after the light wave animation starts
  }
=======
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; // Revert to original picture
    }, 200 * (images.length + 1)); // Total duration for cycling through all images, plus a little extra
}
>>>>>>> parent of 9a3a29c (fight)
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
        index = (index + 1) % images.length; 
    }, 200); 
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
        index = (index + 1) % images.length; 
    }, 200); 
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')"; 
    }, 200 * (images.length + 1)); 
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
        index = (index + 1) % images.length; 
    }, 700);
    setTimeout(function() {
        clearInterval(intervalId);
    }, 700 * (images.length + 1)); 
}

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
        index = (index + 1) % images.length; 
    }, 700);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')";
        var summon = document.querySelector('.summon');
        summon.style.display = 'none';
    }, 700 * (images.length + 1));
    startSummonSkill1Animation();
}

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
        index = (index + 1) % images.length; 
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')";
    }, 200 * (images.length + 1)); 
}
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
        index = (index + 1) % images.length; 
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')"; 
    }, 200 * (images.length + 1)); 
}
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
        index = (index + 1) % images.length;
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')"; 
    }, 200 * (images.length + 1));
}
document.getElementById("shieldButton").addEventListener("click", function() {
    toggleShield();
});
function togglebShield() {
    shieldActive = !shieldActive;
    if (shieldActive) {
        var images = ['/images/p1.png', '/images/p2.png'];
        var student = document.querySelector('.student');
        var index = 0;

        var preloadedImages = [];
        for (var i = 0; i < images.length; i++) {
            preloadedImages[i] = new Image();
            preloadedImages[i].src = images[i];
        }
        student.style.backgroundImage = "url('" + preloadedImages[0].src + "')";

        setTimeout(function() {
            student.style.backgroundImage = "url('" + preloadedImages[1].src + "')";
        }, 500);
        setTimeout(function() {
            student.style.backgroundImage = "url('/images/walk 1.png')";
        }, 10000);
    }
}
function togglegShield() {
    shieldActive = !shieldActive;
    if (shieldActive) {
        var images = ['/images/gp1.png', '/images/gp2.png'];
        var student = document.querySelector('.student');
        var index = 0;

        var preloadedImages = [];
        for (var i = 0; i < images.length; i++) {
            preloadedImages[i] = new Image();
            preloadedImages[i].src = images[i];
        }

        student.style.backgroundImage = "url('" + preloadedImages[0].src + "')";
        setTimeout(function() {
            student.style.backgroundImage = "url('" + preloadedImages[1].src + "')";
        }, 500);

        setTimeout(function() {
            student.style.backgroundImage = "url('/images/gwalk1.png')";
        }, 10000);
    }
}
function toggleShield() {
    var selectedCharacter = localStorage.getItem('selectedCharacter'); 

    if (selectedCharacter === 'character_boy') {
        togglebShield();
    } else if (selectedCharacter === 'character_girl') {
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
function handleKeyDown(event) {
    var selectedWeapon = document.getElementById('weapon-dropdown').value;
    var selectedCharacter = localStorage.getItem('selectedCharacter'); 

    if (!isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        startWalking(event.key); 
        isWalking = true;
    }
    switch (event.key) {
        case '1':
            switch (selectedWeapon) {
                case '自動筆':
                    if (selectedCharacter === 'character_boy') {
                        startpSkill1Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgpSkill1Animation();
                    }
                    break;
                case '美工刀':
                    if (selectedCharacter === 'character_boy') {
                        startkSkill1Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgkSkill1Animation();
                    }
                    break;
                case '剪刀':
                    if (selectedCharacter === 'character_boy') {
                        startsSkill1Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgsSkill1Animation();
                    }
                    break;
                case '魔導書':
                    if (selectedCharacter === 'character_boy') {
                        startbSkill1Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgbSkill1Animation();
                    }
                    break;
            }
            break;
        case '2':
            switch (selectedWeapon) {
                case '自動筆':
                    if (selectedCharacter === 'character_boy') {
                        startpSkill2Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgpSkill2Animation();
                    }
                    break;
                case '美工刀':
                    if (selectedCharacter === 'character_boy') {
                        startkSkill2Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgkSkill2Animation();
                    }
                    break;
                case '剪刀':
                    if (selectedCharacter === 'character_boy') {
                        startsSkill2Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgsSkill2Animation();
                    }
                    break;
                case '魔導書':
                    if (selectedCharacter === 'character_boy') {
                        startbSkill2Animation();
                    } else if (selectedCharacter === 'character_girl') {
                        startgbSkill2Animation();
                    }
                    break;
            }
            break;
        case '3':
            if (selectedCharacter === 'character_boy') {
                togglebShield();
            } else if (selectedCharacter === 'character_girl') {
                togglegShield();
            }
            break;
    }
}

function handleKeyUp(event) {
    if (isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        clearInterval(intervalId); // Stop the interval for character animation
        isWalking = false;
        var selectedCharacter = localStorage.getItem('selectedCharacter'); 

        if (selectedCharacter === 'character_boy') {
            document.querySelector('.student').style.backgroundImage = "url('/images/walk 1.png')";
        } else if (selectedCharacter === 'character_girl') {
            document.querySelector('.student').style.backgroundImage = "url('/images/gwalk1.png')";
        }
    }
}

function startWalking(direction) {
    var selectedCharacter = localStorage.getItem('selectedCharacter'); 

    if (selectedCharacter === 'character_boy') {
        startbWalk(direction);
    } else if (selectedCharacter === 'character_girl') {
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
    }, 200);
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
        moveStudent(direction);
        count++;
    }, 200);
}
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

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

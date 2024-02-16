// Initialize money and hp values
var money = 0;
var hp = 100;
var shieldActive = false; // Initially shield is not active

// Function to handle the change event of the weapon dropdown
function handleWeaponChange() {
    // Get the selected weapon from the dropdown
    var selectedWeapon = document.getElementById("weapon-dropdown").value;

    // Update skill buttons based on selected weapon
    document.getElementById("skill1Button").textContent = selectedWeapon + "-"+ "Skill1";
    document.getElementById("skill2Button").textContent = selectedWeapon + "-"+ "Skill2";
    document.getElementById("skill3Button").textContent = selectedWeapon + "-"+ "Skill3";
}

// Update hp and money values
function updateValues() {
    // Update money
    document.getElementById("money").textContent = "Money: " + money;

    // Update hp (example: decrement by 10% each time)
    hp -= 10;
    if (hp < 0) hp = 0; // Ensure hp doesn't go negative
    document.getElementById("hp").textContent = "HP: " + hp + "%";
}

// Call updateValues function every 3 seconds (adjust as needed)
setInterval(updateValues, 3000);

// Function to move the student character
function moveStudent(direction) {
    var student = document.querySelector('.student');
    var studentStyle = getComputedStyle(student);
    var studentTop = parseInt(studentStyle.top);
    var studentLeft = parseInt(studentStyle.left);

    var moveAmount = 10; // Adjust as needed

    if (direction === 'left') {
        student.style.left = (studentLeft - moveAmount) + 'px';
    } else if (direction === 'up') {
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

        // After 10 seconds, hide the shield status image
        setTimeout(function() {
            shieldStatus2.style.display = 'none';
            // Show the original student character image
            document.querySelector('.student').style.display = 'block';
        }, 10000); // 10 seconds
    }, 500); // 1 second

    // Hide the original student character image
    student.style.display = 'none';
}

// Add event listener for keydown event
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowLeft') {
        moveStudent('left');
    } else if (event.key === 'ArrowUp') {
        moveStudent('up');
    }
});

// Functions for different skills
function skill1() {
    // Implement skill 1 behavior here
}

function skill2() {
    // Implement skill 2 behavior here
}

function skill3() {
    // Implement skill 3 behavior here
}

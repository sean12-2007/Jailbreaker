var urlParams = new URLSearchParams(window.location.search);
document.addEventListener("keydown", handleKeyDown);
document.getElementById('weapon-dropdown').addEventListener('change', handleWeaponChange);
var character = localStorage.getItem('selectedCharacter');
var projection = document.querySelector('.projection');
if (character === 'boy') {
  document.querySelector('.character').classList.add('student-boy');
} else if (character === 'girl') {
  document.querySelector('.character').classList.add('student-girl');
  document.querySelector('.character').style.backgroundImage = "url('/images/gwalk1.png')";
}
document.addEventListener('DOMContentLoaded', function() {
  var characterButtons = document.querySelectorAll('.character');
  characterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var selectedCharacter = button.getAttribute('data-character');
      localStorage.setItem('selectedCharacter', selectedCharacter); 
      updateCharacter(selectedCharacter);
    });
  });

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
});

function updateCharacter(selectedCharacter) {
  var student = document.querySelector('.student');
  if (selectedCharacter === 'character_boy') {
    student.classList.remove('student-girl');
    student.classList.add('student-boy');
    student.style.backgroundImage = "url('/images/walk 1.png')";
  } else if (selectedCharacter === 'character_girl') {
    student.classList.remove('student-boy');
    student.classList.add('student-girl');
    student.style.backgroundImage = "url('/images/gwalk1.png')";
  }
}
function setCharacter(character) {
  localStorage.setItem('selectedCharacter', character);
}
var money = 0;
var hp = 100;
var shieldActive = false;
var intervalId = null;
var isWalking = false; 
function handleWeaponChange() {
    var selectedWeapon = document.getElementById("weapon-dropdown").value;
    var selectedCharacter = localStorage.getItem('selectedCharacter');
    document.getElementById("skill1Button").textContent = selectedWeapon + " - Skill1";
    document.getElementById("skill2Button").textContent = selectedWeapon + " - Skill2";
    if (selectedCharacter === 'boy') {
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
    } else if (selectedCharacter === 'girl') {
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
        index = (index + 1) % images.length; 
    }, 200); 
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; 
    }, 200 * (images.length + 1));
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
      index = (index + 1) % images.length;
    }, images[index].duration);
  
    var projection = document.querySelector('.projection');
    projection.style.display = 'block'; 
    projection.style.position = 'absolute'; 

    var studentRect = student.getBoundingClientRect();
    var projectionRect = projection.getBoundingClientRect();
    var horizontalOffset = (studentRect.width - projectionRect.width) / 2;
    var verticalOffset = (studentRect.height - projectionRect.height) / 2;
  

    projection.style.left = (studentRect.left + horizontalOffset) + 'px';
    projection.style.top = (studentRect.top + verticalOffset) + 'px';
  
    startProjectionMovement(); 
  
    setTimeout(function() {
      clearInterval(intervalId);
      student.style.backgroundImage = "url('/images/walk 1.png')"; 
      projection.style.display = 'none'; 
    }, images.reduce((acc, curr) => acc + curr.duration, 0));
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
      index = (index + 1) % images.length;
      if (index === images.length - 1) {
        startKnifeAnimation();
      }
    }, 200);
  
    setTimeout(function() {
      clearInterval(intervalId);
      student.style.backgroundImage = "url('/images/walk 1.png')"; 
    }, 200 * (images.length + 1));
  }
  function startKnifeAnimation() {
    var knife = document.querySelector('.knife');
    var student = document.querySelector('.student');
    var studentRect = student.getBoundingClientRect();
  
    knife.style.left = (studentRect.left - 20) + 'px';
    knife.style.top = (studentRect.top + 100) + 'px';
    knife.style.display = 'block';
  
    var knifeMoveInterval = setInterval(function() {
      var knifeLeft = parseInt(knife.style.left);
      knife.style.left = (knifeLeft - 50) + 'px';
  
      if (knifeLeft <= 0) {
        clearInterval(knifeMoveInterval);
        knife.style.display = 'none';
      }
    }, 50);
  }
  function startkSkill2Animation() {
    var images = ['/images/bk21.png', '/images/bk22.png'];
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
        student.style.backgroundImage = "url('/images/walk 1.png')"; 
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
        index = (index + 1) % images.length; 
    }, 700);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; 
        var summon = document.querySelector('.summon');
        summon.style.display = 'none';
    }, 700 * (images.length + 1));
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
        index = (index + 1) % images.length; 
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
        index = (index + 1) % images.length; 
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')"; 
    }, 200 * (images.length + 1)); 
}
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
        index = (index + 1) % images.length; 
        if (index === 1) {
            startLightWaveAnimation();
        }
    }, 200);

    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/walk 1.png')";
    }, 200 * (images.length + 1)); 
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
    }, 1000); 
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
        index = (index + 1) % images.length; 
    }, 200);
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')";
    }, 200 * (images.length + 1)); 
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
        index = (index + 1) % images.length; 
    }, 200); 
    setTimeout(function() {
        clearInterval(intervalId);
        student.style.backgroundImage = "url('/images/gwalk1.png')";
    }, 200 * (images.length + 1));
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
        student.style.backgroundImage = "url('/images/gwalk1.png')";
    }, 200 * (images.length + 1)); 
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

function updateValues() {

    document.getElementById("money").textContent = "Money: " + money;

    if (hp < 0) hp = 0; 
    document.getElementById("hp").textContent = "HP: " + hp + "%";
    if (selectedCharacter === 'character_boy'){
        if(startkSkill1Animation===true ){

        }
    }
}

setInterval(updateValues, 3000);
var intervalId;
var count = 0;
var isWalking = false;
function handleKeyDown(event) {
  var selectedWeapon = document.getElementById('weapon-dropdown').value;
  var selectedCharacter = localStorage.getItem('selectedCharacter');
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
    startWalking(event.key);
  }
    if (!isWalking) {
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
        case 'ArrowLeft':
          if (selectedCharacter === 'character_boy') {
            startbWalk(event.key);
          } else if (selectedCharacter === 'character_girl') {
            startgWalk(event.key);
          }
          startWalking(event.key);
        case 'ArrowRight':
          if (selectedCharacter === 'character_boy') {
            startbWalk(event.key);
          } else if (selectedCharacter === 'character_girl') {
            startgWalk(event.key);
          }
          startWalking(event.key);
        case 'ArrowUp':
          if (selectedCharacter === 'character_boy') {
            startbWalk(event.key);
          } else if (selectedCharacter === 'character_girl') {
            startgWalk(event.key);
          }
          startWalking(event.key);
        case 'ArrowDown':
          if (selectedCharacter === 'character_boy') {
            startbWalk(event.key);
          } else if (selectedCharacter === 'character_girl') {
            startgWalk(event.key);
          }
          startWalking(event.key);
          break;
        case 'Space':
          jump();
          break;
      }
  }
  let currentJumpVelocity = 0;
  let jumpIntervalId = null;
  
  function jump() {
    currentJumpVelocity = 5;
    jumpIntervalId = setInterval(() => {
      const student = document.querySelector('.student');
      const studentStyle = getComputedStyle(student);
      const studentTop = parseInt(studentStyle.top);
  
      student.style.top = (studentTop + currentJumpVelocity) + 'px';
      currentJumpVelocity -= 1;
  
      if (studentTop + student.offsetHeight >= window.innerHeight - taskbarHeight) {
        clearInterval(jumpIntervalId);
        student.style.top = (window.innerHeight - taskbarHeight - student.offsetHeight) + 'px';
      }
    }, 20);
  }
  function handleKeyUp(event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      stopWalking();
    }
    if (isWalking && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
      clearInterval(intervalId); 
      isWalking = false;
  
      var selectedCharacter = localStorage.getItem('selectedCharacter'); 
      if (selectedCharacter === 'character_boy') {
        document.querySelector('.student').style.backgroundImage = "url('/images/walk 1.png')";
      } else if (selectedCharacter === 'character_girl') {
        document.querySelector('.student').style.backgroundImage = "url('/images/gwalk1.png')";
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  });
  function startWalking(direction) {
    var selectedCharacter = localStorage.getItem('selectedCharacter');
    var student = document.querySelector('.student');
    var studentStyle = getComputedStyle(student);
    var studentTop = parseInt(studentStyle.top);
    var studentLeft = parseInt(studentStyle.left);
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var taskbarHeight = 40; 
    var taskbarWidth = 40; 
  
    var student = document.querySelector('.student');
    var studentStyle = getComputedStyle(student);
    var studentTop = parseInt(studentStyle.top);
    var studentLeft = parseInt(studentStyle.left);
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var taskbarHeight = 40;
    
    var taskbarWidth = 40;
    if (student.classList.contains('student-boy')) {
      startbWalk(direction);
    } else if (student.classList.contains('student-girl')) {
      startgWalk(direction);
    }
    if (direction === 'ArrowLeft') {
      student.style.left = (studentLeft - 20) + 'px';
    } else if (direction === 'ArrowRight') {
      student.style.left = (studentLeft + 20) + 'px';
    } else if (direction === 'ArrowUp') {
      student.style.top = (studentTop - 20) + 'px';
    } else if (direction === 'ArrowDown') {
      student.style.top = (studentTop + 20) + 'px';
    }
  }
  
  var count = 0; 

  function startbWalk(direction) {
    var student = document.querySelector('.student');
    var count = 0; 
    intervalId = setInterval(function() {
      if (count % 2 === 0) {
        student.style.backgroundImage ="url('/images/walk 2.png')";
      } else {
        student.style.backgroundImage = "url('/images/walk 1.png')";
      }
      count++;
    }, 200);
  }
  
  function startgWalk(direction) {
    var student = document.querySelector('.student');
    var count = 0; 
    intervalId = setInterval(function() {
      if (count % 2 === 0) {
        student.style.backgroundImage = "url('/images/gwalk2.png')";
      } else {
        student.style.backgroundImage = "url('/images/gwalk1.png')";
      }
      count++;
    }, 200);
  }
  function stopWalking() {
    clearInterval(intervalId);
    count = 0;
    var selectedCharacter = localStorage.getItem('selectedCharacter');
    if (selectedCharacter === 'character_boy') {
      document.querySelector('.student').style.backgroundImage = "url('/images/walk 1.png')";
    } else if (selectedCharacter === 'character_girl') {
      document.querySelector('.student').style.backgroundImage = "url('/images/gwalk1.png')";
    }
  }
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
  window.onload = updateContainerSize;
  window.onresize = updateContainerSize;
  var container = document.querySelector('.container');
container.style.width = window.innerWidth + 'px';
container.style.height = window.innerHeight + 'px';
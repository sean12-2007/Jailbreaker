document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name-input');
  const randomNameButton = document.getElementById('random-name-button');

  const names = ['鬼打牆炒年糕', '搞笑服裝設計師', '單純小說家', '後知後覺麵包', '鬼扯肉丸湯', '幼齒學生', '傻瓜獸人', '可愛冰精靈', '十足吃貨戰神', '白癡牛肉麵', '亂七八糟糯米雞', '清新沙拉', '純情創業家', '好奇烤餅', '懶惰熱炒', '痛快趙子龍', '呆若木雞歌妓', '痛快鹹酥雞', '瘋狗大嬸', '傻傻的棒棒糖'];

  function generateRandomName() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    nameInput.value = randomName;
  }

  randomNameButton.addEventListener('click', generateRandomName);
});

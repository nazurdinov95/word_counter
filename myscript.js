const countCharacter = document.getElementById('countCharacter');
const countCharTextarea = document.getElementById('countCharTextarea');
const showCharacters = document.getElementById('showCharacters');

function countChar() {
  countCharacter.value = countCharTextarea.value.length;
  showCharacters.innerHTML = countCharacter.value;
}

function countWord(val) {
  let wom = val.match(/\S+/g);
  return {
    words: wom ? wom.length : 0
  };
}

let showWordCount = document.getElementById('box');
countCharTextarea.addEventListener('input', function () {
  let v = countWord(this.value);
  showWordCount.innerHTML = (
      "<br>Words:" + v.words
  );
}, false);
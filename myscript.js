const countCharTextarea = document.getElementById('countCharTextarea');
const countCharacters = document.getElementById('countCharacters');
//const characters = document.getElementById('characters');

countCharTextarea.addEventListener("keyup",function() {
  const characters = countCharTextarea.value.split(' ');
  countCharacters.innerHTML = characters.length;
});

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
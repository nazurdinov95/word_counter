const countCharTextarea = document.getElementById('countCharTextarea');
const countCharacters = document.getElementById('countCharacters');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const showWordCount = document.getElementById('showWordCount');

countCharTextarea.addEventListener("keyup", function () {
  const sentences = countCharTextarea.value.split(/[.|!|?]/g);
  countCharacters.innerHTML = countCharTextarea.value.length;
  sentenceCount.innerHTML = sentences.length - 1;

});

function countWord(val) {
  let wom = val.match(/\b[-?(\w+)?]+\b/gi);
  return {
    words: wom ? wom.length : 0
  };
}

countCharTextarea.addEventListener('input', function () {
  let wordCounter = countWord(this.value);
  showWordCount.innerHTML = wordCounter.words;
  if (wordCounter) {
    let paragraphs = countCharTextarea.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
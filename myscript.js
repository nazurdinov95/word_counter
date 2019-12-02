const countCharTextarea = document.getElementById('countCharTextarea');
const countCharacters = document.getElementById('countCharacters');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const showWordCount = document.getElementById('showWordCount');

countCharTextarea.addEventListener("keyup", function () {
  countCharacters.innerHTML = countCharTextarea.value.length;
  let sentences = countCharTextarea.value.split(/[.|!|?]/g);
  sentenceCount.innerHTML = sentences.length - 1;
  let countWords = countCharTextarea.value.split(' ');
  showWordCount.innerHTML = countWords.length;

  if (countWords) {
    let paragraphs = countCharTextarea.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
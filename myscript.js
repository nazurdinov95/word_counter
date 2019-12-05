const countCharTextarea = document.getElementById('countCharTextarea');
const countCharacters = document.getElementById('countCharacters');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const showWordCount = document.getElementById('showWordCount');
const showThreeWord = document.getElementById('showThreeWord');

countCharTextarea.addEventListener("keyup", function () {
  //characters Counter
  countCharacters.innerHTML = countCharTextarea.value.length;

  //sentences counter
  let sentences = countCharTextarea.value.split(/[.|!|?]/g);
  sentenceCount.innerHTML = sentences.length - 1;

  //words counter
  let countWords = countCharTextarea.value.split(' ');
  showWordCount.innerHTML = countWords.length;

  //three words Counter
  let resaultThreeWords = countWords.filter(word => word.length === 3);
  showThreeWord.innerHTML = resaultThreeWords.length;

  //paragraphs counter
  if (countWords) {
    let paragraphs = countCharTextarea.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
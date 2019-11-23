const count_character = document.getElementById("count_character");
const count_char_textarea = document.getElementById("count_char_textarea");
const showCharacters = document.getElementById("showCharacters");

function count_char() {
  count_character.value = count_char_textarea.value.length;
  showCharacters.innerHTML = count_character.value;
}

function count_word(val) {
  let wom = val.match(/\S+/g);
  return {
    words: wom ? wom.length : 0
  };
}

let textContent = document.getElementById("count_char_textarea");
let showWordCount = document.getElementById("box");
textContent.addEventListener("input", function () {
  let v = count_word(this.value);
  showWordCount.innerHTML = (
      "<br>Words: " + v.words
  );
}, false);
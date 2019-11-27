const count_char = document.getElementById("count_char");
const count_char_textarea = document.getElementById("count_char_textarea");
const sum_out = document.getElementById("sum_out");

function countChar() {
  count_char.value = count_char_textarea.value.length;
  sum_out.innerHTML = count_char.value;
}
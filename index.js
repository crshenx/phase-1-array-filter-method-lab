// Code your solution here
function findMatching(array, string) {
  return array.filter((name) => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
  return array.filter((name) => name[0] === string[0]);
}

function matchName(array, string) {
  return array.filter((obj) => obj.name === string);
}

export const Icon = {
  interviewer: "☺",
  user: "☛",
  clock: "🕑",
};

export const orderAlphabeticallyByName = function (a, b) {
  // if (a.name.official < b.name.official) {
  //   return -1;
  // }
  // if (a.name.official > b.name.official) {
  //   return 1;
  // }
  // return 0;

  return a.name.common.localeCompare(b.name.common);
};

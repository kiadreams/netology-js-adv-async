import GameSavingLoader from "./GameSavingLoader.js";


GameSavingLoader.load()
  .then((saving) => {
    const gameSaving = JSON.parse(saving);
    console.log(gameSaving);
  }, (error) => {
    console.log(error);
  });

(async () => {
  try {
    const gameSaving = JSON.parse(await GameSavingLoader.load2());
    console.log(gameSaving);
  } catch (e) {
    console.log(e);
  }
})();
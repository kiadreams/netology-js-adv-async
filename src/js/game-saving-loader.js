import read from "./reader.js";
import json from "./parser.js";


export default class GameSavingLoader {
  static load() {
    return read()
      .then(data => {
        return json(data);
      });
  }

  static async load2() {
    return json(await read());
  }
}


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

import read from "./reader.js";
import json from "./parser.js";


export default class GameSavingLoader {
  static load() {
    return read()
      .then(data => {
        return json(data);
      })
      .catch(() => {
        throw new Error('Error load method');
      });
  }

  static async load2() {
    try {
      return json(await read());
    } catch {
      throw new Error('Error load2 method');
    }
  }
}

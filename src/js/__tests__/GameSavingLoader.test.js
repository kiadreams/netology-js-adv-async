import GameSavingLoader from "../GameSavingLoader.js";
import read from "../reader.js";


const sample = {
  id: 9,
  created: 1546300800,
  userInfo: {id: 1, name: 'Hitman', level: 10, points: 2000}
};
const originalRead = jest.requireActual("../reader.js");


jest.mock("../reader.js");
beforeEach(() => jest.resetAllMocks());


test('Testing resolved load method: promise of "read" function is resolved.', () => {
  read.mockReturnValue(originalRead.default());
  GameSavingLoader
    .load()
    .then(saving => {
      expect(JSON.parse(saving)).toEqual(sample);
    });
});

test('Testing resolved load2 method: promise of "read" function is resolved.', async () => {
  read.mockReturnValue(originalRead.default());
  const jsonData = await GameSavingLoader.load2();
  expect(JSON.parse(jsonData)).toEqual(sample);
});

test('Testing rejected load method: promise of "read" function is rejected.', () => {
  read.mockReturnValue(Promise.reject(new Error('Error read method')));
  expect(GameSavingLoader.load()).rejects.toThrow('Error load method')
});

test('Testing rejected load2 method: promise of "read" function is rejected.', async () => {
  read.mockReturnValue(Promise.reject(new Error('Error read method')));
  await expect(GameSavingLoader.load2()).rejects.toThrow('Error load2 method');
});

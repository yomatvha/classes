import Character from '../app';

test('heroCreate', () => {
  const hero = new Character('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(hero);
});

test('nameLength', () => {
  expect(() => new Character('h', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('characterType', () => {
  expect(() => new Character('hero', 'noname')).toThrow('Укажите тип персонажа');
});

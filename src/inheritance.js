const series = {
  title: 'title',
  creators: { writer: [], artist: [] },
  characters: [],
  getInfo: function () {
    console.log(`${this.title} by ${this.creators}`);
  },
  getCharacters: function () {
    console.log(`Starring: `, ...this.characters);
  },
};

const book = Object.create(series);
book.title = 'X-Men';
book.creators = ['Chris Claremont', 'Alan Davis'];
book.characters = ['Wolverine', 'Storm', 'Kitty Pryde'];
book.addCharacters = function (name) {
  this.characters.push(name);
};

const issue = Object.create(book);
issue.getCharacters();
// Starring:  Wolverine Storm Kitty Pryde
issue.addCharacters('Nightcrawler');
// Starring:  Wolverine Storm Kitty Pryde Nightcrawler
issue.getCharacters();

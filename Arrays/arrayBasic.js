class DVDs{
    constructor(name, releaseYear, actor) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.actor = actor;
    }
    movie() {
        return `Movie name: ${this.name}, Actor name: ${this.actor}, Release Year: ${this.releaseYear}`;
    }
}

let avengers = new DVDs('Avengers', 2012, 'Chris Hemsworth');
console.log(avengers.movie());
let kabaddi = new DVDs('Kabaddi', 2014, 'Dayahang Rai');
console.log(kabaddi.movie());
let loot = new DVDs('Loot', 2010, 'Saugat Malla');
console.log(loot.movie());

DVDs[7] = avengers;
DVDs[1] = kabaddi;
DVDs[4] = loot;

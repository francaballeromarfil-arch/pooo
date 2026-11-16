export default class Movie {
  constructor(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
  }

  render() {
    const card = document.createElement("div");
    card.innerHTML = `
      <h2>${this.title}</h2>
      <p>Director: ${this.director}</p>
      <p>Year: ${this.year}</p>
      <p>Rating: ${this.rating}/10</p>
    `;

    if (this.rating >= 8) {
      card.style.border = "2px solid gold";
    }

    return card;
  }
}

let bookShop = [];
let booksInfo = [];

const URL = "https://striveschool-api.herokuapp.com/books";

async function fetchBooks() {
  let response = await fetch(URL);
  {
    if (response.ok) {
      const data = await response.json();
      bookShop = data;
      showBooks(data);
      console.log(data);
    }
  }
}

showBooks = (data) => {
  let booksColumn = document.getElementById("booksDiv");

  booksColumn.innerHTML = "";

  data.forEach((books) => {
    booksColumn.innerHTML += `
    <div
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="card" id="${books.asin}">
        <img src="${books.img}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${books.title}</h5>
            <p class="card-text">${books.category}</p>
            <a href="#" class="btn btn-primary" onclick="addToCard(event)">Add card</a>
            <a href="#" class="btn btn-danger" onclick="deleteCard(event)">Skip</a>
        </div>
        </div>
        </div> `;
  });
};

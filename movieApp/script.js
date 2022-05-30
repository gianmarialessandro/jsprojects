
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e57544ea0cea1087284dd43b1b0f9229";
const IMGPATH = "https:/image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=e57544ea0cea1087284dd43b1b0f9229&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  
// console.log(respData);

  // respData.results.forEach(movie => {
  //     const img = document.createElement('img');
  //     img.src = IMGPATH + movie.poster_path;

  //     document.body.appendChild(img)
  // });

  showMovies(respData.results);
}

function showMovies(movies) {
  // clear main
  main.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    let path = IMGPATH + movie.poster_path;
    if(movie.poster_path == null) {
        path = "./notfound.png"; 
    }
    let title = movie.title;
    let rank = movie.vote_average;
    let overviews = movie.overview;
    if (overviews == null){
        overviews = "not overview available"
    }

    console.log(overviews)

    movieEl.innerHTML = `
            <img 
                src="${path}"
                alt="${title}"
            /img>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(rank)}">${rank}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overviews}
            </div>
        `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 7.5) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else return "red";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);

    search.value = '';
  }
});

// <div class="movie">
//     <img src="https://image.tmdb.org/t/p/w1280/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg" alt="">
//     <div class="movie-info">
//         <h3>Movie Title</h3>
//         <span>8.4</span>
//     </div>
// </div>

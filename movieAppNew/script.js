const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e57544ea0cea1087284dd43b1b0f9229";
const IMGPATH = "https:/image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=e57544ea0cea1087284dd43b1b0f9229&query=";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


showMovie(APIURL)

async function showMovie(url) {
  const res = await fetch(url);
  const resData = await res.json();

  // console.log(resData)

  getMovies(resData.results)
}

function getMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    const item = document.createElement('div');
    item.classList.add('item');

    const { title, vote_average, overview, poster_path} = movie;
    let path = IMGPATH + poster_path;
    if(poster_path == null) {
      path = './notfound.png'
    }
    // console.log(title)

    item.innerHTML = `
      <img src="${path}" alt="${title}">
      <div class="movie-info">
          <h3>${title}</h3>
          <span class="${setRankType(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview:</h3>
        ${overview}
      </div>
    `;

    main.appendChild(item);

  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchedTerm = search.value;
  if(searchedTerm) {
    showMovie(SEARCHAPI + searchedTerm);

    search.value = '';
  }
})

function setRankType(vote) {
  if(vote >= 8.0) {
    return 'super-green';
  }else if(vote >= 7.0) {
    return 'green';
  }else if(vote >= 6.0) {
    return 'green-yellow';
  }else if(vote >= 5.0) {
    return 'yellow-red';
  } else return 'red';
}


import React from 'react';
import "../css/Home.css"
// var imdbTrailerApi = "https://imdb-api.com/en/API/Trailer/";
// // var imdbKey = "k_zcmn64r8/";
// var imdbKey = "k_dxu9eccb/";
// var movieCard = document.querySelector(".movies-container");
const Movies = () => {





// document.addEventListener("click", function (event) {
//     if (event.target.id === "movies") {
//         getMovieTrailer(event.target.getAttribute("value"));
//     } else {
//         return;
//     }
//   });

// function getMovieTrailer(movieId) {
//     var requestUrl = imdbTrailerApi + imdbKey + movieId;
//     var result = fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         postMovieTrailer(data);
//       });
//     return result;
// };

// function postMovieTrailer(data) {
//     movieCard.textContent = "";
    
//     var trailerDiv = document.createElement("div");
//     trailerDiv.classList = "col-xl-8";
//     movieCard.append(trailerDiv);
//     var trailer = document.createElement("iframe");
//     trailer.setAttribute("src", data.linkEmbed);
//     trailer.setAttribute("height", "450");
//     trailer.setAttribute("width", "900");
//     trailerDiv.append(trailer);

//     var movieDiv = document.createElement("div");
//     movieDiv.classList = "col-xl-4 d-flex flex-column justify-content-center";
//     movieCard.append(movieDiv);
//     var title = document.createElement("h3");
//     title.textContent = data.fullTitle;
//     movieDiv.append(title);
//     var description = document.createElement("p");
//     description.textContent = data.videoDescription; 
//     movieDiv.append(description);

  return (
    <>
    
    <div className='flex w-[100vw] h-[160vh]'>
      <div className='flex justify-center items-center w-full h-20 mt-28'>
          <h1> Most Popular Marvel Movies</h1>
      </div>
     
      <div className='grid'>


      </div>




    </div>
    </>
  );
  }

export default Movies;
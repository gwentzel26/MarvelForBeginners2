import React from 'react';
import "../css/Home.css"
import avengers from "../assets/movies/avengers.jpg";
import antman from "../assets/movies/ant-man.webp";
import blackpanther from "../assets/movies/blackpanther.jpg";
import civilwar from "../assets/movies/civilwar.jpg";
import drStrange from "../assets/movies/drStrange.webp";
import Endgame from "../assets/movies/Endgame.jpg";
import farFromHome from "../assets/movies/far-from-home.jpg";
import guardians from "../assets/movies/guardians.jpg";
import guardians2 from "../assets/movies/guardians2.jpg";
import InfinityWar from "../assets/movies/InfinityWar.jpg";
import ironMan from "../assets/movies/ironMan.jpg";
import ShangChi from "../assets/movies/Shang-Chi.jpg";
import nowayHome from "../assets/movies/spider-man-no-way-home.jpg";
import homecoming from "../assets/movies/spiderman-homecoming.jpg";
import wintersoldier from "../assets/movies/wintersoldier.jpg";
import ragnarok from "../assets/movies/Thor-Ragnarok.jpg";
import rottenLogo from "../assets/movies/rotten-tomatoes-icon-18.png"
// var imdbTrailerApi = "https://imdb-api.com/en/API/Trailer/";
// // var imdbKey = "k_zcmn64r8/";
// var imdbKey = "k_dxu9eccb/";
// var movieCard = document.querySelector(".movies-container");
const Movies = () => {

  const movies = [
    {
      id: 1,
      src: blackpanther,
      alt: "Black Panther Movie Poster",
      style: 'shadow-blue-800',
      title: "Black Panther",
      rT: "96%",
    },
    {
      id: 2,
      src: Endgame,
      alt: "Endgame Movie Poster",
      style: 'shadow-blue-800',
      title: "Avengers: Endgame",
      rT: "94%",
    },
    {
      id: 3,
      src: ironMan,
      alt: "Iron Man Movie Poster",
      style: 'shadow-blue-800',
      title: "Iron Man",
      rT: "94%",
    },
    {
      id: 4,
      src: nowayHome,
      alt: "Spider-man No Way Home Movie Poster",
      style: 'shadow-blue-800',
      title: "Spider-man: No Way Home",
      rT: "93%",
    },
    {
      id: 5,
      src: ragnarok,
      alt: "Thor Ragnarok Movie Poster",
      style: 'shadow-blue-800',
      title: "Thor Ragnarok",
      rT: "93%",
    },

    {
      id: 6,
      src: homecoming,
      alt: "Spiderman Homecoming Movie Poster",
      style: 'shadow-blue-800',
      title: "Spider-man Homecoming",
      rT: "92%",
    },
    {
      id: 7,
      src: guardians,
      alt: "Guardians of the Galaxy Movie Poster",
      style: 'shadow-blue-800',
      title: "Guardians of the Galaxy",
      rT: "92%",
    },
    {
      id: 8,
      src: ShangChi,
      alt: "Shang-Chi Movie Poster",
      style: 'shadow-blue-800',
      title: "Shang-Chi",
      rT: "91%",
    },
    {
      id: 9,
      src: avengers,
      alt: "Avengers Movie Poster",
      style: 'shadow-blue-800',
      title: "Avengers",
      rT: "91%",
    },
    {
      id: 10,
      src: farFromHome,
      alt: "Spiderman Far From Home Movie Poster",
      style: 'shadow-blue-800',
      title: "Spiderman: Far From Home",
      rT: "90%",
    },
    {
      id: 11,
      src: civilwar,
      alt: "Captain America Civil War Movie Poster",
      style: 'shadow-blue-800',
      title: "Captain America: Civil War",
      rT: "90%",
    },
    {
      id: 12,
      src: wintersoldier,
      alt: "Captain America: The Winter Soldier Movie Poster",
      style: 'shadow-blue-800',
      title: "Captain America: The Winter Soldier",
      rT: "90%",
    },
    {
      id: 13,
      src: drStrange,
      alt: "Doctor Strange Movie Poster",
      style: 'shadow-blue-800',
      title: "Doctor Strange",
      rT: "89%",
    },
    {
      id: 14,
      src: InfinityWar,
      alt: "Avengers: Infinity War Movie Poster",
      style: 'shadow-blue-800',
      title: "Avengers: Infinity War",
      rT: "85%",
    },
    {
      id: 15,
      src: guardians2,
      alt: "Guardians of the Galaxy 2 Movie Poster",
      style: 'shadow-blue-800',
      title: "Guardians of the Galaxy 2",
      rT: "85%",
    },
    {
      id: 16,
      src: antman,
      alt: "Ant-man Movie Poster",
      style: 'shadow-blue-800',
      title: "Ant-man",
      rT: "83%",
    },
  ]




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
    
    
    <div name="movies" className='w-fit h-fit flex-col justify-center items-center pt-36 bg-gradient-to-r from-blue-500 to-white theaterImage'>
          <div className='flex justify-center items-center w-full h-20 mb-4'>
              <h1 className='text-3xl lg:text-6xl text-black'> Most Popular Marvel Movies</h1>
          </div>
   

       
          <div className='w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                      {
                        movies.map(({id, src, alt, style, title, rT}) => (
                          <div key={id} name="movieCard" className='mx-auto flex flex-col w-2/3 h-full'>
                            <div className="h-3/4 mb-2 shadow-white hover:shadow-lg">
                              <img src={src} alt={alt} className="h-full w-full border-8 border-double border-red-800 hover:scale-105 duration-300 " />
                            </div>

                              
                            <div className='flex flex-row justify-between h-1/5'>
                            <div className='w-3/4'>
                              <h2 className='text-white text-xl'>{title}</h2>
                              </div>
                            
                              <div className='flex w-1/4 justify-end'>
                                <img src={rottenLogo} alt="Rotten Tomato" className='w-1/3 h-1/4'/>
                                <p className='text-white px-2 text-xl'>{rT}</p>
                              </div>
                            </div>
                              

                          </div>
                        

                        ))
                      }

          </div>
  



    </div>
    
  );
  }

export default Movies;
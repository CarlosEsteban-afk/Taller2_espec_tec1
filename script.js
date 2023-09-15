// you can use this variable like this: videoGames.N64 to get the N64 video games list

const videoGames = require('./load-games.js');
const gbaGames = videoGames.GBA;
const n64Games = videoGames.N64;
const ps2Games = videoGames.PS2;

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// pregunta 1: ¿Para que consola? respuesta: Recomendar 2 juegos para una consola 
console.log('-------------------------------');

const consoleSelecction = 'GBA';
const recomendationPerConsole = [];

function recommendationsPerConsole(consoleSelecction) {

  switch (consoleSelecction) {
    case 'GBA':
      for (let i = 0; i < 2; i++) {
        recomendationPerConsole.push(gbaGames[randomNumberBetween(0, gbaGames.length)]);
      }
      break;
    case 'N64':
      for (let i = 0; i < 2; i++) {
        recomendationPerConsole.push(n64Games[randomNumberBetween(0, n64Games.length)]);
      }
      break;
    case 'PS2':
      for (let i = 0; i < 2; i++) {
        recomendationPerConsole.push(ps2Games[randomNumberBetween(0, ps2Games.length)]);
      }
      break;
    default:
      console.log('consola no identificada');

      break;
  }

}
recommendationsPerConsole(consoleSelecction);

recomendationPerConsole.forEach(recomendationPerConsole => {
  console.log(`NOMBRE: ${recomendationPerConsole.name} - CONSOLA: ${recomendationPerConsole.video_console} - GENERO: ${recomendationPerConsole.genres}`)
});

console.log('-------------------------------');


// pregunta 2: ¿Para que genero? respuesta: Recomendar 3 juegos para un genero
const recommendationsPerGenre = [];
function recommendationPerGenre(genreSelected) {

  const gbaGenre = videoGames.GBA.filter(
    game => game.genres.includes(genreSelected));

  const ps2Genre = videoGames.PS2.filter(
    game => game.genres.includes(genreSelected));

  const n64Genre = videoGames.N64.filter(
    game => game.genres.includes(genreSelected));

  const gamesByGenre = gbaGenre.concat(ps2Genre, n64Genre);

  videoGames.GBA.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.PS2.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.N64.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });


  for (let i = 0; i < 3; i++) {
    recommendationsPerGenre.push(gamesByGenre[randomNumberBetween(0, gamesByGenre.length)]);

  }

  recommendationsPerGenre.forEach(game => {
    console.log(`NOMBRE: ${game.name} - CONSOLA: ${game.video_console} - GENERO: ${game.genres} - Multigénero: ${game.isMultigenre}`);

  })
}

recommendationPerGenre('Survival Horror');
console.log('-------------------------------');
//Pregunta 3: ¿Para que consola y genero? Respuesta: recomendar un juego para una consola y genero especifico
function recommendationPerConsoleAndGenre(console_, genre) {

  switch (console_) {
    case 'GBA':

      const gbaGenre = videoGames.GBA.filter(
        game => game.genres.includes(genre));
      gbaGenre.forEach(
        game => {
          console.log(`NOMBRE: ${game.name} - CONSOLA: ${game.video_console} - GENERO: ${game.genres} - Multigénero: ${game.isMultigenre}`);

        }
      );
      break;
    case 'N64':

      const n64Genre = videoGames.N64.filter(
        game => game.genres.includes(genre));
      n64Genre.forEach(
        game => {
          console.log(`NOMBRE: ${game.name} - CONSOLA: ${game.video_console} - GENERO: ${game.genres} - Multigénero: ${game.isMultigenre}`);
        }
      );


      break;
    case 'PS2':
      const ps2Genre = videoGames.PS2.filter(
        game => game.genres.includes(genre));
      ps2Genre.forEach(
        game => {
          console.log(`NOMBRE: ${game.name} - CONSOLA: ${game.video_console} - GENERO: ${game.genres} - Multigénero: ${game.isMultigenre}`);
        }
      );

      break;
    default:
      console.log('consola no identificada');

      break;
  }


}
recommendationPerConsoleAndGenre('PS2', 'Action');

console.log('-------------------------------');
//Pregunta 4: Buscar juego por nombre 
function searchGameByName(gameToFind) {
  const minus = gameToFind.toUpperCase();
  console.log(searchGameByNameGba(minus));
  console.log(searchGameByNameN64(minus));
  console.log(searchGameByNamePs2(minus));
}

searchGameByName('POKÉMON FIRERED AND LEAFGREEN');

function searchGameByNameN64(gameToFind) {

  return n64Games.filter(
    function (n64Games) {
      return n64Games.name.toUpperCase() === gameToFind
    }
  );

};
function searchGameByNamePs2(gameToFind) {

  return ps2Games.filter(
    function (ps2Games) {
      return ps2Games.name.toUpperCase() === gameToFind
    }
  );

};
function searchGameByNameGba(gameToFind) {

  return gbaGames.filter(
    function (gbaGames) {
      return gbaGames.name.toUpperCase() === gameToFind
    }
  );

};







console.log('-------------------------------');

//pregunta 5: Listado de juegos segun genero
function searchGameByGenre(genreSelected) {

  const gbaGenre = videoGames.GBA.filter(
    game => game.genres.includes(genreSelected));

  const ps2Genre = videoGames.PS2.filter(
    game => game.genres.includes(genreSelected));

  const n64Genre = videoGames.N64.filter(
    game => game.genres.includes(genreSelected));

  const gamesByGenre = gbaGenre.concat(ps2Genre, n64Genre);

  videoGames.GBA.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.PS2.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.N64.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });


  gamesByGenre.forEach(game => {
    console.log(`NOMBRE: ${game.name} - CONSOLA: ${game.video_console} - GENERO: ${game.genres} - Multigénero: ${game.isMultigenre}`);

  })
  // console.log(gamesByGenre);
}
searchGameByGenre('RPG');
console.log('-------------------------------');















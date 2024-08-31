const fs = require('fs');
const path = require('path');

const axiosRequest = require('../utils/axiosInstance');

const getGenresMiddleware = (req, res, next) => {
  const filePath = path.join(process.cwd(), 'data', 'genresData.json');

  fs.readFile(filePath, 'utf-8', async (err, data) => {
    if (err) {
      const moviesResponse = await axiosRequest.get('/genre/movie/list');
      const moviesGenres = moviesResponse.data.genres;

      const showsResponse = await axiosRequest.get('/genre/tv/list');
      const showsGenres = showsResponse.data.genres;

      const genresData = {
        moviesGenres,
        showsGenres,
      };

      fs.writeFile(filePath, JSON.stringify(genresData), (error) => {
        if (error) throw new Error('Something went wrong');
      });
    }
    if (data) {
      next();
    }
  });
};

module.exports = getGenresMiddleware;

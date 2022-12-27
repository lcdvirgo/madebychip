const moviesUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgiHufoi4qHxfGCjINKfzL2dwCJQdId9wDHTSKdwmYu0tg5MrlUmPQQlQA_R7-AnNW1ZICyp_bVZZb/pub?gid=116064874&single=true&output=csv";
    
    const showsUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtKbv_S8Fdo3HLhm64Tc94WZ6FuqtzqePIjuejNFJxKkUvAE8JF8V2KgKoz1n5jQUDfL8A3F-QoDWk/pub?gid=1364847678&single=true&output=csv";
    
    const app = new Vue({
      el: "#app",
      data: function () {
        return {
          movies: [],
          shows: []
        };
      },
      created: function () {
        this.fetchMovies();
        this.fetchShows();
      },
      methods: {
        fetchMovies() {
          
          Papa.parse(moviesUrl, {
            download: true,
            header: true,
            complete: (results) => this.movies = results.data
          });
        },
        fetchShows() {
          const _this = this;
          Papa.parse(showsUrl, {
            download: true,
            header: true,
            complete: function(results) { _this.shows = results.data; }
          });
        }
      }
    });  
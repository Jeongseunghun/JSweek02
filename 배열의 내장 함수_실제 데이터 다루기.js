// 1. 영화의 id, 제목, 년도, 평점, 장르 데이터를 갖고있는 리스트를 생성한다.
// 모듈 불러오기
const movieData = require('./data.js');

// customMap 함수 사용
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }


const movieList1 = customMap(movieData, movie => ({
    id: movie.id,
    title: movie.title,
    year: movie.year,
    rating: movie.rating,
    genres: movie.genres
  }));
  
console.log(movieList1);


// lodash 라이브러리 사용
const _ = require('lodash');

const movieList2 = _.map(movieData, movie => _.pick(movie, ['id', 'title', 'year', 'rating', 'genres']));

console.log(movieList2);


// 2. 평점을 input으로 받아 해당 평점 이상의 평점을 갖는 리스트를 반환한다.
// 모듈 불러오기
// const movieData = require('./data.js');

// customFilter 함수 사용
function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }

const inputRating = 8.0;

const ratingList = customFilter(movieData, movie => movie.rating >= inputRating);

console.log(ratingList);

// lodash 라이브러리 사용
// const _ = require('lodash');

const ratingList2 = _.filter(movieData, movie => movie.rating >= inputRating);

// 결과 출력
console.log(ratingList2);
  

// 3. 갖고 있는 영화리스트들의 모든 장르를 추출해 중복되지 않은 장르 리스트를 생성한다.
// 모듈 불러오기
// const movieData = require('./data.js');

// customMap 함수 사용
function customMap2(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }

// 갖고 있는 영화 리스트들의 모든 장르 추출
const allGenres = customMap2(movieData, movie => movie.genres)
  .reduce((acc, genres) => acc.concat(genres), []); // 장르들을 합쳐 1차원 배열로 변환

const uniqueGenres = [...new Set(allGenres)];

console.log(uniqueGenres);

// lodash 라이브러리 사용
// const _ = require('lodash');

const uniqueGenres2 = _.uniq(_.flatMap(movieData, 'genres'));

console.log(uniqueGenres2);
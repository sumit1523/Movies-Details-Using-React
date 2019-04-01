import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

const movies = [
  {
    id:1,
    title: 'Start Wars',
    desc: 'A space Movie'
  },
  {
    id:2,
    title: 'Spider Man'
  },
  {
    id:3,
    title: 'Start Wars I'
  },
  {
    id:4,
    title: 'Start Wars II'
  },
];

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {movies.map((movies)=>{
//             return(
//               <div key= {movies.id}>
//                 {movies.title}
//               </div>
//             )
//           })}
//         </header>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {movies.map(movies =>(
//               <div key= {movies.id}>
//                 {movies.title}
//               </div>
//           ))}
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* {movies.map(movie =>(
              <Movies key= {movie.id} movie={movie}/>
          ))} */}

          {movies.map(movie => <Movies key= {movie.id} movie={movie} desc={movie.desc}/>)}
        </header>
      </div>
    );
  }
}
export default App;

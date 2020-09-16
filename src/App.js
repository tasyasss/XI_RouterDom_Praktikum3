//membuat link antar components
import React from 'react';
import Utama from './Components/utama';

import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div align="center"> <hr />
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" align="right">
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#menu">
            <span class="navbar navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
			      <ul className="navbar-nav" align="center">
              <li className="nav-item"><a href="Beranda" className="nav-link">Beranda</a></li>
              <li className="nav-item"><a href="Karya" className="nav-link">Karya</a></li>
              <li className="nav-item"><a href="Kontak" className="nav-link">Kontak</a></li>
              <li className="nav-item"><a href="TentangSaya" className="nav-link">Tentang Saya</a></li>
			      </ul>
      		</div>
        </nav> <hr />
        <p><Utama /></p>
      </div>
    );
  }
}
export default App;

// // modifikasi App.js
// import React, {Component} from 'react';
// import './App.css';

// class App extends Component {
//  render(){
//  return (
//  <div className="App container"> 
//  <div className="alert alert-info">
//  <h3 className="text-danger">Ini Project</h3>
//  <p>Belajar React JS itu mudah</p>
//  <button className="mr-1 btn btn-success">Setuju</button>
//  <button className="btn btn-info">Iya Dong</button>
//  </div>
//  </div>
//  );
//  } 
// }
// export default App;

// // coding bawaan
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

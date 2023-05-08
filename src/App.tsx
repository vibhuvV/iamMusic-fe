import React from 'react';
import './App.scss';

export default function App() {
  return (
    <main>
      <div className="player">
        <nav>
          <div className="left">
            <i className="material-icons">menu</i>
            <h6>Playlist</h6>
          </div>
          <div className="right">
            <i className="material-icons search">search</i>
            <i className="material-icons">queue_music</i>
          </div>
        </nav>
        <div className="container">
          <div className="player-ui">
            <div className="title">
              <h3>Hello</h3>
            </div>
            <div className="small">
              <i className="material-icons">replay</i>
              <p>Adele</p>
              <i className="material-icons">volume_up</i>
            </div>
            <div className="progress">
              <div className="played">
                <div className="circle"></div>
              </div>
            </div>
            <div className="controls">
              <i className="material-icons">skip_previous</i>
              <i className="material-icons">play_arrow</i>
              <i className="material-icons">skip_next</i>
            </div>
          </div>
          <div className="music">
            <div className="song-1">
              <div className="info">
                <div className="img first"></div>
                <div className="titles">
                  <h5>Hello</h5>
                  <p>Adele</p>
                </div>
              </div>
              <div className="state playing">
                <i className="material-icons">equalizer</i>
              </div>
            </div>
            <div className="song-2">
              <div className="info">
                <div className="img second"></div>
                <div className="titles">
                  <h5>Californication</h5>
                  <p>Red Hot Chili Pepers</p>
                </div>
              </div>
              <div className="state">
                <i className="material-icons">play_arrow</i>
              </div>
            </div>
            <div className="song-3">
              <div className="info">
                <div className="img third"></div>
                <div className="titles">
                  <h5>6 INCH</h5>
                  <p>beyoncé</p>
                </div>
              </div>
              <div className="state">
                <i className="material-icons">play_arrow</i>
              </div>
            </div>
            <div className="song-4">
              <div className="info">
                <div className="img fourth"></div>
                <div className="titles">
                  <h5>Purple rain</h5>
                  <p>Prince & The Revolution</p>
                </div>
              </div>
              <div className="state">
                <i className="material-icons">play_arrow</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

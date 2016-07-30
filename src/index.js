import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route} from 'react-router';

import './index.css'

import ProfileContainer from './containers/ProfileContainer'

const ALBUM_DATA = {
  "title": "In Colour",
  "artist": "Jamie XX",
  "artWork": "https://upload.wikimedia.org/wikipedia/en/c/c2/Jamie_xx_-_In_Colour.png",
  "tracks": [
    {
      "title": "Gosh",
      "duration": 4.51
    },
    {
      "title": "Sleep Sound",
      "duration": 3.52
    },
    {
      "title": "SeeSaw",
      "duration": 4.28
    },
    {
      "title": "Obvs",
      "duration": 3.51
    },
    {
      "title": "Just Saying",
      "duration": 1.23
    },
    {
      "title": "Stranger in a Room",
      "duration": 2.57
    },
    {
      "title": "Hold Tight",
      "duration": 4.03
    },
    {
      "title": "Loud Places",
      "duration": 4.43
    },
    {
      "title": "I Know There's Gonna Be (Good Times)",
      "duration": 3.33
    },
    {
      "title": "The Rest Is Noise",
      "duration": 4.58
    },
    {
      "title": "Girl",
      "duration": 4.05
    }
  ]
}

ReactDOM.render(<ProfileContainer />, document.getElementById('app'));

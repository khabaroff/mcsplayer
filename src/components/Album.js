import React, {Component, PropTypes} from 'react'

function Album(props) {
  return (
      <div className="Album">
        <img className="Album-artWork" src={props.artWork} />

        <div className="Album-artist">{props.artist}</div>
        <div className="Album-title">{props.title}</div>
      </div>
    )
}

Album.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artWork: PropTypes.string
}

export default Album

import React, {Component, PropTypes} from 'react'

import Track from '../components/Track'

function TrackList(props) {
  const trackItems = props.tracks.map(function(track, index) {
    return <Track key={index}
      number={index}
      title={track.name}
      id={track.id}
      previewUrl={track.preview_url}
      duration={track.duration}
      onPlayTrack={props.onPlayTrack}
      onAddTrack={props.onAddTrack}
      />

  });

  return (
      <ol className="TrackList">
        {trackItems}
      </ol>
    )
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired
}

export default TrackList

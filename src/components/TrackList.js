import React, {Component, PropTypes} from 'react'

import Track from '../components/Track'

function TrackList(props) {
  const trackItems = props.tracks.map(function(track, index) {
    return <Track key={index} number={index} title={track.title}
      duration={track.duration} />
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

import React, {Component} from 'react'

import Album from '../components/Album'
import TrackList from '../components/TrackList'

class PlayerContainer extends Component {
  render() {
    console.log(this.props)

    return (
      <div className='Player'>
          <Album artWork={this.props.data.artWork} artist={this.props.data.artist}
            title={this.props.data.title} />
          <TrackList tracks={this.props.data.tracks} />
      </div>
    )
  }
}

export default PlayerContainer

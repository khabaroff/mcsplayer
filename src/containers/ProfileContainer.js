import React, {Component} from 'react'

import Input from '../components/Input'
import Textarea from '../components/Textarea'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      bio: '',
      contacts: []
    }
  }

  handleFullNameUpdate(e) {
      this.setState({
        fullName: e.target.value
      })
  }

  handleBioUpdate(e) {
      this.setState({
        bio: e.target.value
      })
  }

  componentWillUpdate() {
    // console.log(this.state)
  }

  componentDidMount() {
    // alert('ready')
  }

  render() {
    console.log(this.props)

    return (
      <div className='Profile'>
        <h1>Profile</h1>

        <Input label='Full name' value={this.state.fullName} onUpdate={this.handleFullNameUpdate.bind(this)}/>
        <Textarea label='Bio' value={this.state.bio} onUpdate={this.handleBioUpdate.bind(this)}/>

        <h2>Contacts</h2>
      </div>
    )
  }
}

export default ProfileContainer

import React from 'react'
import '../../Styles/DropDownN/DropDownN.css'

class Collapsible extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.togglePanel = this.togglePanel.bind(this)
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open })
  }

  componentDidUpdate() {
    // this.props.onToggle(this.props.index);
  }

  render() {
    return (
      <div>
        <div onClick={e => this.togglePanel(e)} className='header'>
          <div className='header__icon' />
          <h1>MORE</h1>
        </div>
        {this.state.open ? <div className='content'>{this.props.children}</div> : null}
      </div>
    )
  }
}

class DropDown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='dropdown__container'>
        <Collapsible>
          <div>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
            <button>hello</button>
            <div className='horizontal-break' />
          </div>
        </Collapsible>
      </div>
    )
  }
}
export default DropDown

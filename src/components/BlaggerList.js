import React from 'react'
import BlaggerLogo from './blagger-logo.svg'

class BlaggerList extends React.Component {
  state = {
    title: 'untitled log',
    logDate: new Date().toUTCString(),
    logs: [],
    field: '',
    titleEdit: false,
  }

  renderedPosts() {
    const renderedPosts = []
    this.state.logs.forEach((item, i) => {
      const formattedPost = (
        <div key={i}>
          <div style={{ fontStyle: 'italic' }}>{item.timeStamp}</div>
          <br />
          <p>{item.content}</p>
          <br />
        </div>
      )
      renderedPosts.push(formattedPost)
    })
    return renderedPosts
  }
  onButtonClick() {
    if (this.state.field === '') {
      return
    }
    const newPost = {
      timeStamp: new Date().toUTCString(),
      content: this.state.field,
    }
    const newPosts = this.state.logs
    newPosts.push(newPost)
    this.setState({ logs: newPosts, field: '' })
  }
  onEnter(key) {
    return key === 'Enter' && this.state.field !== ''
      ? this.onButtonClick()
      : null
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={BlaggerLogo} alt="logo" />
        </div>
        <br />
        <div className="ui inverted segment">
          {this.state.titleEdit ? (
            <div className="ui action inverted  input">
              <input
                type="text"
                value={this.state.title}
                placeholder="Enter a title"
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <div
                className="ui icon inverted button input"
                onClick={() => {
                  this.setState({ titleEdit: false })
                }}
              >
                save
              </div>
            </div>
          ) : (
            <div onClick={() => this.setState({ titleEdit: true })}>
              <h1>{this.state.title}</h1>
            </div>
          )}
        </div>
        <div className="ui inverted segment">
          <span style={{ fontStyle: 'italic' }}>
            Started {this.state.logDate}
          </span>
        </div>
        <br />
        <div className="ui inverted segment">
          {this.renderedPosts()}
          <div className="ui fluid action input">
            <input
              type="text"
              value={this.state.field}
              onKeyPress={(e) => this.onEnter(e.key)}
              onChange={(e) => {
                this.setState({ field: e.target.value })
              }}
            />
            <div
              className="ui inverted button"
              onClick={() => this.onButtonClick()}
            >
              post
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BlaggerList.defaultProps = {
  title: 'untitled',
  logs: [
    {
      timeStamp: 'Tue, 28 Apr 2020 21:23:06 GMT',
      content: 'attempted to update some drivers',
    },
    {
      timeStamp: 'Tue, 28 Apr 2020 21:23:06 GMT',
      content: 'welp the drive update did not work...',
    },
  ],
  field: 'some content',
}

const titleField = () => {
  if (this.state.titleEdit) {
    return <div>EDITING TITLE</div>
  }
  return (
    <div>
      <h1>{this.state.title}</h1>
    </div>
  )
}
export default BlaggerList

import React, { Component } from 'react'

class ArticleForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addArticle({
      title: this.state.title,
      body: this.state.body
    })
    this.setState({
      title: '',
      body: ''
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form
        className="w-100"
        onSubmit={this.handleSubmit}
      >
        <input
          className="border border-gray-700 rounded px-3 py-2 mb-3 w-full"
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          className="border border-gray-700 rounded px-3 py-2 mb-3 w-full"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button
          className="block border border-gray-700 rounded px-5 py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  }
}

export default ArticleForm
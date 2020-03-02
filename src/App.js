import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      articles: [
        {
          id: 1,
          title: 'First Article',
          body: 'Hello World'
        },
        {
          id: 2,
          title: 'Welcome',
          body: 'Welcome to react world'
        },
      ]
    }
  }

  addArticle = (article) => {
    this.setState({
      articles: [
        ...this.state.articles,
        {
          id: this.state.articles[this.state.articles.length - 1]?.id || 0 + 1,
          ...article
        }
      ]
    })
  }

  toggleShowForm = () => {
    this.setState(state => {
      return {
        showForm: !state.showForm
      }
    })
  }

  render() {
    return (
      <div className="flex container mx-auto pt-8">
        <div className="w-3/5">
          <ArticleList articles={this.state.articles} />
        </div>
        <div className="w-2/5">
          <button
            className="border border-black rounded py-2 px-3 mb-6"
            onClick={this.toggleShowForm}
          >
            {this.state.showForm ? 'HIDE FORM' : 'SHOW FORM'}
          </button>
          {
            this.state.showForm
            && <ArticleForm addArticle={this.addArticle} />
          }
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import ArticleItem from './ArticleItem'

class ArticleList extends Component {
  render() {
    return (
      <div className="pr-6">
        {
          this.props.articles.map(article => {
            return (
              <ArticleItem key={article.id} article={article} />
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList
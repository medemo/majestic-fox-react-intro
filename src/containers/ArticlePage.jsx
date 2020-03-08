import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ArticleItem from 'components/ArticleItem'

const ArticlePage = () => {
  const { articleId } = useParams()

  const article = useSelector(
    state => state.articles[Number(articleId)]
  )

  return (
    <div>
      <p className="mb-6 italic text-gray-500">Enjoy the article</p>
      <ArticleItem article={article} />
    </div>
  )
}

export default ArticlePage
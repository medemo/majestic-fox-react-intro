import React from 'react'
import ArticleList from 'components/ArticleList'
import ArticleForm from 'components/ArticleForm'

const HomePage = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <ArticleList />
      </div>
      <div className="col-span-2">
        <div className="mb-10">
          <h1 className="text-xl mb-2 uppercase font-semibold">Post an article</h1>
          <ArticleForm />
        </div>
      </div>
    </div>
  )
}

export default HomePage
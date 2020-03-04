import React from 'react'
import ArticleList from '../components/ArticleList'
import ArticleForm from '../components/ArticleForm'

const HomePage = () => {
  return (
    <>
      <div className="w-3/5">
        <ArticleList />
      </div>
      <div className="w-2/5">
        <div className="mb-10">
          <h1 className="text-xl mb-2 uppercase font-semibold">Post an article</h1>
          <ArticleForm />
        </div>
      </div>
    </>
  )
}

export default HomePage
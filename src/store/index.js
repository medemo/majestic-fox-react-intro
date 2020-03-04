import { createStore } from 'redux'

const initialState = {
  articles: {
    1: {
      id: 1,
      title: 'First Article',
      body: 'Hello World'
    },
    2: {
      id: 2,
      title: 'Welcome',
      body: 'Welcome to react world'
    },
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const id = (Math.max(...Object.keys(state.articles).map(Number)) || 0) + 1
      return {
        ...state,
        articles: {
          ...state.articles,
          [id]: {
            id,
            ...action.article
          }
        }
      }
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
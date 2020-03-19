
import * as React from 'react'
import Posts from './components/Posts/'
import CommentsZustand from './components/Comments.zustand'
import CommentsReduce from './components/Comments.reduce'
import CommentsState from './components/Comments.state'
import Dashboard from './components/Dashboard'

export default {
  '/': () => <Dashboard />,
  '/posts': () => <Posts />,
  '/comments/zustand': () => <CommentsZustand />,
  '/comments/state': () => <CommentsState />,
  '/comments/reduce': () => <CommentsReduce />,
  '/comments/:id': ({id}) => <CommentsReduce id={id} />
};

 

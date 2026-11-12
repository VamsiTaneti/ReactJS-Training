import { useState } from 'react'
import './App.css'
import BooksList from './components/BooksList'
import StudentsList from './components/StudentsList'

export default function App() {
  return (
    <div>
      <h1>Library Management</h1>
      <div style={{display:'flex', justifyContent: 'space-around', gap:'40px'}}>
      <BooksList />
      <StudentsList />
    </div>
    </div>
  )
}

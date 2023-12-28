'use client';
import React from 'react'

const Error = ({ error }) => {
  return (
    <main className='error'>
        <h1>An Error Occurred!</h1>
        <p>Failed to fetch meal. Please try again later</p>
    </main>
  )
}

export default Error;
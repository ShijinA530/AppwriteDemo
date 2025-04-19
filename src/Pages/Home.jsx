import React, { useEffect, useState } from 'react'
import { databases } from '../lib/appwrite'
import db from '../lib/databases'

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await db.tasks.list()
            setTasks(response.documents)
        }
        fetchTasks()
    })
  return (
    <div>
          <h2 className='text-4xl'>Home</h2>
          {tasks.map((task) => (
              <div key={task.$id}>
                  <h4 className='text-blue-800 text-2xl'>{task.body}</h4>
              </div>
          ))}
          <a href="/about" className='hover:underline'>About Me</a>
    </div>
  )
}

export default Home

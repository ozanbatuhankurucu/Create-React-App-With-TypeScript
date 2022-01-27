import { useState, ChangeEvent } from 'react'
import './App.css'
import Header from './Header'
interface User {
  name: string
  age: number
}

function App() {
  const [title, setTitle] = useState<string>('React')
  const [user, setUser] = useState<User>({ name: '', age: 0 })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUser((prevUser: User): User => ({ ...prevUser, [event.target.name]: event.target.value }))
  }

  return (
    <div className='App'>
      <Header title={title} fontSize={32} />
      <input
        type='text'
        value={title}
        placeholder='Change title'
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <input
        type='text'
        style={{ display: 'block', margin: '8px auto' }}
        placeholder='User name'
        name='name'
        value={user.name}
        onChange={handleChange}
      />
      <p>{`User: ${user.name}`}</p>
    </div>
  )
}

export default App

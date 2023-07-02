/* eslint-disable react/prop-types */
import { Filters } from './Filters'

export function Header () {
  return (
    <header className='w-full flex flex-col items-center text-center text-4xl '>
      <h1>React Shop 🛸</h1>
      <Filters/>
    </header>
  )
}

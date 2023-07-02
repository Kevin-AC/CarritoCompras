/* eslint-disable react/prop-types */
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="flex flex-col sm:flex-row  gap-4 text-base my-4 ">
      <div className="flex gap-4">
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          id={minPriceFilterId}
          type='range'
          min='0'
          max='1000'
          onChange={handleMinPrice}
          value={filters?.minPrice}
          />

        <span>${filters?.minPrice}</span>
      </div>
      <div className="flex gap-4">
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}

/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products ({ products }) {
  const { addToCart, cart, removeFronCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='w-full flex justify-center items-center '>
      <ul className='w-full grid grid-cols-autoFit gap-4'>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
          <li className='bg-[#111] text-white text-center flex flex-col gap-3 p-4 rounded'
           key={product.id}>
            <img className='rounded-lg w-full aspect-video block object-cover bg-white'
              src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                <button className={`py-1 px-2 rounded-lg ${isProductInCart ? 'bg-red-500' : 'bg-blue-500'}`}
                  onClick={() => {
                    isProductInCart
                      ? removeFronCart(product)
                      : addToCart(product)
                  }}
                  >

                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon /> }
              </button>
            </div>
          </li>
          )
        })}
      </ul>

    </main>
  )
}

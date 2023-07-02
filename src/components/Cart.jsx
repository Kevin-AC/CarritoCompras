/* eslint-disable react/prop-types */
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
// import { Products } from './Products'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className='border-b border-[#444] pb-4 flex flex-col gap-3'>
      <img className='w-full aspect-video'
        src={thumbnail}
        alt={title}/>

      <div >
        <strong>iPhone</strong>- ${price}
      </div>
      <footer className='flex gap-8 justify-center items-center'>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart} className='py-1 px-2 rounded-sm bg-slate-700 '>+</button>
      </footer>

    </li>
  )
}

export function Cart () {
  const cartCheckoxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
    <label className='cart-button z-50 bg-sky-600 text-white '
      htmlFor={cartCheckoxId}>
      <CartIcon/>
    </label>
      <input className='peer'
      type="checkbox"
      id={cartCheckoxId}
      hidden />
      <aside className='bg-[#000] hidden p-8 z-40  fixed right-0 top-0 w-52 rounded-lg peer-checked:block h-full'>
        <ul className='text-center'>
            {cart.map(product => (
              <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}/>
            ))}
        </ul>
        <button className='bg-slate-600 p-2 rounded-sm mt-2 text-white'
          onClick={clearCart}
        ><ClearCartIcon/></button>
      </aside>
    </>
  )
}

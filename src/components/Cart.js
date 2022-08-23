import React, { useState, useEffect } from 'react'

const Cart = ({ state, dispatch }) => {
  const { cart } = state

  const [total, setTotal] = useState(0)

  const changeQty = (id, qty) => {
    dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty } })
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0))
  }, [cart])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#ececec',
        padding: 10,
        width: '20%',
      }}
    >
      <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
      <b style={{ fontSize: 30, alignSelf: 'center' }}>Subtotal : $ {total}</b>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: 'flex',
                padding: 10,
                border: '1px solid grey',
                margin: 5,
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: 10 }}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{ width: 70, objectFit: 'cover' }}
                ></img>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <span> {prod.title}</span>
                  <span> $ {prod.price}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: 'center' }}>
            Cart is empty
          </span>
        )}
      </div>
    </div>
  )
}

export default Cart

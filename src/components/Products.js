import React from 'react'

const Products = ({ state, dispatch }) => {
  const { products, cart } = state
  console.log(cart)
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            border: '1px solid grey',
            width: '30%',
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ height: 200, objectFit: 'cover' }}
          ></img>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span> {product.title}</span>
            <span> $ {product.price}</span>
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <button
              type="button"
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: '#e53935',
                color: 'white',
              }}
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product,
                })
              }
            >
              Remove From cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: {
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    qty: 1,
                    price: product.price,
                  },
                })
              }
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: 'green',
                color: 'white',
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Products

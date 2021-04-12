import React, { useState } from "react"
import getStripe from "../../utils/stripejs"


const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}
const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/canceled`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
<>

<div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
      <form onSubmit={handleSubmit} className="relative rounded shadow">
        <fieldset style={{ border: "none" }}>
            <figure>
            <img src="https://bootstrapshuffle.com/placeholders-2-0/pictures/paper.jpg" alt />
            </figure>
          <legend>
          <div className="px-5 py-4 border-b">
          <h3 className="mb-1 text-3xl font-semibold font-heading">{product.name}</h3>
          <p className="leading-relaxed text-gray-400">Premium quality home and office paper for all printing and copying machines.</p>
        </div>
          </legend>
          <label>
            Price{" "}
            <div name="priceSelect py-3 px-5">
              {product.prices.map(price => (
                <span key={price.id} value={price.id} className="text-2xl">
                  {formatPrice(price.unit_amount, price.currency)}
                </span>
              ))}
            </div>
          </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          BUY ME
        </button>
      </form>
    </div>





    </>
  )
}
export default ProductCard
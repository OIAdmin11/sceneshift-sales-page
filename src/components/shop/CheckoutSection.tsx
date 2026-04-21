import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

import { siteConfig } from "@/data/site";

function formatPrice(value: number): string {
  return value.toFixed(2);
}

export default function CheckoutSection() {
  const { populatedItems, subtotal } = useCart();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement checkout section functionality
  };
  return (
    <section className="checkout-sec ibt-section-gap">
      <button className="sidebar-toggle3" />
      {/* Overlay */}
      <div className="sidebar-overlay3" />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="contact-form5">
              <form onSubmit={handleSubmit} className="custom-form5">
                <h2 className="title">Sign in</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="Company"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select>
                        <option>Country *</option>
                        <option>pakistan</option>
                        <option>india</option>
                      </select>
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select>
                        <option>State *</option>
                        <option>pakistan</option>
                        <option>india</option>
                      </select>
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="Town/City *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="House number and street name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="tel"
                        placeholder="Phone *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="Email"
                        name="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        placeholder="ZIP code"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group v3">
                  <div className="radio-box">
                    <input
                      type="checkbox"
                      id="cheak"
                      name="cheak"
                      defaultValue="cheak"
                      required
                    />
                    <label htmlFor="cheak">Create an account?</label>
                    <br />
                  </div>
                  <div className="radio-box mb-0">
                    <input
                      type="checkbox"
                      id="cheak2"
                      name="cheak2"
                      defaultValue="cheak2"
                      required
                    />
                    <label htmlFor="cheak2">Ship to a different address?</label>
                    <br />
                  </div>
                </div>
                <textarea
                  name="text"
                  required
                  defaultValue={"Additional information"}
                />
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="side-bar3">
              <button className="sidebar-close3" />
              <div className="order-widget side-widget3">
                <h4 className="sidebar-title3 mb-0">You order</h4>
                <table className="mb-0">
                  <tbody>
                    {populatedItems.map(({ product, quantity, lineTotal }) => {
                      const imgSrc = product.imageSrc.startsWith("/")
                        ? product.imageSrc
                        : `/${product.imageSrc}`;

                      return (
                        <tr key={product.id}>
                          <td>
                            <div className="recent-post3">
                              <Link to="/shop-single">
                                <img
                                  alt={product.title}
                                  src={imgSrc}
                                  width={product.imageWidth}
                                  height={product.imageHeight}
                                />
                              </Link>
                              <h4 className="title">
                                <Link to="/shop-single">{product.title}</Link>
                              </h4>
                              {"rating" in product && product.rating ? (
                                <ul className="rating">
                                  {Array.from({ length: product.rating }).map(
                                    (_, index) => (
                                      <li key={index}>
                                        <i className="fa fa-star" />
                                      </li>
                                    ),
                                  )}
                                </ul>
                              ) : null}
                              <span>
                                / $ {formatPrice(lineTotal)} x {quantity} /
                              </span>
                            </div>
                          </td>
                          <td className="price-data">
                            <span className="price2">
                              / $ {formatPrice(lineTotal)} /
                            </span>
                          </td>
                          <td />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="cart-widget3 side-widget3">
                <h4 className="title">Cart total</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Subtotal:</th>
                      <th>$ {formatPrice(subtotal)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sale:</td>
                      <td>$ 0.00</td>
                    </tr>
                    <tr>
                      <td>Total:</td>
                      <td>$ {formatPrice(subtotal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="payment-widget side-widget3 mb-0">
                <h4 className="sidebar-title3">Payment method</h4>
                <div className="payment-methods">
                  <div className="method">
                    <input
                      type="radio"
                      name="payment"
                      id="bank"
                      defaultChecked
                    />
                    <label htmlFor="bank">
                      <span>Direct bank transfer</span>
                    </label>
                    <div className="content">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="method">
                    <input type="radio" name="payment" id="check" />
                    <label htmlFor="check">
                      <span>Check payments</span>
                    </label>
                    <div className="content">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="method">
                    <input type="radio" name="payment" id="cod" />
                    <label htmlFor="cod">
                      <span>Cash on delivery</span>
                    </label>
                    <div className="content">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="para">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <a href={siteConfig.legalPrivacyUrl} rel="noopener noreferrer">
                    privacy policy
                  </a>
                  .
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    defaultValue="Bike2"
                  />
                  <label htmlFor="vehicle2">
                    I have read and agree to the website{" "}
                    <a href={siteConfig.legalTermsUrl} rel="noopener noreferrer">
                      terms and conditions
                    </a>{" "}
                    *
                  </label>
                  <br />
                  <button className="ibt-btn ibt-btn-dark">
                    <span>Place order</span>
                    <i className="icon-arrow-top" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

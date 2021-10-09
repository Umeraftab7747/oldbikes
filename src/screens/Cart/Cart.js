import React from "react";
import "./Cart.css";
import Button from "../../Components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setdata, removeitem, removeall } from "../../redux/features/Cart";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

const Cart = () => {
  const data = useSelector((state) => state.cart.value);

  const total = useSelector((state) => state.cart.subTotal);

  const dispatch = useDispatch();

  function deletdata(product) {
    dispatch(removeitem(product));
  }
  function handletoken(token) {
    console.log(token);
    dispatch(removeall());
    toast(`🦄 Thank you for your Purchase`, {
      position: "top-center",
    });
  }

  return (
    <div className="cartsectioncontainer">
      <div className="itemcontainer">
        <div className="leftcartCotnainer">
          {/* bike Container */}
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="bikecontainerforsale"
                data-aos="fade-up"
              >
                <div className="saleImgContainer"></div>
                <div className="leftcontainer">
                  <div className="salecontainerText">
                    <h3>{item.productname}</h3>
                    <h3>QTY {item.cartQuntity}</h3>
                  </div>
                  <div className="saleconBtntainer">
                    <div className="leftContainerforprice">
                      <p className="PriceTag">${item.Price}</p>
                    </div>
                    <div className="leftContainerforprice2">
                      <Button
                        onclick={() => {
                          deletdata(item);
                        }}
                        text="DELETE"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* bike Container */}
        </div>
        <div className="RightcartCotnainer">
          {/* cart */}
          <div className="cartSummaryContainer">
            <div className="carthead">
              <p className="CartText">cart</p>
            </div>
            <div className="itemlistincart">
              <div className="cartListing">
                <p className="cartttItem">Subtotal</p>
                <p className="cartttItem">${total}</p>
              </div>

              <div className="cartListing">
                <p className="cartttItem">Shipping</p>
                <p className="cartttItem2">Free</p>
              </div>
              <div className="cartListing" style={{ marginTop: "5%" }}>
                <p className="cartttItem2">TOTAL</p>
                <p className="cartttItem2">${total}</p>
              </div>
            </div>

            {data.length > 0 ? (
              <div className="bottomcartCotnainer">
                <StripeCheckout
                  token={handletoken}
                  stripeKey="pk_test_51JijtpJDks9SBIkvsf4qsTVNV45mKeLCzimZZr5612wAuXz8oWvsfCaOzDbMAjtyOplGa9Qu16EfTsdzWgBtmCCo00DbZBUYgy"
                  billingAddress
                  shippingAddress
                  amount={total * 100}
                  name={"ALL PRODUCTS"}
                >
                  <Button text="CHECKOUT" />
                </StripeCheckout>
              </div>
            ) : (
              <div className="bottomcartCotnainer">
                <Button
                  text="CHECKOUT"
                  onclick={() => {
                    toast(`❌ There is no item in cart to checkout`, {
                      position: "top-center",
                    });
                  }}
                />
              </div>
            )}
          </div>
          {/* cart */}
        </div>
      </div>
    </div>
  );
};

export default Cart;

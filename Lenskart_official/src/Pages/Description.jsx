import React, { useState } from 'react';
import '../src/App.css'

const Discription = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Blue Block Screen Glasses: Matte Black Full Rim Rectangle Lenskart BLU LB E13737-C1',
      price: 1500,
      imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-matte-black-full-rim-rectangle-lenskart-blu-lb-e13737-c1_lenskart-blu-lb-e13737-c1-eyeglasses_eyeglasses_g_9570_323_02_2022.jpg'
    }
  ]);
  const [coupon, setCoupon] = useState({ code: 'TRYUS', discount: 900 });

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const finalPrice = coupon ? totalPrice - coupon.discount : totalPrice;

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.mainSection}>
        <img src="https://static1.lenskart.com/media/desktop/img/2024/apr/vibe-badlo/sale.png" alt="Offer Banner" className={styles.offerBanner} />
        <div className={styles.cartHeading}>Cart ({cart.length} item)</div>
        {cart.map(item => (
          <div key={item.id} className={styles.cartCardWrapper}>
            <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <div className={styles.itemTitle}>{item.name}</div>
              <div className={styles.itemPrice}>₹{item.price}</div>
              <div className={styles.actionButton} onClick={() => removeItem(item.id)}>Remove</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.billDetails}>
          <div className={styles.billItem}>
            <div>Item Total</div>
            <div>₹{totalPrice}</div>
          </div>
          {coupon && (
            <div className={styles.billItem}>
              <div>Coupon {coupon.code}</div>
              <div>-₹{coupon.discount}</div>
            </div>
          )}
          <div className={styles.billItem}>
            <div>Net Amount</div>
            <div>₹{finalPrice}</div>
          </div>
          <div className={styles.billItem + ' ' + styles.finalPrice}>
            <div>Total payable</div>
            <div>₹{finalPrice}</div>
          </div>
        </div>
        {coupon && (
          <div className={styles.billDetails}>
            <div>Coupon {coupon.code} applied</div>
            <div className={styles.actionButton} onClick={removeCoupon}>Remove</div>
          </div>
        )}
        <div className={styles.button}>Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default Discription;

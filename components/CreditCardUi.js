'use client'
import React, { useState } from "react";
import Cards from "react-credit-cards-2";

import "react-credit-cards-2/dist/es/styles-compiled.css";
function CreditCardUi( { show , onClose } ) {
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  function onInputFocus({ target }) {

    setPayment((prevState) => ({ ...prevState, focused: target.name }));
  }
  function onInputUpdate({ target }) {
    const { name, value } = target;

    setPayment((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setPaymentSuccessful(true);

  }
  const { name, number, expiry, cvc, focused, issuer } = payment;
  return (
    <div className={`bg-white p-8 rounded-2xl ${show ? '' : 'hidden'}`} key="Payment">
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-4">
            <input
              type="tel"
              name="number"
              className="form-control  border-2"
              placeholder="Card Number"
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control border-2"
              placeholder="Name"
    
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control border-2"
                placeholder="Expiry"
                pattern="\d\d/\d\d"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control border-2 mt-2"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="flex justify-between mt-12">
            <button  className=" bg-blue-500 p-2 rounded-2xl text-white">
              Confirm
            </button>
            <button onClick={onClose} className="bg-blue-500 p-2 rounded-2xl text-white ">
          Close
        </button>


            {paymentSuccessful && (
          <div className="mt-2 text-green-600">Successfully Paid</div>
        )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCardUi;

import { useState } from "react";

function ShoppingCart() {
  const [showAddress, setShowAddress] = useState(false);

  const products = [
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      category: "Footwear",
    },
  ];
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col rounded-lg bg-white px-6 py-16 shadow-lg md:mt-[190px] md:flex-row">
      <div className="max-w-4xl flex-1">
        <h1 className="mb-6 text-3xl font-medium">
          Shopping Cart <span className="text-sm text-indigo-500">3 Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] pb-3 text-base font-medium text-gray-500">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] items-center pt-3 text-sm font-medium text-gray-500 md:text-base"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-300">
                <img
                  className="h-full max-w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="hidden font-semibold md:block">{product.name}</p>
                <div className="font-normal text-gray-500/70">
                  <p>
                    Size: <span>{product.size || "N/A"}</span>
                  </p>
                  <div className="flex items-center">
                    <p>Qty:</p>
                    <select className="outline-none">
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center">${product.offerPrice * product.quantity}</p>
            <button className="mx-auto cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                  stroke="#FF532E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        <button className="group mt-8 flex cursor-pointer items-center gap-2 font-medium text-indigo-500">
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      <div className="w-full max-w-[360px] border border-gray-300/70 bg-gray-100/40 p-5 max-md:mt-16">
        <h2 className="text-xl font-medium md:text-xl">Order Summary</h2>
        <hr className="my-5 border-gray-300" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative mt-2 flex items-start justify-between">
            <p className="text-gray-500">No address found</p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="cursor-pointer text-indigo-500 hover:underline"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 w-full border border-gray-300 bg-white py-1 text-sm">
                <p
                  onClick={() => setShowAddress(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100"
                >
                  New York, USA
                </p>
                <p
                  onClick={() => setShowAddress(false)}
                  className="cursor-pointer p-2 text-center text-indigo-500 hover:bg-indigo-500/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="mt-6 text-sm font-medium uppercase">Payment Method</p>

          <select className="mt-2 w-full border border-gray-300 bg-white px-3 py-2 outline-none">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-300" />

        <div className="mt-4 space-y-2 text-gray-500">
          <p className="flex justify-between">
            <span>Price</span>
            <span>$20</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>$20</span>
          </p>
          <p className="mt-3 flex justify-between text-lg font-medium">
            <span>Total Amount:</span>
            <span>$20</span>
          </p>
        </div>

        <button className="mt-6 w-full cursor-pointer bg-indigo-500 py-3 font-medium text-white transition hover:bg-indigo-600">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;

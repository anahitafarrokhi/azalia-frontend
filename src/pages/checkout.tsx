import React from "react";
import ContactForm from "@/components/ContactForm";
import DeliveryForm from "@/components/DeliveryForm";
import ShippingMethod from "@/components/ShippingMethod";
import PaymentSection from "@/components/PaymentSection";
import CartSummary from "@/components/CartSummary";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 gap-6">
      {/* Left Column */}
      <div className="w-full lg:w-2/3 space-y-6">
        <ContactForm />
        <DeliveryForm />
        <ShippingMethod />
        <PaymentSection />

        {/* Pay Now Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-900 transition"
          >
            Pay now
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/3">
        <CartSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;

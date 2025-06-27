import { useState } from "react";
import Image from "next/image";

import Visa from "@/assets/icons/visa.sxIq5Dot.svg";
import Mastercard from "@/assets/icons/master.CzeoQWmc.svg";
import Amex from "@/assets/icons/american_express.C3z4WB9r.svg";
import PayTabs from "@/assets/icons/unionpay.8M-Boq_z.svg";
import Tabby from "@/assets/icons/tabby.C7-15TZI.svg";

const PaymentSection = () => {
    const [paymentMethod, setPaymentMethod] = useState("tabby");
    const [useShippingAddress, setUseShippingAddress] = useState(true);

    return (
        <section className="pt-6 border-t space-y-6">
            <div>
                <h2 className="text-xl font-semibold">Payment</h2>
                <p className="text-sm text-gray-600">All transactions are secure and encrypted.</p>
            </div>

            {/* Payment Options - Gray Box */}
            <div className="bg-gray-100 rounded-lg p-4 space-y-4 shadow-sm border">
                {/* Option: Credit Card */}
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="mt-1"
                    />
                    <div>
                        <div className="flex gap-2 mb-2">
                            <p className="text-sm font-medium mb-1">Credit card</p>

                            <Image src={Visa} alt="Visa" width={36} height={24} />
                            <Image src={Mastercard} alt="Mastercard" width={36} height={24} />
                            <Image src={Amex} alt="American Express" width={36} height={24} />
                        </div>
                        {paymentMethod === "card" && (
                            <div className="space-y-3">
                                <input placeholder="Card number" className="w-full border p-2 rounded" />
                                <input placeholder="Name on card" className="w-full border p-2 rounded" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input placeholder="Expiry (MM/YY)" className="border p-2 rounded" />
                                    <input placeholder="CVC" className="border p-2 rounded" />
                                </div>
                            </div>
                        )}
                    </div>
                </label>

                {/* Option: PayTabs */}
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="paytabs"
                        checked={paymentMethod === "paytabs"}
                        onChange={() => setPaymentMethod("paytabs")}
                        className="mt-1"
                    />
                    <div>
                        <div className="flex gap-2">
                            <p className="text-sm font-medium mb-1">Credit Card & Wallet Payments powered by PayTabs</p>

                            <Image src={Visa} alt="Visa" width={36} height={24} />
                            <Image src={Mastercard} alt="Mastercard" width={36} height={24} />
                            <Image src={Amex} alt="American Express" width={36} height={24} />
                            <Image src={PayTabs} alt="PayTabs" width={36} height={24} />
                        </div>
                        {paymentMethod === "paytabs" && (
                            <div className="text-center my-4 mx-2 text-gray-400 font-medium">
                                <span >After clicking “Pay now”, you will be redirected to Credit Card & Wallet Payments powered by PayTabs to complete your purchase securely.</span>

                            </div>
                        )}
                    </div>
                </label>

                {/* Option: Tabby */}
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="tabby"
                        checked={paymentMethod === "tabby"}
                        onChange={() => setPaymentMethod("tabby")}
                        className="mt-1"
                    />
                    <div className="flex  gap-2">
                        <span className="text-sm font-medium">Pay later with Tabby</span>
                        <Image src={Tabby} alt="Tabby" width={32} height={24} />

                    </div>
                </label>

                {paymentMethod === "tabby" && (
                    <div className="text-center my-4 mx-4 text-gray-400 font-medium">
                        <span  >After clicking “Pay now”, you will be redirected to Pay later with Tabby to complete your purchase securely.</span>

                    </div>
                )}

            </div>

            {/* Card Fields */}


            {/* Billing Address Toggle */}
            <div className="pt-6 space-y-3">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="billing"
                        checked={useShippingAddress}
                        onChange={() => setUseShippingAddress(true)}
                    />
                    <span className="text-sm">Same as shipping address</span>
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="billing"
                        checked={!useShippingAddress}
                        onChange={() => setUseShippingAddress(false)}
                    />
                    <span className="text-sm">Use a different billing address</span>
                </label>

                {!useShippingAddress && (
                    <div className="space-y-3 bg-gray-50 border p-4 rounded-md">
                        <div className="grid grid-cols-2 gap-4">
                            <input placeholder="First name" className="border p-2 rounded w-full" />
                            <input placeholder="Last name" className="border p-2 rounded w-full" />
                        </div>
                        <input placeholder="Address" className="w-full border p-2 rounded" />
                        <input placeholder="Apartment, suite, etc. (optional)" className="w-full border p-2 rounded" />
                        <div className="grid grid-cols-2 gap-4">
                            <input placeholder="Postal code" className="border p-2 rounded w-full" />
                            <input placeholder="City" className="border p-2 rounded w-full" />
                        </div>
                        <input placeholder="Phone (required)" className="w-full border p-2 rounded" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default PaymentSection;

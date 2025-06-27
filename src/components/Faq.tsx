import React, { useState } from "react";

const Faq = () => {
    const [openTab, setOpenTab] = useState<string | null>(null);

    const toggleTab = (tab: string) => {
        setOpenTab(openTab === tab ? null : tab);
    };

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <h2 className="font-bold text-lg mb-4">FAQs</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="hover:underline cursor-pointer">General Information</li>
                            <li className="hover:underline cursor-pointer">Ordering Process</li>
                            <li className="hover:underline cursor-pointer">Payment Information, Duties and Taxes</li>
                            <li className="hover:underline cursor-pointer">Collection & Shipping Information</li>
                            <li className="hover:underline cursor-pointer">Returns, Refunds, Cancellations and Warranties</li>
                            <li className="hover:underline cursor-pointer">Diamond Information & Ethics</li>
                            <li className="hover:underline cursor-pointer">Personalisation, Maintenance & Resizing</li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        <h2 className=" text-xl mb-6">General Information</h2>
                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("insurance")}
                                >
                                    Are your shipments fully insured?
                                    <span>{openTab === "insurance" ? "-" : "+"}</span>
                                </button>
                                {openTab === "insurance" && (
                                    <p className="text-gray-600 mt-2">
                                        Yes, all our shipments are fully insured and tracked.
                                    </p>
                                )}
                            </div>

                            {/* FAQ Item 2 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("bankDiscount")}
                                >
                                    Do I get a discount for Bank Transfers?
                                    <span>{openTab === "bankDiscount" ? "-" : "+"}</span>
                                </button>
                                {openTab === "bankDiscount" && (
                                    <p className="text-gray-600 mt-2">
                                        Yes – customers get a 1.5% discount for bank transfers off
                                        the website prices. The discount is applied on the final
                                        part of the payment – not the deposit.
                                    </p>
                                )}
                            </div>

                            {/* FAQ Item 3 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("contact")}
                                >
                                    How can I get in touch with Azalia Mozaffarian?
                                    <span>{openTab === "contact" ? "-" : "+"}</span>
                                </button>
                                {openTab === "contact" && (
                                    <p className="text-gray-600 mt-2">
                                        Whatsapp: +971 52 360 6874 <br />
                                        Email: info@AzaliaMozaffarian.com <br />
                                        Instagram: Azalia Mozaffarian Diamonds<br />
                                        Location – Azalia Mozaffarian Dubai HQ
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("bespoke")}
                                >
                                    How long does it take to make a bespoke ring?
                                    <span>{openTab === "bespoke" ? "-" : "+"}</span>
                                </button>
                                {openTab === "bespoke" && (
                                    <p className="text-gray-600 mt-2">
                                        Typically between 4-14 days depending upon the design.
                                        Rings can be fast tracked if the order is urgent. If you wish to fast track your order please contact the sales team on either through WhatsApp +971 52 360 6874 or email us at info@AzaliaMozaffarian.com and we'd be happy to help!
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("assurances")}
                                >
                                    What are the main assurances customers get with Azalia Mozaffarian?
                                    <span>{openTab === "assurances" ? "-" : "+"}</span>
                                </button>
                                {openTab === "assurances" && (
                                    <p className="text-gray-600 mt-2">
                                        30 day returns<br />
                                        Diamond quality guarantee<br />
                                        Lifetime warranty<br />
                                        Aftercare services in Dubai (UAE), London (UK), Dublin (Ireland),Brisbane (Australia) and New York (USA)<br />
                                        Price match guarantee – if you find the same diamond for less we’ll beat the price by 1%
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("Who")}
                                >
                                    Who is Azalia Mozaffarian?
                                    <span>{openTab === "Who" ? "-" : "+"}</span>
                                </button>
                                {openTab === "Who" && (
                                    <p className="text-gray-600 mt-2">
                                        With his father a geologist, from a very young age Azalia gained a deep appreciation of the natural processes that combine to create beautiful diamonds and rare gemstones. With a vision to bring high quality, ethical diamonds, with stunning bespoke jewellery, to customers across the world, Azalia established Azalia Mozaffarian.
                                    </p>
                                )}
                            </div>
                        </div>
                    
                        <h2 className=" text-xl mb-6 mt-4">Ordering Process</h2>
                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("personalize")}
                                >
                                    Can I personalize my ring with an engraving or special request?
                                    <span>{openTab === "personalize" ? "-" : "+"}</span>
                                </button>
                                {openTab === "personalize" && (
                                    <p className="text-gray-600 mt-2">
                                        Yes – please contact us on info@AzaliaMozaffarian.com.
                                    </p>
                                )}
                            </div>

                            {/* FAQ Item 2 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("visit")}
                                >
                                    Can I visit your office for a consultation?
                                    <span>{openTab === "visit" ? "-" : "+"}</span>
                                </button>
                                {openTab === "visit" && (
                                    <p className="text-gray-600 mt-2">
                                        Yes – please contact the team to book an appointment.<br />
                                        Whatsapp : +971 52 360 6874<br />
                                        Email: info@AzaliaMozaffarian.com<br />
                                        Come in and see us!
                                    </p>
                                )}
                            </div>

                            {/* FAQ Item 3 */}
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("process")}
                                >
                                    Can the process be fast tracked?
                                    <span>{openTab === "process" ? "-" : "+"}</span>
                                </button>
                                {openTab === "process" && (
                                    <p className="text-gray-600 mt-2">
                                        Rings can be fast tracked if the order is urgent.<br />
                                        For fast tracking please contact the sales team via WhatsApp +971 52 360 6874 or drop us an email on info@AzaliaMozaffarian.com!
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("extra")}
                                >
                                    Does it cost extra to fast track the ordering process?
                                    <span>{openTab === "extra" ? "-" : "+"}</span>
                                </button>
                                {openTab === "extra" && (
                                    <p className="text-gray-600 mt-2">
                                        No – we’ll do everything we can to get the ring to you as fast as we can.
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("custom")}
                                >
                                    How long does it take to custom make my ring?
                                    <span>{openTab === "custom" ? "-" : "+"}</span>
                                </button>
                                {openTab === "custom" && (
                                    <p className="text-gray-600 mt-2">
                                        Typically between 4-14 days depending upon the design.
                                        Rings can be fast tracked if the order is urgent. If you wish to fast track your order please contact the sales team on either through WhatsApp +971 52 360 6874 or email us at info@AzaliaMozaffarian.com and we'd be happy to help!
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("problem")}
                                >
                                    Is it a problem if I don’t know her ring size?
                                    <span>{openTab === "problem" ? "-" : "+"}</span>
                                </button>
                                {openTab === "problem" && (
                                    <p className="text-gray-600 mt-2">
                                        We can work with you to help estimate her size, we aim to get it within a couple sizes so it can be easily resized after.
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("happens")}
                                >
                                    What happens after I make my order?
                                    <span>{openTab === "happens" ? "-" : "+"}</span>
                                </button>
                                {openTab === "happens" && (
                                    <p className="text-gray-600 mt-2">
                                        Updates will be available on your profile once you’ve placed the order – you can also contact your sales consultant for updates, or send us an email info@AzaliaMozaffarian.com
                                        The moment the ring is finished we’ll send you images and videos prior to collection/shipping.
                                    </p>
                                )}
                            </div>
                            <div className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-4 font-medium text-left text-gray-700 hover:text-gray-900"
                                    onClick={() => toggleTab("ordering")}
                                >
                                    What is the ordering process?
                                    <span>{openTab === "ordering" ? "-" : "+"}</span>
                                </button>
                                {openTab === "ordering" && (
                                    <p className="text-gray-600 mt-2">
                                        Step 1 – Select your ring style
                                        Step 2 – Select your diamond<br />
                                        Step 3 – Customize you order (if required)<br />
                                        Step 4 – Pay 25% deposit to secure the order<br />
                                        Step 5 – Wait a few days whilst Azalia Mozaffarian works his magic<br />
                                        Step 6 – Collect from our head office or have the ring delivered to your doorstep<br />
                                        Step 7 – Ask her to marry you<br />
                                        Step 8 – She says YES!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

import React, { useState } from "react";

interface Diamond {
    id: string;
    videoSrc: string;
    shape: string;
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    price: number;
}

const DiscountModal: React.FC<{ diamond: Diamond | null; onClose: () => void }> = ({ diamond, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!diamond) return null;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            firstName: formData.name,
            whatsapp: formData.number,
            email: formData.email,
            message: formData.message || `Hi! I like the look of this diamond  GIA ${diamond.id} ${diamond.shape} ${diamond.carat}ct ${diamond.color} ${diamond.clarity} ${diamond.cut}. Can you offer me a better price or find a higher quality diamond for the same price?`
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                alert("Something went wrong while sending your request.");
                return;
            }

            alert("Email sent successfully!");
            setFormData({ name: "", number: "", email: "", message: "" });
            onClose();
        } catch (error) {
            console.error("Submission error:", error);
            alert("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div>
                    <h2 className="text-xl font-bold mb-4">CHECK FOR DISCOUNT</h2>
                    <div>
                        <p className="mt-2 text-gray-500">GIA: {diamond.id}</p>
                        <p className="font-semibold">
                            {diamond.shape} {diamond.carat}ct {diamond.color} {diamond.clarity} {diamond.cut}
                        </p>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 mt-4">
                        More often than not our team of diamond curators are able to either get additional discount for a listed diamond or find a better quality alternative for the same price!
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                            placeholder="First Name*"
                            required
                        />
                        <div className="flex items-center gap-2">
                            <select
                                className="border-b border-gray-300 py-2 text-center focus:outline-none focus:border-gray-500"
                                disabled
                            >
                                <option value="+971">🇦🇪 +971</option>
                            </select>
                            <input
                                type="tel"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                className="flex-1 border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                                placeholder="WhatsApp Number (We won't call you!)"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                            placeholder="Your Email*"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                            rows={4}
                            placeholder={`Hi! I like the look of this diamond  GIA ${diamond.id} ${diamond.shape} ${diamond.carat}ct ${diamond.color} ${diamond.clarity} ${diamond.cut}. Can you offer me a better price or find a higher quality diamond for the same price?`}
                        ></textarea>
                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-80 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                            >
                                {isSubmitting ? "Submitting..." : "SUBMIT REQUEST"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountModal;

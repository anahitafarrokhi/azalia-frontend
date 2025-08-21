import React from "react";
import { useCart } from "../context/CartProvider";
import { useState } from "react";
import imageUrl from '@/assets/icons/106.webp';
import Gold from '@/assets/icons/107.webp';
import Rose from '@/assets/icons/108.webp';
import whatsapp from '@/assets/icons/whatsapp.png';
import share from '@/assets/icons/share.png';



interface ProductDetailDescProps {
  product: {
    id: number;
    title: string;
    price: number;
    code: string;
    color: string;
    labOrNat: string;
    ayar: string;
    productGender: string;
    countryMaker: string;
    shape: string;
    gemstone: string;
    birthdayCategory: string;
    weight: number;
    weightDesc: string;
    width: number;
    packingDesc: string;
    sheepingDesc: string;
    setAsGift: boolean;

    productCategory: {
      id: number;
      name: string;
    };

    jewelleryType: {
      id: number;
      name: string;
    };

    images?: {
      $values?: {
        id: number;
        imageUrl: string;
        isPrimary: boolean;
      }[];
    };
  };
  engraving?: any;
  selectedStone?: any;
  diamond?: any;

}

const ProductDetailDesc: React.FC<ProductDetailDescProps> = ({ product, engraving, selectedStone, diamond }) => {
  const { addToCart } = useCart();
  const [size, setSize] = useState<string>("");
  const image =
    product?.images?.$values?.[0]?.imageUrl?.replace(/\\/g, "/") || "/placeholder.png";

  const handleAddToCart = () => {
    if (!size) {
      alert("Please enter a size before adding to cart.");
      return;
    }

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      engraving: engraving,
      selectedStone:selectedStone,
      quantity: 1,
      image,
      size, // Pass selected size
    });
      addToCart({
      id: diamond.id,
      name: diamond.title,
      price: diamond.price,
      quantity: 1,
       engraving: "",
      selectedStone:"",
      image
    });
  };
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Price and Title Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">
          AED {product.price.toLocaleString()}
        </h2>

        <h3 className="text-lg font-medium text-gray-600">{product.title}</h3>
        <p className="text-sm text-gray-500">Product Code: {product.code}</p>
        <p className="text-sm text-gray-500">Engraving: {engraving}</p>
        <p className="text-sm text-gray-500">Inner Stone: {selectedStone}</p>
        <div className="flex items-center gap-2 mb-10">

          {product.color === 'Silver' && (<div
            className="w-8 h-8 mb-2 rounded-full border border-gray-300 shadow-inner bg-center bg-no-repeat bg-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition"
            style={{
              backgroundImage: `url(${imageUrl.src})`,
            }}
          />)}
          {product.color === 'Gold' && (<div
            className="w-8 h-8 mb-2 rounded-full border border-gray-300 shadow-inner bg-center bg-no-repeat bg-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition"
            style={{
              backgroundImage: `url(${Gold.src})`,
            }}
          />)}
          {product.color === 'Bronz' && (<div
            className="w-8 h-8 mb-2 rounded-full border border-gray-300 shadow-inner bg-center bg-no-repeat bg-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition"
            style={{
              backgroundImage: `url(${imageUrl.src})`,
            }}
          />)}
          {product.color === 'White' && (<div
            className="w-8 h-8 mb-2 rounded-full border border-gray-300 shadow-inner bg-center bg-no-repeat bg-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition"
            style={{
              backgroundImage: `url(${imageUrl.src})`,
            }}
          />)}
          {product.color === 'Rose' && (<div
            className="w-8 h-8 mb-2 rounded-full border border-gray-300 shadow-inner bg-center bg-no-repeat bg-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition"
            style={{
              backgroundImage: `url(${Rose.src})`,
            }}
          />)}
          <p className="text-sm text-gray-500">
            {product.ayar} {product.color} {product.jewelleryType?.name}
          </p>
        </div>
      </div>


      <h2 className="text-lg font-bold text-gray-600 mt-4">Diamond Information</h2>

      <div className="grid grid-cols-2 items-center gap-2 mb-10">

        <p className="text-sm text-gray-500"> {diamond?.title}</p>
        <p className="text-sm text-gray-500">polish: {diamond?.polish}</p>
        <p className="text-sm text-gray-500"> {diamond?.description}</p>
        <p className="text-sm text-gray-500">carat: {diamond?.carat}</p>
        <p className="text-sm text-gray-500">certificate: {diamond?.certificate}</p>
        <p className="text-sm text-gray-500">certificateUrl: {diamond?.certificateUrl}</p>
        <p className="text-sm text-gray-500">clarity: {diamond?.clarity}</p>
        <p className="text-sm text-gray-500">code: {diamond?.code}</p>
        <p className="text-sm text-gray-500">cut: {diamond?.cut}</p>
        <p className="text-sm text-gray-500">depth: {diamond?.depth}</p>
        <p className="text-sm text-gray-500">diamondColor: {diamond?.diamondColor}</p>
        <p className="text-sm text-gray-500">dimensions: {diamond?.dimensions}</p>
        <p className="text-sm text-gray-500">fluorescence: {diamond?.fluorescence}</p>
        <p className="text-sm text-gray-500">price: {diamond?.price}</p>
        <p className="text-sm text-gray-500">shape: {diamond?.shape}</p>
        <p className="text-sm text-gray-500">style: {diamond?.style}</p>
        <p className="text-sm text-gray-500">symmetry: {diamond?.symmetry}</p>
        <p className="text-sm text-gray-500">table: {diamond?.table}</p>
      </div>



      {/* Size Input */}
      <div className="mb-[4%]">
        <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
          Enter Size (in mm or cm)
        </label>
        <input
          id="size"
          name="size"
          type="number"
          inputMode="decimal"
          step="0.01"
          placeholder="e.g. 17.5"
          value={size}
          onChange={(e) => {
            const val = e.target.value;
            // Allow empty, or only float/double numbers
            if (val === "" || /^(\d+(\.\d*)?)?$/.test(val)) {
              setSize(val);
            }
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 mb-4"
      >
        ADD TO CART
      </button>

      {/* Payment Info */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-gray-600">
        4 interest-free payments of <strong>AED {(product.price / 4).toFixed(2)}</strong>. No fees.
        Shariah-compliant.{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Learn more
        </a>
      </div>

      <div className="my-6 divide-y divide-gray-200">
        {/* PRODUCT DETAILS */}
        <div className="py-4">
          <button
            onClick={() => toggleSection("details")}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-700 cursor-pointer"
          >
            PRODUCT DETAILS
            <span className="text-gray-500">{openSection === "details" ? "−" : "+"}</span>
          </button>
          {openSection === "details" && (
            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p><strong>IGI {product.labOrNat} Center Diamond:</strong> 2ct – {product.color} – {product.ayar}</p>
              <p><strong>{product.labOrNat} Side Diamonds:</strong> 0.30ct each – visually matching colour & clarity</p>
              <p><strong>Metal:</strong> 18k yellow gold – 3g</p>
              <p><strong>Packaging:</strong> {product.packingDesc || "Elegant packaging experience"}</p>
              <p><strong>Weights:</strong> {product.weightDesc || "Gemstone and metal weight may vary slightly"}</p>
              <p><strong>Made In:</strong> {product.countryMaker} </p>
            </div>
          )}
        </div>

        {/* FJ GUARANTEE */}
        <div className="py-4">
          <button
            onClick={() => toggleSection("guarantee")}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-700 cursor-pointer"
          >
            Azaliya GUARANTEE
            <span className="text-gray-500">{openSection === "guarantee" ? "−" : "+"}</span>
          </button>
          {openSection === "guarantee" && (
            <div className="mt-3 text-sm text-gray-600">
              All Azalya products come with a lifetime guarantee. Free resizing, polishing & prong checks.
            </div>
          )}
        </div>

        {/* DROP A HINT */}
        <div className="py-4">
          <button
            onClick={() => toggleSection("hint")}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-700 cursor-pointer"
          >
            DROP A HINT
            <span className="text-gray-500">{openSection === "hint" ? "−" : "+"}</span>
          </button>

          {openSection === "hint" && (
            <div className="mt-3 text-sm text-gray-600 space-y-2">
              <p>
                Make it easy for your friends & loved ones by sharing this product with them!
              </p>

              <div className="flex items-center gap-4">
                {/* WhatsApp Link */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Check out this ring: ${window.location.href}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:underline"
                >
                  <img src={whatsapp.src} alt="WhatsApp" className="w-5 h-5" />
                  WhatsApp
                </a>

                {/* Share Button */}
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: document.title,
                        url: window.location.href,
                      });
                    } else {
                      alert("Sharing is not supported in this browser.");
                    }
                  }}
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <img src={share.src} alt="share" className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SHIPPING AND RETURNS */}
        <div className="py-4">
          <button
            onClick={() => toggleSection("shipping")}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-700 cursor-pointer"
          >
            SHIPPING AND RETURNS
            <span className="text-gray-500">{openSection === "shipping" ? "−" : "+"}</span>
          </button>
          {openSection === "shipping" && (
            <div className="mt-3 text-sm text-gray-600">
              <p> {product.sheepingDesc}</p>
              See returns policy{" "}
              <a
                href="http://localhost:3000/faqs?JewelleryType=&Category="
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>      </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDesc;

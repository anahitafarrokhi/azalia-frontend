const DeliveryForm = () => {
  return (
    <section aria-label="Delivery" className="space-y-4">
      <h2 className="text-xl font-semibold">Delivery</h2>
      <div className="space-y-2">
        <label className="block font-medium">Country</label>
        <select className="w-full border p-2 rounded">
          <option value="DE">Germany</option>
          {/* Add more countries */}
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First name" className="border p-2 rounded" />
          <input placeholder="Last name" className="border p-2 rounded" />
        </div>

        <input placeholder="Address" className="w-full border p-2 rounded" />
        <input
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full border p-2 rounded"
        />
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="Postal Code" className="border p-2 rounded" />
          <input placeholder="City" className="border p-2 rounded" />
        </div>
        <input placeholder="Phone" className="w-full border p-2 rounded" />
      </div>
    </section>
  );
};

export default DeliveryForm;

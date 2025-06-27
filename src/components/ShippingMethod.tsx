const ShippingMethod = () => {
  return (
    <section className="pt-4 border-t">
      <h3 className="text-lg font-medium">Shipping method</h3>
      <div className="mt-2">
        <label className="flex items-center space-x-2">
          <input type="radio" name="shipping" checked />
          <span>Free Shipping</span>
        </label>
      </div>
    </section>
  );
};

export default ShippingMethod;

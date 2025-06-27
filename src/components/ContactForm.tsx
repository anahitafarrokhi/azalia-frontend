const ContactForm = () => {
  return (
    <section aria-label="Contact" className="border-b pb-6">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <div className="mt-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Email me with news and offers</span>
        </label>
      </div>
    </section>
  );
};

export default ContactForm;

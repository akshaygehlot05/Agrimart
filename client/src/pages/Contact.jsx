function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-8">
          Contact Us
        </h1>

        <div className="space-y-6 text-lg">

          <div>
            <h2 className="font-semibold">📍 Address</h2>
            <p>Jodhpur, Rajasthan, India</p>
          </div>

          <div>
            <h2 className="font-semibold">📧 Email</h2>
            <p>support@agrimart.com</p>
          </div>

          <div>
            <h2 className="font-semibold">📞 Phone</h2>
            <p>+91 9876543210</p>
          </div>

          <div>
            <h2 className="font-semibold">🌐 Website</h2>
            <p>www.agrimart.com</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
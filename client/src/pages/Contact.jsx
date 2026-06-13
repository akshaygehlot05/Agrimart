import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

function Contact({ mode }) {
  const isWholesale = mode === "B2B";

  return (
    <section className="py-10 bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h1
          className={`text-3xl md:text-4xl font-extrabold flex justify-center items-center gap-3 ${
            isWholesale ? "text-blue-700" : "text-green-700"
          }`}
        >
          <FaPhoneAlt />
          Contact Us
        </h1>

        <div
          className={`w-16 h-1 mx-auto mt-3 rounded-full ${
            isWholesale ? "bg-blue-700" : "bg-green-700"
          }`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h2
              className={`text-2xl font-bold mb-2 ${
                isWholesale ? "text-blue-700" : "text-green-700"
              }`}
            >
              Get In Touch
            </h2>

            <div
              className={`w-10 h-1 rounded-full mb-6 ${
                isWholesale ? "bg-blue-700" : "bg-green-700"
              }`}
            ></div>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className={`p-3 rounded-full ${
                    isWholesale ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  <FaMapMarkerAlt
                    className={
                      isWholesale ? "text-blue-700" : "text-green-700"
                    }
                  />
                </div>

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Jodhpur, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className={`p-3 rounded-full ${
                    isWholesale ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  <FaEnvelope
                    className={
                      isWholesale ? "text-blue-700" : "text-green-700"
                    }
                  />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 text-sm">
                    support@agrimart.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className={`p-3 rounded-full ${
                    isWholesale ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  <FaPhoneAlt
                    className={
                      isWholesale ? "text-blue-700" : "text-green-700"
                    }
                  />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    +91 9876543210
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                <div
                  className={`p-3 rounded-full ${
                    isWholesale ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  <FaGlobe
                    className={
                      isWholesale ? "text-blue-700" : "text-green-700"
                    }
                  />
                </div>

                <div>
                  <h3 className="font-semibold">Website</h3>
                  <p className="text-gray-600 text-sm">
                    www.agrimart.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h2
              className={`text-2xl font-bold mb-2 ${
                isWholesale ? "text-blue-700" : "text-green-700"
              }`}
            >
              Send Message
            </h2>

            <div
              className={`w-10 h-1 rounded-full mb-6 ${
                isWholesale ? "bg-blue-700" : "bg-green-700"
              }`}
            ></div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isWholesale
                    ? "focus:ring-blue-500"
                    : "focus:ring-green-500"
                }`}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isWholesale
                    ? "focus:ring-blue-500"
                    : "focus:ring-green-500"
                }`}
              />

              <input
                type="text"
                placeholder="Subject"
                className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isWholesale
                    ? "focus:ring-blue-500"
                    : "focus:ring-green-500"
                }`}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isWholesale
                    ? "focus:ring-blue-500"
                    : "focus:ring-green-500"
                }`}
              ></textarea>

              <button
                type="submit"
                className={`w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  isWholesale
                    ? "bg-blue-700 hover:bg-blue-800"
                    : "bg-green-700 hover:bg-green-800"
                }`}
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>
            Have questions? We're here to help! Contact us anytime and we'll
            get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
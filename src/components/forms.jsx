"use client";
import React, { useRef, useState } from "react";

export default function MyForm() {
  const emailRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null); // null, "success", or "error"
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbyeqaz_HZ-IxNy_zhxd8q8VhiF4w-bW3XAcwEKWV_YS_LTYXT-GJxbKLthMA6YrUdIl6Q/exec";
    const data = {
      email: emailRef.current?.value,
    };

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRef.current?.value.match(emailRegex)) {
      alert("Error: Invalid Email");
      emailRef.current.value = "";
      return false;
    }

    setIsLoading(false); // Start the loading animation

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "no-cors",
    };

    fetch(url, requestOptions)
      .then((response) => {
        emailRef.current.value = "";
        setFormStatus("success");
        setMessage("Form submitted successfully!");
      })

      .catch((error) => {
        console.error("Error:", error);
        setFormStatus("error");
        setMessage("Form submission failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false); // Stop the loading animation
      });
  };

  return (
    <div>
      {formStatus === "success" || formStatus === "error" ? (
        <div className="intro text-2xl font-medium underline decoration-blue-300">
          {message}
        </div>
      ) : (
        <form
          method="post"
          className="intro"
          onSubmit={handleSubmit}
          name="contact"
          netlify="true"
        >
          <input
            type="email"
            className="mb-5 min-w-[100%] border-0 border-b-2 border-slate-700 p-3 text-xl outline-none focus:ring-0 dark:bg-transparent lg:min-w-[10%] lg:text-3xl"
            placeholder="john@example.com"
            ref={emailRef}
            required
          />

          <span className="px-2"></span>

          {isLoading ? (
            <button
              type="submit"
              className={`animate-fade-up relative mb-2 mr-2 rounded-lg bg-blue-300 px-8 py-3 text-lg font-semibold text-black transition delay-100 hover:opacity-80 focus:outline-2 focus:ring-4 focus:ring-gray-300 `}
            >
              Submit
            </button>
          ) : (
            <button
              disabled
              type="submit"
              className={`animate-fade-up relative mb-2 mr-2 rounded-lg bg-blue-300 px-8 py-3 text-lg font-semibold text-black transition delay-100 hover:opacity-80 focus:outline-2 focus:ring-4 focus:ring-gray-300 `}
            >
              <svg
                aria-hidden="true"
                role="status"
                className="mr-3 inline h-4 w-4 animate-spin rounded-full bg-slate-800 text-white "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          )}
        </form>
      )}
    </div>
  );
}

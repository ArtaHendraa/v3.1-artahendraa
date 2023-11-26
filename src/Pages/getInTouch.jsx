/* eslint-disable no-unused-vars */
import PageHeader from "../components/Elements/Page-Header/pageHeader";
import SNSLink from "../components/Elements/SNS-Link/snsLink";
import React, { useState } from "react";

const GetInTouchPage = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzRsm9eqhKFh8luEkcRHjYvkPKDVRq7n98ECuc6l8XVerSVpEqXiXukBOBVMFkf52lk-g/exec";

  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertFiledVisible, setAlertFiledVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        console.log("Success!", response);
        setAlertVisible(true);
        e.target.reset();
      } else {
        console.error("Error!", response.statusText);
        setAlertFiledVisible(true);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setAlertFiledVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
    setAlertFiledVisible(false);
  };

  return (
    <>
      <PageHeader
        title="Contact"
        description="Hubungi saya melalui sosial media"
        customClass="mb-6"
      />

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-3">
        <SNSLink />
      </div>

      <PageHeader title="Or send me a message" />

      <div className={`alert ${alertVisible ? "" : "hidden"}`}>
        <div
          className="flex items-center p-4 mt-5 text-white bg-green-400 rounded-lg"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium tracking-widest">
            <p>Pesan berhasil dikirim</p>
          </div>
          <button
            type="button"
            className="close ml-auto -mx-1.5 -my-1.5  text-white rounded-lg focus:ring-2 p-1.5 hover:bg-green-500 duration-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-1"
            aria-label="Close"
            onClick={closeAlert}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`alert-filed ${alertFiledVisible ? "" : "hidden"}`}>
        <div
          className="flex items-center p-4 mt-5 text-white bg-red-600 rounded-lg"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium tracking-widest">
            <p>Maaf feature ini sedang mengalami masalah, cobalagi nanti</p>
          </div>
        </div>
      </div>

      <form name="artahendraa-contact-form" onSubmit={handleSubmit}>
        <div className="flex w-full h-16 mx-auto mt-5 bg-transparent">
          <input
            className="w-full px-3 tracking-wider bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-300 input"
            type="text"
            required
            name="name"
            autoComplete="off"
            placeholder="Your Name"
          />
        </div>

        <div className="flex w-full h-16 mx-auto mt-5 bg-transparent">
          <input
            className="w-full px-3 tracking-wider bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-300 input"
            type="email"
            required
            name="email"
            autoComplete="off"
            placeholder="Email Address"
          />
        </div>

        <textarea
          placeholder="Write Your Message"
          className="w-full h-32 px-3 mt-10 tracking-wider bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-300 input"
          required
          name="message"
        ></textarea>

        <div id="send-button">
          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer bg-[#FFCF01] text-[#393E46] font-semibold h-[50px] w-full flex items-center justify-center mt-5 rounded-sm tracking-widest click-effect duration-75 ${
              loading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-[#393E46] animate-spin"
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
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default GetInTouchPage;

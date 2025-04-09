import React from "react";

function Map() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d72387.97118608108!2d-2.5601467!3d53.3812233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0192372cc103%3A0x32b5b64929f4e3bd!2sZalo&#39;s%20Cafe%20Lymm!5e1!3m2!1sen!2sin!4v1743584162794!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[500px] w-full grayscale invert"
      ></iframe>
    </section>
  );
}

export default Map;

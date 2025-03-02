import React from "react";
import send from "../assets/svg/send.svg";

export const MessageInput = () => {
  return (
    <div className="bg-light border-top p-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
        />
        <button className="btn btn-primary">
          <Image src={send} />
        </button>
      </div>
    </div>
  );
};

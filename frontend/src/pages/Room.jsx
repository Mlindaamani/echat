import React, { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../stores/authStore";
import { messageStore } from "../stores/messageStore";
import { useSocket } from "../stores/socketStore";
import { formatDate } from "../utils/functions";
import "../chats.css";

export const Room = () => {
  const lastMessageRef = useRef();
  const [message, setMessage] = useState("");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const { connectToSocketServer, onlineUsers, disconnect } = useSocket();
  const { user } = useAuthStore();

  const {
    messages,
    sendNewMessage,
    users,
    getChatUsers,
    getMessages,
    selectedUser,
    setSelectedUser,
  } = messageStore();

  const sendMessage = (e) => {
    e.preventDefault();
    sendNewMessage(message);
    setMessage("");
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    getMessages();
  };

  useEffect(() => {
    getChatUsers();
    connectToSocketServer();

    return () => disconnect();
  }, [getChatUsers]);

  useEffect(() => {
    if (lastMessageRef.current && messages)
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  return (
    <div className="dashboard-chat-container h-100">
      <div className="chat-layout h-100 d-flex">
        {/* Sidebar */}
        <div className="sidebar bg-light border-end p-3">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="text-secondary mb-0">Chats</h5>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                className="form-check-input"
                onChange={() => setShowOnlineOnly(!showOnlineOnly)}
              />
              <label className="form-check-label small">
                {showOnlineOnly ? "Online" : "All"}
              </label>
            </div>
          </div>

          <div className="user-list">
            {filteredUsers.map((user) => {
              const usernameInitial = user.username.charAt(0).toUpperCase();
              const isOnline = onlineUsers.includes(user._id);

              return (
                <div
                  key={user._id}
                  onClick={() => handleUserClick(user)}
                  className={`user-item d-flex align-items-center p-2 mb-2 rounded ${
                    selectedUser?._id === user._id
                      ? "bg-info bg-opacity-75 text-light fw-bold"
                      : ""
                  }`}
                >
                  <div className="avatar-container position-relative me-3">
                    <div className="avatar bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center">
                      {usernameInitial}
                    </div>
                    <span
                      className={`status-indicator position-absolute bottom-0 end-0 translate-middle ${
                        isOnline ? "online" : "offline"
                      }`}
                    ></span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="username fw-medium">{user.username}</span>
                    <small
                      className={`text-xs ${
                        isOnline ? "text-success" : "text-muted"
                      }`}
                    >
                      {isOnline ? "Online" : "Offline"}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Messages */}
          <div className="messages flex-grow-1 p-4 overflow-auto">
            {!selectedUser ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <h4>Select a chat to start messaging</h4>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <h4>No messages yet</h4>
                  <p>Start the conversation!</p>
                </div>
              </div>
            ) : (
              messages.map(({ _id: id, senderId, message, created_at }) => (
                <div
                  key={id}
                  ref={lastMessageRef}
                  className={`message-bubble ${
                    senderId === user?.id ? "message-sent" : "message-received"
                  } mb-3`}
                >
                  <div className="message-content">
                    <div className="d-flex align-items-center mb-1">
                      <small className="fw-bold text-secondary">
                        {senderId === user?.id ? "You" : selectedUser?.username}
                      </small>
                      <small className="text-muted ms-2">
                        {formatDate(created_at)}
                      </small>
                    </div>
                    <p className="mb-0 text-dark">{message}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message Input */}
          {selectedUser && (
            <div className="input-area p-4 border-top">
              <form onSubmit={sendMessage} className="d-flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="form-control rounded-pill"
                />
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
                  disabled={!message.trim()}
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

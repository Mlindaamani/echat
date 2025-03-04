import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { calculateMemberSince } from "../utils/functions";
import { useProfile } from "../stores/profileStore";
import settings from "../assets/svg/settings.svg";
import logout from "../assets/svg/logout.svg";
import sound from "../assets/svg/sound.svg";
import account from "../assets/svg/account.svg";
import dashboard from "../assets/svg/dashboard.svg";
import friends from "../assets/svg/friends.svg";
import left from "../assets/svg/left.svg";
import right from "../assets/svg/right.svg";
import upload from "../assets/svg/upload.svg";
export const Profile = () => {
  const MAX_FILE_SIZE = 200 * 1024;
  const [photo, setPhoto] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { profile, uploading, uploadProfile, getProfile } = useProfile();

  useEffect(() => {
    getProfile();
  }, []);

  const handleUploadProfile = () => {
    if (!photo) {
      toast.error("Please select a file first!");
      return;
    }
    const formData = new FormData();
    formData.append("photo", photo);
    uploadProfile(formData);
    setPhoto(null);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`profile-sidebar ${
          sidebarOpen ? "open" : "closed"
        } bg-success`}
      >
        <NavLink
          className="navbar-brand d-flex gap-2 justify-content-start align-items-center fw-bold fs-4 text-light mt-3 p-2"
          to="/"
        >
          <Image src={sound} />
          {sidebarOpen && profile?.username}
        </NavLink>
        <hr />
        <nav className="mt-2">
          <ul>
            <li>
              <Image src={dashboard} />
              <NavLink to="/profile" className="text-light fw-bold">
                {sidebarOpen && "Dashboard"}
              </NavLink>
            </li>

            <li>
              <Image src={friends} />
              <NavLink to="/profile" className="text-light fw-bold">
                {sidebarOpen && "Friends"}
              </NavLink>
            </li>

            <li>
              <Image src={settings} />

              <NavLink to="/profile" className="text-light fw-bold">
                {sidebarOpen && "Settings"}
              </NavLink>
            </li>

            <li>
              <Image src={logout} />
              <NavLink to="/" className="text-light fw-bold">
                {sidebarOpen && "Logout"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* CONTENT-AREA */}
      <div className="flex-grow-1">
        <div className="container mt-5 mb-3 vh-100 position-relative">
          {sidebarOpen ? (
            <Image
              src={left}
              width={40}
              height={40}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-success rounded-5 p-2 start-0 sidebar-toggle"
            />
          ) : (
            <Image
              src={right}
              width={40}
              height={40}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-success rounded-5 p-2  start-0 sidebar-toggle"
            />
          )}

          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col">
                <div className="card rounded-4">
                  <div className="card-header fw-bold fs-4 text-secondary">
                    <p className="lead">Change Photo</p>
                  </div>
                  <div className="card-body">
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                      <Image
                        thumbnail
                        src={upload}
                        className="img-fluid rounded-circle bg-success"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="file"
                        id="customFile"
                        className="visually-hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (!file.type.startsWith("image/")) {
                            toast.error("Please upload an image file");
                            return;
                          }
                          // 1MB limit
                          if (file.size > MAX_FILE_SIZE) {
                            toast.error(
                              `File size must be less than ${
                                MAX_FILE_SIZE / 1024
                              }KB`
                            );
                            setPhoto(null);
                            return;
                          }
                          setPhoto(file);
                        }}
                      />
                      <label
                        htmlFor="customFile"
                        className="btn btn-success d-flex align-items-center gap-2 w-100"
                      >
                        <Image src={upload} />
                        Choose File
                      </label>
                      {photo && (
                        <div className="mt-2 text-muted small">
                          {photo.name}
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <button
                        className="btn btn-secondary mt-2 w-100"
                        onClick={handleUploadProfile}
                      >
                        {uploading ? "Uploading..." : "Upload Photo"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* User information */}
              <div className="col">
                <div className="card rounded-4">
                  <div className="card-header">Personal info</div>
                  <div className="card-body">
                    <div className="container d-flex justify-content-center align-items-center mb-4">
                      <Image
                        src={profile?.photo || account}
                        roundedCircle
                        width={100}
                        height={100}
                        className="text-center"
                      />
                    </div>
                    <div className="mb-3 mt-2">
                      <label htmlFor="" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        value={profile?.username}
                        className="card-text form-control"
                        readOnly
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        value={profile?.email}
                        className="card-text form-control"
                        readOnly
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Member since
                      </label>
                      <input
                        type="text"
                        value={calculateMemberSince(profile?.created_at)}
                        className="card-text form-control"
                        readOnly
                        disabled={uploading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

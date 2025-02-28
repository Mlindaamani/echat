import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { formatDate } from "../utils/functions";
import { Loading } from "../components/Loading";
import { useProfile } from "../stores/profileStore";
import settings from "../assets/svg/settings.svg";
import logout from "../assets/svg/logout.svg";
import sound from "../assets/svg/sound.svg";
import account from "../assets/svg/account.svg";
import dashboard from "../assets/svg/dashboard.svg";
import friends from "../assets/svg/friends.svg";
import menuopen from "../assets/svg/menuopen.svg";
import menuclose from "../assets/svg/menuclose.svg";
import upload from "../assets/svg/upload.svg";

export const Profile = () => {
  const navStyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "sans-serif",
  };

  const [photo, setPhoto] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { profile, loadingProfile, uploading, uploadProfile, getProfile } =
    useProfile();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleUploadProfile = async () => {
    try {
      if (!photo) {
        toast.error("Please select a file first!");
        return;
      }
      // Convert File to Base64
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onloadend = async () => {
        const base64Photo = reader.result;
        toast.success("Uploading profile...");
        await uploadProfile({ photo: base64Photo });
      };
    } catch (error) {
      toast.error("Upload failed");
    }
  };

  if (loadingProfile) return <Loading />;

  return (
    <div className="d-flex bg-info">
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
          {sidebarOpen && "eChat"}
        </NavLink>
        <hr />
        <nav className="mt-2">
          <ul>
            <li>
              <Image src={dashboard} />
              <NavLink
                to="/profile"
                className="text-light fw-bold"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                {sidebarOpen && "Dashboard"}
              </NavLink>
            </li>

            <li>
              <Image src={friends} />
              <NavLink
                to="/profile"
                className="text-light fw-bold"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                {sidebarOpen && "Friends"}
              </NavLink>
            </li>

            <li>
              <Image src={settings} />

              <NavLink
                to="/profile"
                className="text-light fw-bold"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                {sidebarOpen && "Settings"}
              </NavLink>
            </li>

            <li>
              <Image src={logout} />
              <NavLink
                to="/"
                className="text-light fw-bold"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                {sidebarOpen && "Logout"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* CONTENT-AREA */}
      <div className="content flex-grow-1">
        <div className="container mt-5 mb-3 vh-100">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="btn btn-secondary btn-sm mb-5 mt-0 rounded-2"
          >
            {sidebarOpen ? <Image src={menuopen} /> : <Image src={menuclose} />}
          </button>
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
                        onChange={(e) => setPhoto(e.target.files[0])}
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
                    <div className="container d-flex justify-content-start align-items-center gap-4 mb-4">
                      <Image
                        src={profile?.photo || account}
                        roundedCircle
                        width={100}
                        height={100}
                        className="text-center"
                      />
                      <p className="card-text fw-bold">{profile?.username}</p>
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
                        value={formatDate(profile?.created_at)}
                        className="card-text form-control"
                        readOnly
                        disabled
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

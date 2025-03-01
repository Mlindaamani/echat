import security from "../assets/svg/security.svg";
import { useProfile } from "../stores/profileStore";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const { getProfile, profile, loadingProfile, updatingProfile } = useProfile();
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleUpdateProfile = () => {
    toast.success("Your are updating profile...");
  };

  if (loadingProfile) return <h1>Loading Profile...</h1>;

  return (
    <div className="container mt-5 mb-3 vh-100">
      <h1>Profile</h1>
      <img
        src={profile?.photo ? profile?.photo : security}
        alt="Shield"
        width={100}
      />
      <div className="container">
        <div className="row justify-content-center aligin-items-center">
          {/* First column */}
          <div className="col">
            <div className="card">
              <div className="card-header">Profile</div>
              <div className="card-body">
                <h5 className="card-title">Profile Picture</h5>
                <p className="card-text">Upload profile picture</p>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleUpdateProfile}
                >
                  {updatingProfile ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </div>
          </div>
          {/* User information */}
          <div className="col">
            <div className="card card-lg">
              <div className="card-header">User Information</div>
              <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <p className="card-text">User information goes here</p>
                <h4>{profile?.username}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

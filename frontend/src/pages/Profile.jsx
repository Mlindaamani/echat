import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { calculateMemberSince } from "../utils/functions";
import { useProfile } from "../stores/profileStore";
import account from "../assets/svg/account.svg";
import upload from "../assets/svg/upload.svg";

export const Profile = () => {
  const MAX_FILE_SIZE = 200 * 1024;
  const [photo, setPhoto] = useState(null);
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
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card rounded-4">
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
                        `File size must be less than ${MAX_FILE_SIZE / 1024}KB`
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
                  <div className="mt-2 text-muted small">{photo.name}</div>
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
      <Toaster />
    </div>
  );
};

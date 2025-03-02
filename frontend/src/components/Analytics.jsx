import React from "react";

export const Analytics = () => {
  return (
    <div>
      <div className="container justify-content-centter algin-items-center">
        <h1 className="text-secondary">Analytics</h1>
        <div className="row">
          <div className="col-2 p-3">
            <div className="card shadow rounded-3">
              <div className="card-body">
                <h5 className="card-title text-secondary">Users</h5>
                <p className="card-text">100K</p>
              </div>
            </div>
          </div>
          <div className="col-4 p-3">
            <div className="card shadow rounded-3">
              <div className="card-body">
                <h5 className="card-title text-secondary">Messages</h5>
                <p className="card-text">200M</p>
              </div>
            </div>
          </div>

          <div className="col-6 p-3">
            <div className="card shadow rounded-3">
              <div className="card-body">
                <h5 className="card-title text-secondary">Members</h5>
                <p className="card-text">100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table includin all the users */}
      <div className="container bg-light-subtle mt-5 rounded-4">
        <table className="table table-bordered p-3">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe@domain.com</td>
              <td>admin</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@domain.com</td>
              <td>admin</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@domain.com</td>
              <td>admin</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@domain.com</td>
              <td>admin</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Members */}
      <div className="container bg-light-subtle mt-5 rounded-4 p-4 bg-opacity-90">
        <div className="row">
          <div className="col-4">
            <div className="card shadow rounded-3">
              <div className="card-body">
                <h5 className="card-title text-secondary mb-2">Messages</h5>
                <p className="card-text">200M</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span className="badge text-bg-primary rounded-pill">
                      14
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span className="badge text-bg-primary rounded-pill">
                      2
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge text-bg-primary rounded-pill">
                      1
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge text-bg-primary rounded-pill">
                      1
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge text-bg-primary rounded-pill">
                      1
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge text-bg-primary rounded-pill">
                      1
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card shadow rounded-3">
              <div className="card-body">
                <h5 className="card-title text-secondary mb-2">Members</h5>
                <p className="card-text">100</p>
                <div className="list-group">
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                  <p className="list-group-item">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

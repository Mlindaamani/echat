import { PlaceholderBanner } from "../components/PlaceholderBanner";
import { Link } from "react-router-dom";

export const Settings = () => {
  return (
    <div className="container bg-light-subtle p-3">
      <div className="card p-3">
        <ul class="nav nav-underline">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/room">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Theme</Link>
          </li>
        </ul>
      </div>
    </div>

    // <PlaceholderBanner
    //   title="Customization Station Under Construction!"
    //   description="We're building personalized settings to make eChat truly yours!"
    //   emoji="⚙️"
    //   ariaLabel="Settings section preview"
    //   footnote="[Feature development ongoing - check back next update]"
    // />
  );
};

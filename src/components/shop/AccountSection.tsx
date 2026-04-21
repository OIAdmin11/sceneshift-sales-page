import { Link } from "react-router-dom";

import { siteConfig } from "@/data/site";

export default function AccountSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement account section functionality
  };
  return (
    <section className="account-sec">
      <div className="container">
        <div className="contact-form4">
          <form
            onSubmit={handleSubmit}
            className="custom-form4"
            id="custom-form4"
          >
            <div className="title-box">
              <h2 className="title">Sign in</h2>
              <h2 className="title2">Sign Up</h2>
            </div>
            <div className="form-group name">
              <input type="text" name="name" placeholder="Full name" />
            </div>
            <div className="sign-up-content">
              <div className="form-group">
                <input type="text" name="name" placeholder="Email" />
              </div>
              <p>
                A link to set a new password will be sent to your email address.
              </p>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
              </p>
              <a href={siteConfig.legalPrivacyUrl} rel="noopener noreferrer">
                privacy policy
              </a>
              .
            </div>
            <div className="form-group password-section">
              <input
                type="password"
                name="password"
                id="passwordInput"
                placeholder="Password"
              />
              <button type="button" id="togglePassword">
                <i className="fa fa-eye" />
              </button>
            </div>
            <div className="form-group v2 extra-section">
              <div className="radio-box">
                <input
                  type="checkbox"
                  id="cheak"
                  name="cheak"
                  defaultValue="cheak"
                />
                <label htmlFor="cheak">Remember me</label>
                <br />
              </div>
              <Link to={`/lost-password`} className="password">
                I forgot my password
              </Link>
            </div>
            <button
              type="submit"
              className="ibt-btn ibt-btn-outline"
              id="signInBtn"
            >
              <span>Sign in</span>
              <span className="extra">Sign Up</span>
              <i className="icon-arrow-top" />
            </button>
          </form>
          <p className="toggle-signup">
            <a href="#" id="signupLink" title="">
              Sign up
            </a>{" "}
            if you don&apos;t have an account
          </p>
        </div>
      </div>
    </section>
  );
}

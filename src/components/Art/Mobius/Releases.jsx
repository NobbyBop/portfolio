import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import Navigation from "./Navigation";
function Releases() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    const hashedUsername =
      "$2a$10$uwf/LG0o/9eLI5oxp7b49evZUiFdK0TZ95ZEZohNG/2.GrmKt7/om";
    const hashedPassword =
      "$2a$10$OMb3xGhSFtfUIICetm3xNenwnmxxBAEvv0VdXi3BFqiR.zrLuZLFS";

    try {
      const isUsernameCorrect = await bcrypt.compare(
        username.toLowerCase(),
        hashedUsername
      );
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

      if (isUsernameCorrect && isPasswordCorrect) {
        alert("Login successful!");
        navigate("/mobiusline/admin");
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navigation />
      <h2>Releases</h2>
      <p>
        501 Unauthorized Access. Please contact admin or log in with admin
        account.
      </p>
      <form onSubmit={handleClick}>
        <div className="loginDiv">
          <label htmlFor="username">
            Username:
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </div>
      </form>
    </>
  );
}

export default Releases;

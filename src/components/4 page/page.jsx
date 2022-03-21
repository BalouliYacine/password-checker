import React from "react";
// import './_page.css'
import D from "./D.svg";
function Page() {
  return (
    <div className="Page">
      <div className="text">
        <h2>SAFETY</h2>
        <p>
          Random passwords are hard to guess and harder for computer programs to
          crack. If there's a discernible pattern, the odds of an attacker using
          a brute force attack and gaining access to your account goes up
          exponentially.
        </p>
        <br />
        <p>
          Random passwords might contain a jumble of unrelated characters, but
          combining unrelated words also works. That's how the 1Password Strong
          Password Generator creates passwords that are easy to remember but
          still cryptographically strong.
        </p>
      </div>
      <div className="img">
        <img src={D} alt="" />
      </div>
    </div>
  );
}

export default Page;

import React from "react";

const AgeVerification = ({ onVerify }) => {
  const handleExit = () => {
    alert("You must be at least 18 years old to enter this site.");
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="container">
        <div className="logo">
  <span className="logo-white">INDIAN</span><span className="logo-orange">Hub</span>
</div>
      <h1>This is an adult website</h1>
      <p>
        This website contains age-restricted materials including nudity and explicit depictions of sexual activity. 
        By entering, you affirm that you are at least 18 years of age or the age of majority in the jurisdiction you are accessing the website from and you consent to viewing sexually explicit content.
      </p>
      <div className="buttons">
        <button  className="verifyButton" onClick={onVerify}>I am 18 or older - Enter</button>
        <button  className="verifyButton" onClick={handleExit}>I am under 18 - Exit</button>
      </div>
      <p>
        Our <a href="https://help.pornhub.com/hc/en-us/articles/4419885579795-Parental-Controls"  >parental controls page</a> explains how you can easily
        block access to this site.</p>
    </div>
  );
};

export default AgeVerification;

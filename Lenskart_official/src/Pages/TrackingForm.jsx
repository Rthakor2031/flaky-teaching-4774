import React from "react";

function TrackingForm() {
  return (
    <div>
      <div className="outline">
        <form action="">
            <img
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt=""
              height={220}
            />
          <h2>SignIn</h2>
          <input type="text" placeholder="Username@" />
          <br />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <br />
          <button>SignIn</button>
        </form>
      </div>
    </div>
  );
}

export default TrackingForm;

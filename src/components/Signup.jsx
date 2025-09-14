import React, { useActionState, useState } from "react";

export default function Signup() {
  const [closeSignup, setCloseSignup] = useState();
  return (
    <div>
      Signup <button>Close</button>
    </div>
  );
}

import React from "react";

export function InputButtons() {
  return (
    <div style={{ justifyContent: 'space-around', display: 'flex', marginBlockEnd: '40px', alignItems:'flex-start', }}>
      <input className="submit" type="submit" value="Sent" />
    </div>
  )
}
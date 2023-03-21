import { useState } from "react";

function BanSidebar({ bannedOrigins }) {
  bannedOrigins

  return (
    <div className="BanSidebar">
      <h2>Ban List</h2>
      <div>{bannedOrigins && bannedOrigins.map(origin => <p>{origin }</p>)}</div>
    </div>
  );
}

export default BanSidebar;

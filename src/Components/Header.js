import React from "react";

const Header = () => {
  return (
    <div>
      <div className="h-16 bg-gray-200 flex justify-between px-12">
        <div>
          <h1 className="py-5">logo</h1>
        </div>
        <div>
          <h1 className="py-5">Paid Total : </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

export default function Sidebar({ active }: any) {
  const links = [
    {
      title: "Overview",
      icon: "bag",
    },
    {
      title: "Wishlist",
      icon: "bag",
    },
    {
      title: "Favourites",
      icon: "heart",
    },
    {
      title: "Notifications",
      icon: "bell",
    },
    {
      title: "Settings",
      icon: "gear",
    },
  ];
  return (
    <div className="px-2 mt-7 max-w-[18%] min-w-[18%]">
      <div>
        <h2 className="my-5 text-xl">Account</h2>
        {links.map((link, i) => (
          <p
            key={i}
            className={`mb-5 ${
              link.title === active
                ? " font-semibold text-white bg-orange-500 pr-5 py-2 pl-1"
                : " font-normal text-gray-600"
            } `}
          >
            <i className={`bi bi-${link.icon} ml-1 mr-2`}></i>
            {link.title}
          </p>
        ))}
      </div>
      <div className="mt-6 pt-8 border-t-[1px] border-t-gray-200">
        <p className="mb-5 font-normal text-gray-600">
          <i className="bi bi-question-lg ml-1 mr-2"></i> Help
        </p>
        <p className="mb-3 text-red-500">
          <i className="bi bi-box-arrow-left ml-1 mr-2"></i> Logout
        </p>
      </div>
    </div>
  );
}

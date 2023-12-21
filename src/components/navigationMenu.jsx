import React from "react";

const NavigationMenu = (props) => {
  return (
    <div>
        {/* {props} */}
      <div className="w-full mb-4 flex items-center justify-center md:hidden">
        <div className="flex space-x-4 items-center">
          <button
            className={`material-symbols-outlined text-3xl cursor-pointer hover:text-red-600 transition duration-300 ease-in-out ${
              props.selectedNavItem === "todo" && "text-red-600"
            }`}
            onClick={() => props.handleNavItemClick("todo")}
          >
            format_list_numbered
          </button>
          <button
            className={`material-symbols-outlined text-3xl cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out ${
              props.selectedNavItem === "doing" && "text-blue-500"
            }`}
            onClick={() => props.handleNavItemClick("doing")}
          >
            design_services
          </button>
          <button
            className={`material-symbols-outlined text-3xl cursor-pointer hover:text-purple-500 transition duration-300 ease-in-out ${
              props.selectedNavItem === "review" && "text-purple-500"
            }`}
            onClick={() => props.handleNavItemClick("review")}
          >
            reviews
          </button>
          <button
            className={`material-symbols-outlined text-3xl cursor-pointer hover:text-green-500 transition duration-300 ease-in-out ${
              props.selectedNavItem === "done" && "text-green-500"
            }`}
            onClick={() => props.handleNavItemClick("done")}
          >
            done
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;

import React from "react";

const sizes = {
  s: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  md: "text-5xl font-extrabold md:text-[44px] sm:text-[38px]",
  xs: "text-2xl font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

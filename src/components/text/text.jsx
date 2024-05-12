import React from "react";

const sizes = {
  xs: "text-[15px] font-normal",
  lg: "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  s: "text-base font-normal",
  md: "text-2xl font-normal md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

const Button = ({ className, children, variant }) => {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    "outline-yellow": "border border-yellow-500 text-yellow-500",
    yellow: "bg-yellow-500 text-black",
  };

  const pickVariants = variants[variant];

  return (
    <a
      className={`py-2 px-10 font-semibold text-lg rounded-full $inline-block ${pickVariants}${addClassName}`}>
      {children}
    </a>
  );
};

export default Button;

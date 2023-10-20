const Input = ({ title, type, name, id, placeholder, htmlFor, className }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={htmlFor}
        className="font-hmSansLatinBold text-[#222222] text-xs font-semibold py-2"
      >
        {title}
      </label>
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

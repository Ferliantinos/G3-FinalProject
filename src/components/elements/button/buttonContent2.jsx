import { Link } from "react-router-dom";

const Second_Content = ({ destination, title, bgColor, textColor }) => {
  return (
    <>
      <div className="mt-[28rem]">
        <Link to={destination} className={`bg-slate-${bgColor} text-${textColor} border p-2`}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default Second_Content;

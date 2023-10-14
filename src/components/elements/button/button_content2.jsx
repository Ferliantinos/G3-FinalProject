import { Link } from "react-router-dom";

const Second_Content = ({ destination, title }) => {
  return (
    <>
      <div className="mt-[28rem]">
        <Link to={destination} className="bg-slate-100 border p-2">
          {title}
        </Link>
      </div>
    </>
  );
};

export default Second_Content;

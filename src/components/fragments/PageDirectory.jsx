import { Link } from "react-router-dom";
const PageDirectory = () => {
  return (
    <div className="text-xs py-5">
      <Link to="/" className="hover:underline">
        HM.COM
      </Link>
      <span className="text-gray-400">/</span>
      <Link to="/login" className="hover:underline">
        Masuk Akun/Daftar Akun
      </Link>
    </div>
  );
};
export default PageDirectory;

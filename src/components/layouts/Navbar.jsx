const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-3">
      <div className="flex gap-10">
        <a href="#" className="text-base hover:underline">
          {" "}
          Wanita{" "}
        </a>
        <a href="#" className="text-base hover:underline">
          {" "}
          Pria{" "}
        </a>
        <a href="#" className="text-base hover:underline">
          {" "}
          Divided{" "}
        </a>
        <a href="#" className="text-base hover:underline">
          {" "}
          Baby{" "}
        </a>
        <a href="#" className="text-base hover:underline">
          {" "}
          Anak-anak{" "}
        </a>
        <div className="border-solid border-black border-b-2">
          <form
            action="#"
            method="post"
            className="flex justify-center items-center gap-1"
          >
            <img
              src="./assets/images/[1]_Header/Search_Icon.png"
              alt="Search Icon"
              className="w-5 h-5"
            />
            <input
              type="search"
              name=""
              id=""
              placeholder="Cari produk..."
              className="focus:outline-none"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

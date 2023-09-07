import SearchPanel from "./SearchPanel";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__photo">
            <img
              src="https://all-aforizmy.ru/wp-content/uploads/2021/12/149161725958e845ebaae6c7.95875305-scaled.jpg"
              alt="header-photo"
            />
          </div>
          <div className="header__title text-white text-center fs-1 fw-bold mb-4">
            Search for books
          </div>
          <SearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Header;

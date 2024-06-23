import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../components/style/Headerstyle.css";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2 from-yellow-300 via-green-300 to-red-300">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-red"
      >
        <span className="px-2 py-1  bg-opacity-50 rounded-lg p-5 shadow-inner shadow-yellow-500">
          Chitranjan
        </span>
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                atl="user"
                img={currentUser.profilePicture}
                rounded
              ></Avatar>
            }
          >
            <Dropdown.Header>
              <span className="block text-lg">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>

            <Link to={"/Dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/General Information"} as={"div"}>
          <Link to="/General Information">General Information</Link>
          <ul className="dropdown">
            <li>
              <Link to="./Covid19">Covid19</Link>
            </li>
            <li>
              <Link to="./Sustainability">Sustainability</Link>
            </li>
            <li>
              <Link to="./AirQuality">AirQuality</Link>
            </li>
            <li>
              <Link to="./Dryland">Dryland</Link>
            </li>
            <li>
              <Link to="./GHG">GHG</Link>
            </li>
          </ul>
        </Navbar.Link>
        <Navbar.Link active={path === "/research"} as={"div"}>
          <Link to="/research">Research</Link>
          <ul className="dropdown">
            <li>
              <Link to="./Journal">Journal</Link>
            </li>
            <li>
              <Link to="./Conferences">Conferences</Link>
            </li>
            <li>
              <Link to="./Enviroment">Enviroment</Link>
            </li>
            <li>
              <Link to="./Publication">Publication</Link>
            </li>
          </ul>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact">Contact Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Data"} as={"div"}>
          <Link to="/Data">Data</Link>
          <ul className="dropdown-2">
            <li>
              <Link to="./Shapefile">Shapefile</Link>
            </li>
            <li>
              <Link to="./Hydrology">Hydrology</Link>
            </li>
            <li>
              <Link to="./BuraArea">BurnArea</Link>
            </li>
            <li>
              <Link to="./Emission">Emission</Link>
            </li>
          </ul>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

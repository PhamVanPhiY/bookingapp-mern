import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  // const [redirect, setRedirect] = useState(null);
  const { user, ready, setUser } = useContext(UserContext);
  // let { subpage } = useParams();
  // if (subpage === undefined) {
  //   subpage = "profile";
  // }

  // async function logout() {
  //   await axios.post("/logout");
  //   setUser(null);
  //   setRedirect("/");
  // }

  // if (!ready) {
  //   return "Loading";
  // }
  // if (ready && !user) {
  //   return <Navigate to={"/login"} />;
  // }

  // function linkClasses(type = null) {
  //   let classes = "py-2 px-6";
  //   if (type === subpage) {
  //     classes += " bg-primary text-white rounded-full";
  //     console.log(user);
  //   }
  //   return classes;
  // }
  // if (redirect) {
  //   return <Navigate to={redirect}></Navigate>;
  // }
  // return (
  //   <div>
  //     <nav className="w-full flex mt-8 justify-center  gap-2 mb-8">
  //       <Link className={linkClasses("profile")} to={"/account"}>
  //         My profile
  //       </Link>
  //       <Link className={linkClasses("bookings")} to={"/account/bookings"}>
  //         My bookings
  //       </Link>
  //       <Link className={linkClasses("places")} to={"/account/places"}>
  //         My places
  //       </Link>
  //     </nav>

  //     {subpage === "profile" && (
  //       <div className="text-center max-w-lg mx-auto">
  //         Logged in as {user.data.name} ({user.data.email})
  //         <button onClick={logout} className="primary max-w-sm mt-2">
  //           Logout
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
  return <div>account page for {user.name}</div>;
}

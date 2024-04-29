import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearch } from "../Redux/gptSlice";
import { changeLanguage } from "../Redux/langSlice";
import { langSelector } from "../Utils/constatnts";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const lang=useSelector(store=>store?.lang?.lang);
  const showGptSearch=useSelector(store=>store?.gpt?.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
const handleGptSearch=()=>{
  dispatch(toggleGptSearch());
}
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = auth?.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="bg-gradient-to-b from-black w-screen flex justify-between h-20">
      <img className="w-56 mx-12 my-2" src={logo} alt="logo" />
      <div>
        {user && (
          <div className="flex m-4">
            <div className="flex text-white font-bold">
              <p className=" text-center my-2">{user?.displayName}</p>
              <img
                className="w-10 rounded-full mx-2"
                src={user?.photoURL}
                alt="avatar"
              />
            </div>
           {showGptSearch && <select className="rounded-lg bg-black text-white p-2" onChange={handleLanguageChange}>
              {langSelector?.map(elem=><option key={elem?.identifier} value={elem?.identifier}>{elem?.language}</option>)}
            </select>}
            <button
              className="font-semibold text-base text-white cursor-pointer bg-purple-600 rounded-lg px-1 mx-2 w-28 h-10"
              onClick={handleGptSearch}
            >
              {showGptSearch?"Homepage":"GPT Search"}
            </button>
            <button
              className="font-semibold text-base text-white cursor-pointer bg-red-600 rounded-lg px-1 w-28 h-10"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

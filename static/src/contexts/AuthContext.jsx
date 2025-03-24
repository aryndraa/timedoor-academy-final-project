import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false)

  const [user, setUser] = useState()

  const [users, setUsers] = useState([
    {
      id: 1,
      email: "user@test.com",
      password: "qwertyuiop"
    }
  ])

  const [userProfile, setUserProfile] = useState([
    {
      id: 1,
      userId: 1,
      firstName: "Mahendra",
      lastName: "Arya",
      phone: "08123456789"
    }
  ])

  const addUser = (newUser) => {
    setUser((prevUsers) => [...prevUsers, newUser]);
  };

  const addUserProfile = (newProfile) => {
    setUserProfile((prevProfiles) => [...prevProfiles, newProfile]);
  };

  const editUserProfile = (userId, updatedProfile) => {
    setUserProfile((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.userId === userId ? { ...profile, ...updatedProfile } : profile
      )
    );
  };
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      users,
      userProfile,
      addUser,
      addUserProfile,
      editUserProfile,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

// const handleAddUser = () => {
//   addUser({ id: 2, name: "Jane Doe", email: "jane@example.com" });
// };


// const handleSave = () => {
//   editUserProfile(userProfile[0]?.userId, { bio, location });
//   alert("Profile updated!");
// };
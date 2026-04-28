import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const { loading, user } = useAuth();
  return (
    <>
      <h1>Profile</h1>
      <h1>Name: {user.name}</h1>
      <p>Email:{user.email}</p>
      <p>Role:{user.role}</p>
      <p>Status:{user.status}</p>
    </>
  );
};

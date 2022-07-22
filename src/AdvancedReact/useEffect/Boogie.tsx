import { useEffect, useState } from "react";
import Product from "../Prop-Types/Product";
import GithubCard from "../../components/GithubCard";

const url = "https://api.github.com/users";

const Boogie = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setUsers(response);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {users.map((user) => {
        const { login, avatar_url, id } = user;
        return <Product key={id} name={login} image={avatar_url} />;
      })}
    </>
  );
};

export default Boogie;

import { useState, useEffect } from "react";
import GithubCard from "../../components/GithubCard";

const UseEffectFetchData = () => {
  const [data, setData] = useState([]);
  const url = "https://api.github.com/users";

  const getData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      UseEffectFetchData
      {data.map((data) => {
        const { id, login, avatar_url } = data;
        return (
          <GithubCard
            key={id}
            alt={login}
            ImageUrl={avatar_url}
            username={login}
            followers="23"
          />
        );
      })}
    </div>
  );
};

export default UseEffectFetchData;

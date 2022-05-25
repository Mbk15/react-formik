import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const url = "https://api.github.com/users/QuincyLarson";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((data) => {
        const { login } = data;
        setUser(login);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (isLoading) {
    return (
      <div>
        <h1>Loading ....</h1>
      </div>
    );
  }
  if (isError) {
    <h1>Error ..</h1>;
  }
  return <div>{user}</div>;
};

export default MultipleReturns;

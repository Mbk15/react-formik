import React from "react";
interface githubUsers {
  alt: string;
  ImageUrl: string;
  username: string;
  followers: string;
  key: number;
}

const GithubCard = ({
  alt,
  ImageUrl,
  username,
  followers,
  key,
}: githubUsers) => {
  return (
    <div className="text-center grid place-items-center">
      <div className="w-max flex align-center justify-center flex-column bg-purple-400 br-4 my-4 py-5 px-5">
        <div>
          <img src={ImageUrl} alt={alt} />
          <h4 key={key}>{username}</h4>
          <p> By : {followers}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;

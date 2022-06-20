import { useFetch } from "./UseFetch";
const url = "https://api.github.com/users";
const CustomHook = () => {
  const { loading } = useFetch(url);
  const Loader = () => {
    return (
      <div className="flex justify-center ">
        <img src="./load.gif" alt="Loader" width={200} height={200} />
      </div>
    );
  };
  return (
    <div className="flex justify-center ">{loading ? <Loader /> : "data"}</div>
  );
};
export default CustomHook;

interface myProps {
  name: string;
  color: string;
  onClick: any;
}
const Button = ({ name, color }: myProps) => {
  return (
    <button
      className={`bg-${color}-600 px-5 py-2 rounded text-center flex justify-center text-white ml-8`}
    >
      {name}
    </button>
  );
};

export default Button;

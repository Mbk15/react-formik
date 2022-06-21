import { Routes, Route, Link } from "react-router-dom";
import Booklist from "./components/Booklist";
import ArrayExample from "./AdvancedReact/useState/ArrayExample";
import ProductLaunch from "./AdvancedReact/Prop-Types/ProductLaunch";
const App = () => {
  return (
    <div className="">
      <h1>Welcome to React Router!</h1>
      <nav className="text-red-500">
        <Link to="/showCase2">All Gallery </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="showCase1" element={<ArrayExample />} />
        <Route path="showCase2" element={<ShowAll />} />
      </Routes>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <main className="flex justify-center">
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>

        <nav className="text-red-500">
          <Link to="/showCase1">Go Forth</Link>
        </nav>
      </main>
    </>
  );
};

const About = () => {
  return (
    <>
      <main className="flex justify-center">
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav className="text-red-500">
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
const ShowAll = () => {
  return (
    <>
      <Home />
      <About />
      <nav>
        <Link to="/showCase1">Gallery 1</Link>
      </nav>
    </>
  );
};
export default App;

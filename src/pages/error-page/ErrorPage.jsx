import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-2 ">
      <h1>404 - not found.</h1>
      <p>Go Home Kid.</p>
      <p>What are you doing alone here?</p>
      <p>
        Come on! click{" "}
        <Link className="underline" to="/home">
          'Here'
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;

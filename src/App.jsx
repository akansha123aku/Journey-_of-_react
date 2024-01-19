import REACT_LOGO from "../public/react_logo.png";

function App() {
  return (
    <>
      <div className="h-screen bg-slate-800">
        <header className="flex justify-center items-center flex-col bg-sky-900 p-3">
          <h1 className="text-center font-bold text-4xl items-center text-white flex flex-row">
            Journey through React{" "}
            <span>
              <img
                src={REACT_LOGO}
                alt="ReactJS Logo"
                className="w-16 h-auto"
              />
            </span>
          </h1>
        </header>
      </div>
    </>
  );
}

export default App;

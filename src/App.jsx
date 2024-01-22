import REACT_LOGO from "/react_logo.png";

function App() {
  return (
    <>
      <div className="h-screen bg-slate-800">
        <header className="flex justify-center items-center flex-col bg-sky-900 p-3">
          <h1 className="text-center font-bold lg:text-4xl md:text-2xl sm:text-sm items-center text-white flex flex-row font-roboto">
            Journey through React{" "}
            <span>
              <img
                src={REACT_LOGO}
                alt="ReactJS Logo"
                className="w-8 lg:w-16 h-auto motion-safe:animate-spin-slow "
              />
            </span>
          </h1>
        </header>
        <section
          id="contents"
          className="mt-10 bg-slate-700 p-3 text-white font-roboto  lg:w-3/4 md:w-screen mx-auto rounded-md h-4/5 overflow-y-auto"
        >
          <ol className="p-2 my-4">
            <h1 className="text-cyan-400 text-4xl">Contents</h1>
            <li className="mt-4 text-xl mb-4 text-rose-500">React Hooks</li>
            <li className="mb-3">useState</li>
            <li className="mb-3">useEffect</li>
            <li className="mb-3">useRef</li>
            <li className="mb-3">useContext</li>
            <li className="mb-3">useCallback</li>
            <li className="mb-3">useId</li>
            <li className="mb-3">useImperativeHandle</li>
            <li className="mb-3">useReducer</li>
            <li className="mb-3">useMemo</li>
            <li className="mb-3">useLayoutEffect</li>
            <li className="mb-3">useTransition</li>
            <li className="mt-4 text-xl mb-4 text-rose-500">
              React Components
            </li>
            <li className="mb-3">&lt;Fragment&gt;(&lt;&gt;)</li>
            <li className="mb-3">&lt;Profiler&gt;</li>
            <li className="mb-3">&lt;StrictMode&gt;</li>
            <li className="mb-3">&lt;Suspense&gt;</li>
            <li className="mt-4 text-xl mb-4 text-rose-500">React APIs</li>
            <li className="mb-3">cache</li>
            <li className="mb-3">createContext</li>
            <li className="mb-3">forwardRef</li>
            <li className="mb-3">lazy</li>
            <li className="mb-3">memo</li>
            <li className="mb-3">startTransition</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default App;

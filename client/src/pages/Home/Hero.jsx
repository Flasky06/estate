import SearchComponent from "../../components/SearchComponent";

function Hero() {
  return (
    <div className="w-full px-2 lg:px-4 h-screen  bg-slate-100  flex flex-col lg:items-center lg:justify-center">
      <div className="flex lg:justify-center items-center pt-40 pb-20">
        <h1 className="text-4xl lg:text-6xl font-bold capitalize lg:max-w-3xl lg:text-center 	">
          Find the best &nbsp;
          <span className="text-blue-700">Real Estate</span>
          &nbsp; in The <span className="text-blue-700">market</span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <SearchComponent />
      </div>
    </div>
  );
}

export default Hero;

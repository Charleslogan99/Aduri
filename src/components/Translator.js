import Nav from "./Header";

const GoogleTranslator = () => {
    return (
      <div className="bg-black  top-0 w-full z-50 shadow-md">
        <div className="container mx-auto py-2 px-4">
          <div
            id="google_translate_element"
            className="sm:flex flex-wrap"
          ></div>
        </div>
        <div className="bg-white w-full">
          <Nav />
        </div>
      </div>
    );
};
export default GoogleTranslator
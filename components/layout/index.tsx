// import Footer from "./Footer";
import Header from "./header";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="mb-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default LayoutWrapper;

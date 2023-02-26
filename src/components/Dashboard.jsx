import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard({ children }) {
  return (
    <>
      <div className=" flex h-[90%]">
        <Sidebar />
        <div className=" flex flex-col w-full">
          <Navbar />
          <div className=" overflow-y-auto mt-6 mx-10">
            {children}
          </div>
        </div>
      </div>
      <div className=" w-full h-[10%] ">
        <Footer />
      </div>
    </>
  )
}

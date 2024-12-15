import React from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

const Home = () => {
  return (
    <div className="w-full p-4">
      <Header />

      <div className=" mx-auto grid max-w-7xl  grid-cols-8">
        <div className="col-span-2 hidden bg-green-300 md:block">
          <Aside />
        </div>
        <div className="col-span-full rounded-l p-4 md:col-span-6 md:bg-lime-400">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;

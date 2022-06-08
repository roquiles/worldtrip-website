import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import CallToAction from "../components/CallToAction";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <CallToAction />
    </>
  );
};

export default Home;

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import CallToAction from "../components/CallToAction";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <CallToAction />
    </>
  );
}

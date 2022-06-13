import Banner from "../components/BannerHomepage";
import TravelTypes from "../components/TravelTypes";
import CallToAction from "../components/CallToAction";

export default function Home(): JSX.Element {
  return (
    <>
      <Banner />
      <TravelTypes />
      <CallToAction />
    </>
  );
}

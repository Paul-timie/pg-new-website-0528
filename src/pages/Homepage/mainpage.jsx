import Teamsection from "../../components/Teamsection";
import Businessadvisors from "../../components/Businessadvisors";
import Info1 from "../../components/PG_landing";
import Solution from "../../components/Solution";
//import Market from "../../components/Marketsize";
import SAB from "../../components/SAB";
import Founder from "../../components/Founder";
export default function Mainpage() {
  return (
    <>
      <main>
        <Info1 />
        <Solution />
        {/* <Market /> */}
        <Founder />
        <Businessadvisors />
        <Teamsection />
        <SAB />
      </main>
    </>
  );
}

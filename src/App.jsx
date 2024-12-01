import "./App.css";
import ContentAi from "./components/ContentAi";
import First from "./components/First";
import GrowFollowers from "./components/GrowFollowers";
import Growth from "./components/Growth";
import MaintainConsistent from "./components/MaintainConsistent";
import MultipleAccounts from "./components/MultipleAccounts";
import SecondSocial from "./components/SecondSocial";
import ThirdSchedule from "./components/ThirdSchedule";

function App() {
  return (
    <>
      <main className="wrapper grid gap-5 w-full h-full p-6 md:p-8">
        <First />
        <SecondSocial />
        <ThirdSchedule />
        <ContentAi />
        <MultipleAccounts />
        <MaintainConsistent />
        <Growth />
        <GrowFollowers />
      </main>
    </>
  );
}

export default App;

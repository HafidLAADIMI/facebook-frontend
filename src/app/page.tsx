import CenterBar from "../../components/CenterBar";
import LeftBar from "../../components/LeftBar";
import NavBar from "../../components/NavBar";
import RightBar from "../../components/RightBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex flex-row w-full h-screen items-start py-3">
        <LeftBar />
        <CenterBar />
        <RightBar />
      </main>
    </div>
  );
}

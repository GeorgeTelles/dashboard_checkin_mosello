import { Navbar } from "./components/Navbar";
import { HeroPanel } from "./components/HeroPanel";
import { SummaryCards } from "./components/SummaryCards";
import { CurrentHearings } from "./components/CurrentHearings";
import { EntriesTable } from "./components/EntriesTable";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      <main className="container mx-auto px-6 py-8 space-y-8">
        <HeroPanel />
        <SummaryCards />
        <CurrentHearings />
        <EntriesTable />
      </main>
    </div>
  );
}
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Award from "./components/Award";
import Education from "./components/Education";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 hidden h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl lg:block" />

      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-4 py-4 sm:px-6 lg:px-10 xl:px-12">
        <NavBar />

        <main className="flex-1 space-y-16 py-6 md:space-y-20 md:py-10">
          <section className="overflow-hidden rounded-3xl bg-slate-950/70 px-4 py-5 shadow-[0_35px_120px_-60px_rgba(14,165,233,0.55)] sm:px-8 sm:py-8 md:px-10 md:py-10">
            <Banner />
          </section>

          <section className="space-y-16 md:space-y-20">
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Award />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

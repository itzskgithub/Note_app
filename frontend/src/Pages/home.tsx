
import { Link } from "react-router-dom";

const Home = () => {
  const technologies = [
    {
      name: "React",
      description: "Builds the interactive user interface.",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      description: "Creates a responsive and modern design.",
      category: "Styling",
    },
    {
      name: "Node.js",
      description: "Runs JavaScript on the server.",
      category: "Backend",
    },
    {
      name: "Express.js",
      description: "Handles API routes and requests.",
      category: "Backend",
    },
    {
      name: "MongoDB",
      description: "Stores users and notes as documents.",
      category: "Database",
    },
    {
      name: "JWT",
      description: "Supports token-based authentication.",
      category: "Security",
    },
    {
      name: "bcrypt",
      description: "Hashes passwords securely.",
      category: "Security",
    },
    {
      name: "Axios",
      description: "Connects the frontend to backend APIs.",
      category: "HTTP Client",
    },
  ];

  const features = [
    {
      icon: "✍️",
      title: "Capture Your Ideas",
      description:
        "Keep your thoughts, reminders, and important information in one place.",
    },
    {
      icon: "📂",
      title: "Stay Organized",
      description:
        "Build a simple space for organizing your personal notes and ideas.",
    },
    {
      icon: "🔐",
      title: "Authentication",
      description:
        "Register and log in with password hashing and JWT-based authentication.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Create an Account",
      description:
        "Register with your name, email, and password.",
    },
    {
      number: "02",
      title: "Log In",
      description:
        "Submit your credentials for verification.",
    },
    {
      number: "03",
      title: "Authenticate",
      description:
        "The backend verifies credentials and returns a JWT token.",
    },
    {
      number: "04",
      title: "Manage Notes",
      description:
        "Use authenticated API requests to create, view, update, or delete notes when those features are implemented.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
              📝
            </span>
            <span className="text-xl font-bold tracking-tight">
              Note<span className="text-indigo-600">Nest</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-indigo-600">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-indigo-600">
              Workflow
            </a>
            <a href="#technology" className="transition hover:text-indigo-600">
              Tech Stack
            </a>
          </div>

          <Link
            to="/login"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Get Started →
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Your personal note-taking space
              </span>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Your thoughts,
                <span className="block text-indigo-600">
                  organized.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Welcome to NoteNest — a simple Notes App project designed
                to help you capture ideas, organize information, and keep
                important thoughts in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Create Your Account →
                </Link>

                <a
                  href="#features"
                  className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span>✓ MERN Stack</span>
                <span>✓ JWT Authentication</span>
                <span>✓ Responsive UI</span>
              </div>
            </div>

            {/* Decorative Notes Preview */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />
              <div className="absolute -right-5 bottom-0 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-indigo-100 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-sm text-slate-500">My Workspace</p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Recent Notes
                    </h2>
                  </div>
                  <span className="rounded-xl bg-indigo-50 px-3 py-2 text-xl">
                    ✨
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 transition hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-amber-800">
                        Project Ideas
                      </span>
                      <span>💡</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ideas for building better projects and learning new
                      technologies.
                    </p>
                    <span className="mt-3 inline-block text-xs text-slate-400">
                      Sample preview
                    </span>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 transition hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-indigo-800">
                        Learning Notes
                      </span>
                      <span>📚</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      React, Node.js, APIs, authentication, and database
                      concepts.
                    </p>
                    <span className="mt-3 inline-block text-xs text-slate-400">
                      Sample preview
                    </span>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 transition hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-emerald-800">
                        Daily Goals
                      </span>
                      <span>🎯</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Plan tasks, track priorities, and stay focused.
                    </p>
                    <span className="mt-3 inline-block text-xs text-slate-400">
                      Sample preview
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-500">
                  <span className="text-lg">🔒</span>
                  Built with authentication in mind
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              What You Can Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Everything starts with an idea.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A straightforward interface focused on making note-taking
              simple and accessible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-300">
                Application Workflow
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                From signup to your notes.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Here is how the frontend, backend, database, and
                authentication work together.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <span className="text-3xl font-extrabold text-indigo-300">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-6">
              <p className="font-semibold text-indigo-200">
                How the request flows
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                React UI → Axios request → Express API → MongoDB → API
                response → React UI
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                After successful login, the backend signs a JWT. Protected
                endpoints should verify that token before allowing access
                to user-specific notes.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="technology" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Under The Hood
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Technology stack
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Technologies used to build the frontend, backend,
              database integration, and authentication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <article
                key={technology.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:shadow-md"
              >
                <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {technology.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {technology.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {technology.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-12 text-center text-white shadow-xl shadow-indigo-200 md:px-14 md:py-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to organize your thoughts?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-indigo-100">
              Create an account and start exploring your personal
              note-taking workspace.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              Get Started for Free →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-7 text-center sm:flex-row sm:text-left">
          <p className="font-bold text-slate-800">
            Note<span className="text-indigo-600">Nest</span>
          </p>
          <p className="text-sm text-slate-500">
            A full-stack Notes App built to practice the MERN stack.
          </p>
          <a
            href="#home"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

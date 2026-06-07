import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the fundamentals of React and build modern user interfaces.",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    description:
      "Build beautiful responsive websites faster with Tailwind CSS.",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  },
  {
    id: 3,
    title: "Node.js Authentication Guide",
    description:
      "Implement JWT and Google OAuth authentication in Node.js.",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
];

const categories = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "AI",
  "Next.js",
  "Tailwind",
  "Career",
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              🚀 Welcome to BlogHub
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight text-gray-900">
              Share Your Ideas
              <br />
              With The World
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              Discover articles, tutorials, and insights
              from developers around the world.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/blogs"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Explore Blogs
              </Link>

              <Link
                to="/create-blog"
                className="border border-gray-300 px-6 py-3 rounded-xl"
              >
                Start Writing
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000"
              alt="hero"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["10K+", "Readers"],
            ["500+", "Blogs"],
            ["200+", "Authors"],
            ["1M+", "Views"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white p-8 rounded-2xl shadow-sm text-center"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {value}
              </h2>

              <p className="text-gray-500 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Trending Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">
          Featured Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Technology
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {blog.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-gray-500">
                    {blog.author}
                  </span>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose BlogHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Fast Publishing
            </h3>
            <p className="text-gray-600">
              Publish your blogs instantly with a
              beautiful editor.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Reach Readers
            </h3>
            <p className="text-gray-600">
              Share knowledge with thousands of
              readers worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Grow Career
            </h3>
            <p className="text-gray-600">
              Build your personal brand and showcase
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-4">
            Get the latest articles directly in your
            inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl text-black outline-none"
            />

            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
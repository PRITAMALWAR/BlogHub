const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              📖 About BlogHub
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 text-gray-900">
              Empowering People
              <br />
              Through Knowledge
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              BlogHub is a modern blogging platform where developers,
              students, and creators can share ideas, learn new skills,
              and inspire others through quality content.
            </p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Start Reading
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Our Mission
          </h2>

          <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto">
            Our mission is to create a platform where knowledge is freely
            shared, ideas are celebrated, and learning becomes accessible
            to everyone. We believe that one great article can change
            someone's career and future.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["10K+", "Readers"],
            ["500+", "Articles"],
            ["200+", "Authors"],
            ["1M+", "Monthly Views"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-8 text-center shadow-sm"
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

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose BlogHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl mb-4">✍️</div>

            <h3 className="text-2xl font-bold mb-4">
              Easy Publishing
            </h3>

            <p className="text-gray-600">
              Create and publish blogs in minutes with a simple and
              user-friendly experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl mb-4">🌎</div>

            <h3 className="text-2xl font-bold mb-4">
              Global Audience
            </h3>

            <p className="text-gray-600">
              Reach readers from around the world and share your
              knowledge with the community.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl mb-4">🚀</div>

            <h3 className="text-2xl font-bold mb-4">
              Grow Your Brand
            </h3>

            <p className="text-gray-600">
              Build credibility, showcase expertise, and establish
              yourself as an industry voice.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              role: "Founder",
            },
            {
              name: "Sarah Smith",
              role: "Content Manager",
            },
            {
              name: "David Lee",
              role: "Developer",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-3xl font-bold text-blue-600">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {member.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Join Our Community
          </h2>

          <p className="mt-4 text-lg">
            Start reading, writing, and sharing your ideas today.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
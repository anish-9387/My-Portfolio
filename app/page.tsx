import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

export default function Home(){
  return(
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      {/* Main content with padding to account for fixed navbar */}
      <div className="relative z-10 pt-24 px-8">
        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-4">About Me</h1>
            <p className="text-gray-300">Welcome to my portfolio</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Projects</h2>
            <p className="text-gray-300">My projects will be displayed here</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Skills</h2>
            <p className="text-gray-300">My skills will be displayed here</p>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Resume</h2>
            <p className="text-gray-300">My resume will be displayed here</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Contact Me</h2>
            <p className="text-gray-300">Contact information will be displayed here</p>
          </div>
        </section>
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className={`transition-all duration-1000 ${isLoading ? 'blur-xl' : 'blur-0'}`}>
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center px-4 md:px-20 lg:px-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
            Nikhil Parajuli
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-wide">
            Tech Innovator • Blockchain Enthusiast • Startup Founder
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Nikhil-Parajuli" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nikhilparajuli/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nikhilparajuli99@gmail.com" className="hover:text-gray-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4 md:px-20 lg:px-32 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor in Computer Application</h3>
            <p className="text-gray-400">Chitwan College of Technology (TU Affiliated)</p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 md:px-20 lg:px-32 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Achievements</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Founder</h3>
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-medium">IntroNep</h4>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-400">Mental health platform offering online consultation, support groups, and EAP</p>
                </div>
                <div className="group">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-medium">TricoDigital</h4>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-400">Blockchain startup delivering Web3 solutions</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Awards</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Top 12 Finalist at Nepal's ICT Award 2023</li>
                <li>Progressive Student of the Year (Grade 8)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 md:px-20 lg:px-32 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
  <a href="https://github.com/Nikhil-Parajuli/Easy-Vision-Comfort-Tools" target="_blank" rel="noopener noreferrer">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      Easy Vision Comfort Tools
      <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </h3>
  </a>
  <p className="text-gray-400">Chrome extension for color-blind users with enhanced viewing modes</p>
</div>

            <div className="group p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              {/* <h3 className="text-xl font-semibold mb-2 flex items-center">
                Unclaimed Airdrop & NFT Finder
                <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3> */}
              <h3 className="text-xl font-semibold mb-2 flex items-center">
  Unclaimed Airdrop & NFT Finder
  <a 
    href="https://github.com/Nikhil-Parajuli/Unclaimed-Airdrop-NFT-Finder" 
    target="_blank" 
    rel="noopener noreferrer"
    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 hover:underline flex items-center"
  >
    <ExternalLink size={16} />
  </a>
</h3>  <p className="text-gray-400">Scans wallets for unclaimed airdrops/NFTs</p>
            </div>

            <div className="group p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
  <a href="https://github.com/Nikhil-Parajuli/Web3-Alert-Hub" target="_blank" rel="noopener noreferrer">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      Web3 Alert Hub
      <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </h3>
  </a>
  <p className="text-gray-400">Real-time notification system for Web3 activities</p>
</div>



<div className="group p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
  <a href="https://my-finance-tracker-neon.vercel.app/" target="_blank" rel="noopener noreferrer">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      MyFinance Tracker
      <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </h3>
  </a>
  <p className="text-gray-400">Financial management web app for tracking personal and family expenses</p>
</div>
          </div>



        </section>

        {/* Next Project Section */}
        <section className="py-16 px-4 md:px-20 lg:px-32 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Next Project</h2>
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web3, Blockchain, and AI-based Mental Health Solution</h3>
            <p className="text-gray-400">
              Developing an innovative solution to address mental health challenges at their root using cutting-edge technologies
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
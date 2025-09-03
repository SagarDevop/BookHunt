import React from "react";
import { Linkedin, Github, Mail, Link as LinkIcon } from "lucide-react";

function Contact() {
  return (
    <section className="flex justify-center items-center min-h-screen w-full bg-[#E6CFA9] px-6 py-12">
      <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Connect with <span className="text-yellow-700">Me</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          👋 I’m <span className="font-semibold">Sagar Singh Rajawat</span>, the
          creator of BookHunt. Let’s connect and collaborate!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/sagar-singh-2b9953337/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FFF6E0] px-6 py-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
            <span className="text-gray-800 font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/SagarDevop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FFF6E0] px-6 py-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <Github className="w-6 h-6 text-gray-800" />
            <span className="text-gray-800 font-medium">GitHub</span>
          </a>

          <a
            href="mailto:sagar.singh44818@gmail.com"
            className="flex items-center gap-3 bg-[#FFF6E0] px-6 py-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <Mail className="w-6 h-6 text-red-600" />
            <span className="text-gray-800 font-medium">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

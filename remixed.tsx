import React, { useState } from 'react';
import { Users, Target, Zap, Code, Database, TrendingUp, X, Mail, Phone, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function QuantumCrewProfile() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 1,
      name: "Israt Jahan",
      studentId: "ID 2230968",
      role: "Frontend Specialist",
      email: "israt.jahan@example.com",
      phone: "+880 1234-567890",
      major: "Management Information Systems",
      skills: ["React", "UI/UX Design", "JavaScript", "Tailwind CSS"],
      interests: ["Web Development", "User Experience", "Data Visualization"],
      bio: "Passionate about creating intuitive and beautiful user interfaces. Specializes in frontend development with a focus on modern web technologies and responsive design.",
      achievements: ["Dean's List 2023", "Best UI Design Award", "Hackathon Winner"]
    },
    {
      id: 2,
      name: "Md Ibrahim Khan",
      studentId: "ID 2330982",
      role: "Backend Developer",
      email: "ibrahim.khan@example.com",
      phone: "+880 1234-567891",
      major: "Management Information Systems",
      skills: ["Python", "Database Design", "API Development", "Cloud Computing"],
      interests: ["System Architecture", "Database Optimization", "Cloud Solutions"],
      bio: "Focused on building scalable backend systems and efficient database architectures. Experienced in developing robust APIs and managing cloud infrastructure.",
      achievements: ["AWS Certified", "Best Backend Project 2023", "Dean's List"]
    },
    {
      id: 3,
      name: "Arko Ahsan",
      studentId: "ID 2221858",
      role: "Data Analyst",
      email: "arko.ahsan@example.com",
      phone: "+880 1234-567892",
      major: "Management Information Systems",
      skills: ["Data Analysis", "Python", "SQL", "Tableau", "Excel"],
      interests: ["Business Intelligence", "Predictive Analytics", "Data Mining"],
      bio: "Expert in transforming raw data into actionable insights. Specializes in statistical analysis and creating compelling data visualizations for business decision-making.",
      achievements: ["Data Science Competition Winner", "Research Publication", "Honor Roll"]
    },
    {
      id: 4,
      name: "Ahasanul Haque Mahi",
      studentId: "ID 2321373",
      role: "Project Manager",
      email: "mahi.haque@example.com",
      phone: "+880 1234-567893",
      major: "Management Information Systems",
      skills: ["Project Management", "Agile", "Team Leadership", "Strategic Planning"],
      interests: ["Business Strategy", "Team Collaboration", "Process Optimization"],
      bio: "Natural leader with strong organizational skills and strategic thinking. Experienced in coordinating teams and ensuring project success through effective management.",
      achievements: ["Leadership Award 2023", "Dean's List", "Student Council Member"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      {/* Animated Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-400/50 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center border-b border-purple-400/30">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-3xl font-bold">
                  {selectedMember.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                  <p className="text-purple-200">{selectedMember.studentId}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Role Badge */}
              <div className="flex justify-center">
                <span className="bg-purple-500/30 border border-purple-400/50 px-6 py-2 rounded-full text-lg font-semibold">
                  {selectedMember.role}
                </span>
              </div>

              {/* Bio */}
              <div className="bg-white/10 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  About
                </h3>
                <p className="text-gray-200 leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-purple-400/30">
                  <div className="flex items-center text-purple-300 mb-2">
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <p className="text-gray-200 text-sm">{selectedMember.email}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-purple-400/30">
                  <div className="flex items-center text-purple-300 mb-2">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <p className="text-gray-200 text-sm">{selectedMember.phone}</p>
                </div>
              </div>

              {/* Major */}
              <div className="bg-white/10 rounded-xl p-4 border border-purple-400/30">
                <div className="flex items-center text-purple-300 mb-2">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Major</span>
                </div>
                <p className="text-gray-200">{selectedMember.major}</p>
              </div>

              {/* Skills */}
              <div className="bg-white/10 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/30 border border-purple-400/50 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white/10 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Areas of Interest
                </h3>
                <ul className="space-y-2">
                  {selectedMember.interests.map((interest, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <span className="text-purple-400 mr-3">▸</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-400/50">
                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements & Recognition
                </h3>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <span className="text-yellow-400 mr-3">★</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-full">
                <Zap className="w-16 h-16" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Quantum Crew
          </h1>
          <p className="text-2xl text-purple-300 font-light italic mb-2">
            "Transforming Data into Decisions, One Quantum Leap at a Time"
          </p>
          <p className="text-lg text-gray-300">
            MIS-455 | Management Information Systems
          </p>
        </header>

        {/* Group Introduction */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">About Our Team</h2>
          </div>
          <div className="space-y-4 text-gray-200">
            <p className="text-lg leading-relaxed">
              We are <span className="text-purple-400 font-semibold">Quantum Crew</span> - a dynamic team of aspiring information systems professionals committed to leveraging cutting-edge technology and data-driven insights to solve real-world business challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-purple-500/20 p-4 rounded-xl border border-purple-400/30">
                <Code className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-gray-300">Pushing boundaries with creative solutions</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-400/30">
                <Database className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Data-Driven</h3>
                <p className="text-sm text-gray-300">Making informed decisions through analysis</p>
              </div>
              <div className="bg-pink-500/20 p-4 rounded-xl border border-pink-400/30">
                <TrendingUp className="w-6 h-6 text-pink-400 mb-2" />
                <h3 className="font-semibold mb-1">Excellence</h3>
                <p className="text-sm text-gray-300">Striving for quality in every project</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-purple-500/30">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative text-left"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-6 rounded-xl border-2 transition-all duration-300 ${hoveredMember === member.id ? 'border-purple-400 scale-105 shadow-2xl shadow-purple-500/50' : 'border-purple-500/30'
                  }`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1 group-hover:text-purple-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-center text-sm font-semibold mb-1">{member.studentId}</p>
                  <p className="text-purple-300 text-center text-sm">{member.role}</p>
                  <div className="mt-3 text-center text-xs text-gray-400 group-hover:text-purple-300 transition-colors">
                    Click to view profile →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Project Proposal */}
        <section className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-400/50">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">Final Project Proposal</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-3">
                📊 SmartBiz Analytics Dashboard
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                An intelligent business analytics platform that integrates real-time data visualization, predictive analytics, and automated reporting to help small and medium enterprises make data-driven decisions.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Project Objectives:</h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span><strong>Data Integration:</strong> Seamlessly connect multiple data sources (sales, inventory, customer data) into a unified platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span><strong>Real-Time Visualization:</strong> Create interactive dashboards displaying key performance indicators and business metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span><strong>Predictive Analytics:</strong> Implement machine learning models for sales forecasting and trend analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span><strong>Automated Reporting:</strong> Generate customizable reports and alerts for stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span><strong>User-Friendly Interface:</strong> Design an intuitive interface accessible to non-technical business users</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-semibold mb-3 text-purple-300">Expected Deliverables:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Fully functional web application</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Database design & implementation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>User documentation & guides</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Final presentation & demo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400">
          <p className="mb-2">© 2024 Quantum Crew | MIS-455 Management Information Systems</p>
          <p className="text-sm">Empowered by innovation, driven by data, united by purpose</p>
        </footer>
      </div>
    </div>
  );
}
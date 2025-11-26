// Team members data
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
    }
];

// State management
let selectedMember = null;

// DOM Elements
const teamGrid = document.getElementById('team-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// Initialize the app
function init() {
    renderTeamMembers();
    setupEventListeners();
}

// Render team members
function renderTeamMembers() {
    teamGrid.innerHTML = members.map(member => `
        <button class="member-card" onclick="openModal(${member.id})" data-member-id="${member.id}">
            <div class="member-avatar">${member.name.charAt(0)}</div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-id">${member.studentId}</p>
            <p class="member-role">${member.role}</p>
            <div class="member-cta">
                <span>Click to view profile</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </button>
    `).join('');
}

// Open modal with member details
function openModal(memberId) {
    selectedMember = members.find(m => m.id === memberId);
    if (!selectedMember) return;

    renderModal();
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
    selectedMember = null;
}

// Render modal content
function renderModal() {
    if (!selectedMember) return;

    const modalContent = `
        <div class="modal-header">
            <div class="modal-header-content">
                <div class="modal-avatar">${selectedMember.name.charAt(0)}</div>
                <div>
                    <h2>${selectedMember.name}</h2>
                    <p>${selectedMember.studentId}</p>
                </div>
            </div>
            <button class="close-button" id="close-modal" onclick="closeModal()" title="Close (Press Esc)">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div class="modal-body">
            <div style="text-align: center;">
                <span class="role-badge">${selectedMember.role}</span>
            </div>
            
            <!-- Bio -->
            <div class="modal-section">
                <h3>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    About
                </h3>
                <p>${selectedMember.bio}</p>
            </div>
            
            <!-- Contact Info -->
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="contact-label">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email</span>
                    </div>
                    <p class="contact-value">${selectedMember.email}</p>
                </div>
                <div class="contact-item">
                    <div class="contact-label">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Phone</span>
                    </div>
                    <p class="contact-value">${selectedMember.phone}</p>
                </div>
            </div>
            
            <!-- Major -->
            <div class="modal-section">
                <h3>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                    </svg>
                    Major
                </h3>
                <p>${selectedMember.major}</p>
            </div>
            
            <!-- Skills -->
            <div class="modal-section">
                <h3>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Skills & Expertise
                </h3>
                <div class="skills-container">
                    ${selectedMember.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            
            <!-- Interests -->
            <div class="modal-section">
                <h3>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Areas of Interest
                </h3>
                <ul class="interest-list">
                    ${selectedMember.interests.map(interest => `<li>${interest}</li>`).join('')}
                </ul>
            </div>
            
            <!-- Achievements -->
            <div class="modal-section achievement-section">
                <h3>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Achievements & Recognition
                </h3>
                <ul class="achievement-list">
                    ${selectedMember.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    document.getElementById('modal-container').innerHTML = modalContent;
}

// Setup event listeners
function setupEventListeners() {
    // Click outside modal to close
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

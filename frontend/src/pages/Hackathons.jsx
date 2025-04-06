import React from 'react';
import { useState, useEffect } from 'react';
import { FiSearch, FiCalendar, FiAward, FiUsers, FiClock, FiMapPin, FiX, FiChevronLeft } from 'react-icons/fi';

function Hackathons() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'detail'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    skills: ''
  });

  // Categories for filtering
  const categories = [
    'Web Development',
    'AI/ML',
    'Blockchain',
    'Mobile',
    'Data Science',
    'Cybersecurity',
    'IoT',
    'Game Dev'
  ];

  // Simulate API fetch
  useEffect(() => {
    const fetchHackathons = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockHackathons = [
          // Past hackathon (before current date of June 4, 2025)
          {
            id: 1,
            title: 'Web3 Innovation Hackathon',
            organizer: 'ETHGlobal',
            date: '2025-03-15',
            deadline: '2025-03-10',
            prize: '$50,000',
            participants: 1200,
            status: 'past',
            registered: false,
            categories: ['Blockchain', 'Web Development'],
            location: 'Virtual',
            description: 'Build the next generation of decentralized applications on Ethereum and other blockchain platforms.',
            image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-02-01', completed: true },
              { name: 'Submission Deadline', date: '2025-03-10', completed: true },
              { name: 'Preliminary Judging', date: '2025-03-12', completed: true },
              { name: 'Final Presentations', date: '2025-03-15', completed: true },
              { name: 'Winner Announcement', date: '2025-03-16', completed: true }
            ],
            requirements: 'Individuals or teams of up to 4 members. Basic knowledge of blockchain concepts required.',
            prizes: [
              '1st Prize: $25,000 + mentorship',
              '2nd Prize: $15,000',
              '3rd Prize: $10,000'
            ]
          },
          // Current hackathon (registration open)
          {
            id: 2,
            title: 'AI & ML Challenge',
            organizer: 'DevPost',
            date: '2025-06-20',
            deadline: '2025-06-15',
            prize: '$75,000',
            participants: 2500,
            status: 'upcoming',
            registered: false,
            categories: ['AI/ML', 'Data Science'],
            location: 'Hybrid (San Francisco + Virtual)',
            description: 'Create innovative solutions using artificial intelligence and machine learning technologies.',
            image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=2232&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-04-01', completed: true },
              { name: 'Problem Statement Release', date: '2025-06-01', completed: false },
              { name: 'Submission Deadline', date: '2025-06-15', completed: false },
              { name: 'Final Judging', date: '2025-06-20', completed: false }
            ],
            requirements: 'Open to all skill levels. Teams of 1-3 members preferred.',
            prizes: [
              'Grand Prize: $50,000',
              '2nd Place: $15,000',
              '3rd Place: $10,000'
            ]
          },
          // Future hackathons (after current date of June 4, 2025)
          {
            id: 3,
            title: 'Global Hack Week',
            organizer: 'Major League Hacking',
            date: '2025-07-10',
            deadline: '2025-07-05',
            prize: '$30,000',
            participants: 5000,
            status: 'upcoming',
            registered: false,
            categories: ['Web Development', 'Mobile', 'Game Dev'],
            location: 'Worldwide',
            description: 'A week-long celebration of building, learning, and sharing with the global hacker community.',
            image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2942&auto=format&fit=crop',
            rounds: [
              { name: 'Registration Opens', date: '2025-05-01', completed: true },
              { name: 'Team Formation', date: '2025-06-15', completed: false },
              { name: 'Hacking Begins', date: '2025-07-05', completed: false },
              { name: 'Submissions Due', date: '2025-07-09', completed: false },
              { name: 'Winners Announced', date: '2025-07-10', completed: false }
            ],
            requirements: 'Open to students and professionals worldwide. Teams of 2-4 recommended.',
            prizes: [
              'Best Overall: $15,000',
              'Best Design: $5,000',
              'Best Technical Implementation: $5,000',
              'Community Choice: $5,000'
            ]
          },
          {
            id: 4,
            title: 'Cybersecurity Capture The Flag',
            organizer: 'HackerOne',
            date: '2025-08-15',
            deadline: '2025-08-10',
            prize: '$100,000',
            participants: 800,
            status: 'upcoming',
            registered: false,
            categories: ['Cybersecurity'],
            location: 'Virtual',
            description: 'Test your security skills in this intense CTF competition with challenges for all skill levels.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-06-01', completed: true },
              { name: 'Qualification Round', date: '2025-07-15', completed: false },
              { name: 'Semi-Finals', date: '2025-08-01', completed: false },
              { name: 'Final Competition', date: '2025-08-15', completed: false }
            ],
            requirements: 'Individual participants only. Basic cybersecurity knowledge required.',
            prizes: [
              '1st Place: $50,000',
              '2nd Place: $30,000',
              '3rd Place: $20,000'
            ]
          },
          {
            id: 5,
            title: 'Smart City IoT Hackathon',
            organizer: 'TechGiant Inc.',
            date: '2025-09-05',
            deadline: '2025-09-01',
            prize: '$60,000',
            participants: 900,
            status: 'upcoming',
            registered: false,
            categories: ['IoT', 'Data Science'],
            location: 'New York, USA',
            description: 'Develop IoT solutions to make cities smarter, safer, and more sustainable.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-07-01', completed: false },
              { name: 'Idea Submission', date: '2025-08-01', completed: false },
              { name: 'Prototype Development', date: '2025-08-15', completed: false },
              { name: 'Final Presentation', date: '2025-09-05', completed: false }
            ],
            requirements: 'Teams of 2-5 members. Hardware components will be provided.',
            prizes: [
              'Best IoT Solution: $30,000',
              'Most Innovative: $15,000',
              'Best Sustainability Impact: $15,000'
            ]
          },
          {
            id: 6,
            title: 'Healthcare Innovation Challenge',
            organizer: 'HealthTech Foundation',
            date: '2025-10-12',
            deadline: '2025-10-05',
            prize: '$85,000',
            participants: 1500,
            status: 'upcoming',
            registered: false,
            categories: ['HealthTech', 'AI/ML'],
            location: 'Boston, MA + Virtual',
            description: 'Develop solutions to improve healthcare delivery, patient outcomes, and medical research.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-08-01', completed: false },
              { name: 'Problem Statements Released', date: '2025-09-01', completed: false },
              { name: 'Midpoint Check-in', date: '2025-09-20', completed: false },
              { name: 'Final Submissions', date: '2025-10-05', completed: false },
              { name: 'Demo Day', date: '2025-10-12', completed: false }
            ],
            requirements: 'Open to healthcare professionals and technologists. HIPAA compliance knowledge helpful.',
            prizes: [
              'Best Clinical Solution: $40,000',
              'Best Patient-Facing App: $25,000',
              'Best Data Analytics Tool: $20,000'
            ]
          },
          {
            id: 7,
            title: 'FinTech Revolution Hackathon',
            organizer: 'Banking Consortium',
            date: '2025-11-08',
            deadline: '2025-11-01',
            prize: '$120,000',
            participants: 1800,
            status: 'upcoming',
            registered: false,
            categories: ['FinTech', 'Blockchain', 'Web Development'],
            location: 'London, UK',
            description: 'Reinvent banking and financial services with cutting-edge technology solutions.',
            image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2940&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-09-15', completed: false },
              { name: 'Online Qualifier', date: '2025-10-10', completed: false },
              { name: 'Semi-Finals', date: '2025-10-25', completed: false },
              { name: 'Final Event', date: '2025-11-08', completed: false }
            ],
            requirements: 'Teams of 3-5 members. Financial services knowledge beneficial but not required.',
            prizes: [
              'Grand Prize: $75,000',
              'Best Payment Solution: $25,000',
              'Best Blockchain Application: $20,000'
            ]
          },
          {
            id: 8,
            title: 'Climate Change Hackathon',
            organizer: 'Green Earth Initiative',
            date: '2025-12-05',
            deadline: '2025-11-28',
            prize: '$65,000',
            participants: 2000,
            status: 'upcoming',
            registered: false,
            categories: ['Sustainability', 'Data Science', 'IoT'],
            location: 'Virtual',
            description: 'Develop technology solutions to combat climate change and promote sustainability.',
            image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3113&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-10-01', completed: false },
              { name: 'Idea Submission', date: '2025-11-01', completed: false },
              { name: 'Mentorship Phase', date: '2025-11-15', completed: false },
              { name: 'Final Submissions', date: '2025-11-28', completed: false },
              { name: 'Winner Announcement', date: '2025-12-05', completed: false }
            ],
            requirements: 'Open to all. Solutions must address real environmental challenges.',
            prizes: [
              'Best Carbon Reduction Solution: $30,000',
              'Best Renewable Energy Innovation: $20,000',
              'Best Community Engagement Tool: $15,000'
            ]
          },
          {
            id: 9,
            title: 'EdTech Innovation Challenge',
            organizer: 'Global Education Network',
            date: '2026-01-15',
            deadline: '2026-01-08',
            prize: '$55,000',
            participants: 1200,
            status: 'upcoming',
            registered: false,
            categories: ['Education', 'Mobile', 'Web Development'],
            location: 'Virtual',
            description: 'Create technologies that transform how people learn and educators teach.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2025-11-15', completed: false },
              { name: 'Problem Statements Released', date: '2025-12-01', completed: false },
              { name: 'Prototype Submission', date: '2026-01-01', completed: false },
              { name: 'Final Presentations', date: '2026-01-15', completed: false }
            ],
            requirements: 'Individuals or teams. Focus on accessibility and scalability.',
            prizes: [
              'Best K-12 Solution: $25,000',
              'Best Higher Ed Solution: $15,000',
              'Best Lifelong Learning Tool: $15,000'
            ]
          },
          {
            id: 10,
            title: 'Space Tech Hackathon',
            organizer: 'NASA & Partners',
            date: '2026-02-20',
            deadline: '2026-02-12',
            prize: '$150,000',
            participants: 3000,
            status: 'upcoming',
            registered: false,
            categories: ['Space', 'AI/ML', 'Hardware'],
            location: 'Houston, TX + Virtual',
            description: 'Develop solutions for space exploration, satellite technology, and interplanetary challenges.',
            image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2960&auto=format&fit=crop',
            rounds: [
              { name: 'Registration Opens', date: '2025-12-01', completed: false },
              { name: 'Technical Briefing', date: '2026-01-15', completed: false },
              { name: 'Project Development', date: '2026-02-01', completed: false },
              { name: 'Final Submissions', date: '2026-02-12', completed: false },
              { name: 'Awards Ceremony', date: '2026-02-20', completed: false }
            ],
            requirements: 'Teams of 2-6 members. Space-related technical background preferred.',
            prizes: [
              'Best Overall: $75,000',
              'Best Earth Observation Solution: $35,000',
              'Best Deep Space Innovation: $40,000'
            ]
          },
          {
            id: 11,
            title: 'AR/VR Developer Challenge',
            organizer: 'Meta & Unity',
            date: '2026-03-10',
            deadline: '2026-03-03',
            prize: '$80,000',
            participants: 1800,
            status: 'upcoming',
            registered: false,
            categories: ['AR/VR', 'Game Dev', 'Mobile'],
            location: 'San Francisco, CA',
            description: 'Push the boundaries of augmented and virtual reality with innovative applications.',
            image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2952&auto=format&fit=crop',
            rounds: [
              { name: 'Registration', date: '2026-01-15', completed: false },
              { name: 'Development Kit Access', date: '2026-02-01', completed: false },
              { name: 'Progress Checkpoint', date: '2026-02-15', completed: false },
              { name: 'Final Submissions', date: '2026-03-03', completed: false },
              { name: 'Demo Day', date: '2026-03-10', completed: false }
            ],
            requirements: 'Experience with Unity or Unreal Engine recommended. Hardware provided for finalists.',
            prizes: [
              'Best AR Application: $35,000',
              'Best VR Experience: $35,000',
              'People\'s Choice: $10,000'
            ]
          },
          {
            id: 12,
            title: 'Global AI Hackathon',
            organizer: 'Google AI',
            date: '2026-04-15',
            deadline: '2026-04-08',
            prize: '$200,000',
            participants: 5000,
            status: 'upcoming',
            registered: false,
            categories: ['AI/ML', 'Data Science', 'Cloud'],
            location: 'Virtual',
            description: 'The world\'s largest AI competition with challenges across multiple domains and industries.',
            image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=2232&auto=format&fit=crop',
            rounds: [
              { name: 'Registration Opens', date: '2026-02-01', completed: false },
              { name: 'Challenge Announcement', date: '2026-03-01', completed: false },
              { name: 'Hacking Period', date: '2026-04-01', completed: false },
              { name: 'Submissions Due', date: '2026-04-08', completed: false },
              { name: 'Winners Announced', date: '2026-04-15', completed: false }
            ],
            requirements: 'Individuals or teams. Multiple tracks for different skill levels.',
            prizes: [
              'Grand Prize: $100,000',
              'Best Technical Implementation: $50,000',
              'Best Social Impact: $50,000'
            ]
          }
        ];
        setHackathons(mockHackathons);
        setLoading(false);
      }, 1000);
    };

    fetchHackathons();
  }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredHackathons = hackathons
    .filter(hackathon => {
      const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hackathon.organizer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDate = dateFilter === 'all' || hackathon.status === dateFilter;
      const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => hackathon.categories.includes(cat));
      return matchesSearch && matchesDate && matchesCategories;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === 'participants') {
        return b.participants - a.participants;
      } else if (sortBy === 'prize') {
        const prizeA = parseFloat(a.prize.replace(/[^0-9.]/g, ''));
        const prizeB = parseFloat(b.prize.replace(/[^0-9.]/g, ''));
        return prizeB - prizeA;
      }
      return 0;
    });

  const handleRegisterClick = (hackathon) => {
    setSelectedHackathon(hackathon);
    setShowRegistrationForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    setHackathons(hackathons.map(h => 
      h.id === selectedHackathon.id ? {...h, registered: true} : h
    ));
    setShowRegistrationForm(false);
    setFormData({
      name: '',
      email: '',
      teamName: '',
      skills: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleViewDetails = (hackathon) => {
    setSelectedHackathon(hackathon);
    setViewMode('detail');
  };

  const handleBackToList = () => {
    setViewMode('list');
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  // Calculate round status based on current date (2025-06-04)
  const calculateRoundStatus = (roundDate) => {
    const currentDate = new Date('2025-06-04');
    const roundDateObj = new Date(roundDate);
    
    if (roundDateObj < currentDate) return 'completed';
    if (roundDateObj.toDateString() === currentDate.toDateString()) return 'current';
    return 'upcoming';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Register for {selectedHackathon?.title}</h3>
                <button 
                  onClick={() => setShowRegistrationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Name (optional)</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills/Expertise</label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      rows={3}
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Submit Registration
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'list' ? (
        <>
          {/* Hero Section */}
          <div className="bg-indigo-700 rounded-xl p-8 mb-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your Next Hackathon</h1>
            <p className="text-xl mb-6">Join thousands of developers, designers, and innovators in competitions around the world</p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search hackathons by name, organizer, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                
                {/* Date Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FiCalendar className="mr-2" /> Status
                  </h4>
                  <div className="space-y-2">
                    {['all', 'upcoming', 'past'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setDateFilter(filter)}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          dateFilter === filter
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          selectedCategories.includes(category)
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Sort By */}
                <div>
                  <h4 className="font-medium mb-2">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="date">Date (Soonest First)</option>
                    <option value="participants">Most Participants</option>
                    <option value="prize">Highest Prize</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Hackathon List */}
            <div className="lg:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredHackathons.length} Hackathons Found
                </h2>
              </div>
              
              {filteredHackathons.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h3 className="text-lg font-medium mb-2">No hackathons match your filters</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid gap-6">
                  {filteredHackathons.map(hackathon => (
                    <div key={hackathon.id} className="bg-white rounded-lg shadow overflow-hidden">
                      {/* Hackathon Image */}
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img 
                          src={hackathon.image} 
                          alt={hackathon.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Hackathon Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                            <p className="text-gray-600 mb-3">{hackathon.organizer}</p>
                            
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {hackathon.categories.map(category => (
                                <span 
                                  key={category} 
                                  className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-700 mb-4 line-clamp-2">{hackathon.description}</p>
                          </div>
                          
                          {/* Status Badge */}
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            hackathon.status === 'upcoming' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}
                          </span>
                        </div>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center">
                            <FiCalendar className="text-gray-500 mr-2" />
                            <div>
                              <p className="text-xs text-gray-500">Date</p>
                              <p>{new Date(hackathon.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FiAward className="text-gray-500 mr-2" />
                            <div>
                              <p className="text-xs text-gray-500">Prize Pool</p>
                              <p>{hackathon.prize}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FiUsers className="text-gray-500 mr-2" />
                            <div>
                              <p className="text-xs text-gray-500">Participants</p>
                              <p>{hackathon.participants.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FiMapPin className="text-gray-500 mr-2" />
                            <div>
                              <p className="text-xs text-gray-500">Location</p>
                              <p>{hackathon.location}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleRegisterClick(hackathon)}
                            disabled={hackathon.registered || hackathon.status === 'past'}
                            className={`flex-1 py-3 rounded-md font-medium ${
                              hackathon.registered
                                ? 'bg-gray-100 text-gray-700'
                                : hackathon.status === 'past'
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
                            }`}
                          >
                            {hackathon.registered 
                              ? 'Registered' 
                              : hackathon.status === 'past'
                                ? 'Event Ended'
                                : 'Register Now'}
                          </button>
                          <button 
                            onClick={() => handleViewDetails(hackathon)}
                            className="flex-1 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50"
                          >
                            View Details
                          </button>
                        </div>
                        
                        {/* Deadline Notice */}
                        {hackathon.status === 'upcoming' && (
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <FiClock className="mr-2" />
                            <span>Registration closes on {new Date(hackathon.deadline).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        /* Hackathon Detail View */
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={handleBackToList}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <FiChevronLeft className="mr-1" /> Back to Hackathons
          </button>
          
          {/* Hackathon Header */}
          <div className="relative">
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img 
                src={selectedHackathon.image} 
                alt={selectedHackathon.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">{selectedHackathon.title}</h1>
              <p className="text-xl text-white opacity-90">{selectedHackathon.organizer}</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="lg:w-2/3">
                {/* About Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">About the Hackathon</h2>
                  <p className="text-gray-700 mb-4">{selectedHackathon.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium mb-1">Date</h3>
                      <p>{new Date(selectedHackathon.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p>{selectedHackathon.location}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Prize Pool</h3>
                      <p>{selectedHackathon.prize}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Participants</h3>
                      <p>{selectedHackathon.participants.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedHackathon.categories.map(category => (
                      <span 
                        key={category} 
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Requirements */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                  <p className="text-gray-700">{selectedHackathon.requirements}</p>
                </div>
                
                {/* Prizes */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Prizes</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedHackathon.prizes.map((prize, index) => (
                      <li key={index}>{prize}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Timeline */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                  <h2 className="text-2xl font-semibold mb-6">Hackathon Timeline</h2>
                  
                  <div className="space-y-6">
                    {selectedHackathon.rounds.map((round, index) => {
                      const status = calculateRoundStatus(round.date);
                      return (
                        <div key={index} className="relative pl-8">
                          <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            status === 'completed' ? 'bg-green-500' : 
                            status === 'current' ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}>
                            {status === 'completed' ? (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span className={`text-xs font-bold ${
                                status === 'current' ? 'text-white' : 'text-gray-600'
                              }`}>
                                {index + 1}
                              </span>
                            )}
                          </div>
                          
                          <div className={`border-l-2 ${
                            index === selectedHackathon.rounds.length - 1 ? 'border-transparent' : 
                            status === 'completed' ? 'border-green-500' : 'border-gray-300'
                          }`} style={{ marginLeft: '11px', marginTop: '-4px', paddingBottom: '2rem' }}>
                            <div className="ml-4">
                              <h3 className={`font-medium ${
                                status === 'current' ? 'text-indigo-600' : 'text-gray-900'
                              }`}>
                                {round.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {new Date(round.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                              {status === 'current' && (
                                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded bg-indigo-100 text-indigo-800">
                                  Current Phase
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Register Button */}
                  <div className="mt-8">
                    <button
                      onClick={() => handleRegisterClick(selectedHackathon)}
                      disabled={selectedHackathon.registered || selectedHackathon.status === 'past'}
                      className={`w-full py-3 rounded-md font-medium ${
                        selectedHackathon.registered
                          ? 'bg-gray-100 text-gray-700'
                          : selectedHackathon.status === 'past'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {selectedHackathon.registered 
                        ? 'Registered' 
                        : selectedHackathon.status === 'past'
                          ? 'Event Ended'
                          : 'Register Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hackathons;
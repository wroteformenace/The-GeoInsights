// Mock data for development - Replace with real API calls
export const mockInsights = [
  {
    id: 1,
    title: "Ukraine-Russia Tensions Update",
    description: "Current situation analysis",
    status: "critical",
    percentage: "85.3%",
    trend: "up",
    region: "Eastern Europe"
  },
  {
    id: 2,
    title: "US China Trade Dynamics", 
    description: "Economic relations and trade policy updates",
    status: "moderate",
    percentage: "67.2%",
    trend: "stable",
    region: "Global"
  },
  {
    id: 3,
    title: "Middle East Stability Index",
    description: "Regional security assessment and analysis",
    status: "warning", 
    percentage: "42.8%",
    trend: "down",
    region: "Middle East"
  },
  {
    id: 4,
    title: "Ukraine-Russia Tensions Update",
    description: "Current situation analysis",
    status: "critical",
    percentage: "85.3%",
    trend: "up",
    region: "Eastern Europe"
  },
  {
    id: 5,
    title: "US China Trade Dynamics", 
    description: "Economic relations and trade policy updates",
    status: "moderate",
    percentage: "67.2%",
    trend: "stable",
    region: "Global"
  },
  {
    id: 6,
    title: "Middle East Stability Index",
    description: "Regional security assessment and analysis",
    status: "warning", 
    percentage: "42.8%",
    trend: "down",
    region: "Middle East"
  }
];

export const mockNews = [
  {
    id: 1,
    category: "North America",
    title: "New Trade Agreement Negotiations Begin",
    excerpt: "Representatives from multiple nations gather to discuss expanded trade partnerships and economic cooperation frameworks.",
    time: "2 hours ago",
    author: "Sarah Mitchell"
  },
  {
    id: 2,
    category: "Europe", 
    title: "Energy Security Measures Implemented",
    excerpt: "European Union announces comprehensive energy diversification strategy to enhance regional energy independence.",
    time: "4 hours ago",
    author: "Thomas Anderson"
  },
  {
    id: 3,
    category: "Asia Pacific",
    title: "Regional Security Summit Concluded",
    excerpt: "Key stakeholders reach consensus on maritime security protocols and regional stability initiatives.",
    time: "6 hours ago", 
    author: "Chen Wei"
  }
];

export const mockVideos = [
  {
    id: 1,
    title: "Geopolitical Analysis: Current Global Tensions",
    presenter: "Dr. Sarah Johnson",
    duration: "24:15",
    views: "127K",
    category: "Analysis"
  },
  {
    id: 2,
    title: "Economic Impacts of Recent Policy Changes", 
    presenter: "Prof. Michael Chen",
    duration: "18:42",
    views: "89K",
    category: "Economics"
  },
  {
    id: 3,
    title: "Regional Security Briefing - Southeast Asia",
    presenter: "Ambassador Lisa Park",
    duration: "31:08", 
    views: "156K",
    category: "Security"
  }
];

export const mockBriefings = [
  {
    id: 1,
    title: "Quarterly Intelligence Review",
    description: "Comprehensive analysis of global political developments and emerging trends across all regions.",
    time: "Today, 3:00 PM",
    type: "Intelligence"
  },
  {
    id: 2,
    title: "Economic Sanctions Impact Assessment",
    description: "Detailed evaluation of current economic measures and their effects on international trade relationships.",
    time: "Tomorrow, 10:00 AM", 
    type: "Economics"
  },
  {
    id: 3,
    title: "Cyber Security Threat Analysis",
    description: "Latest developments in state-sponsored cyber activities and their geopolitical implications.",
    time: "Oct 7, 2:30 PM",
    type: "Security"
  }
];

export const worldMapData = {
  regions: [
    { name: "North America", tension: 45, color: "#10b981" },
    { name: "South America", tension: 32, color: "#3b82f6" },
    { name: "Europe", tension: 78, color: "#f59e0b" },
    { name: "Africa", tension: 56, color: "#8b5cf6" },
    { name: "Asia", tension: 82, color: "#ef4444" },
    { name: "Oceania", tension: 28, color: "#10b981" }
  ]
};
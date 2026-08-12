export const profile = {
  name: "Yogesh Kumawat",
  role: "MERN Stack Full Stack Developer",
  location: "Alwar / Jaipur, Rajasthan, India",
  email: "yogi2006kumar@gmail.com",
  phone: "9799857716",
  github: "https://github.com/yogesh286",
  linkedin: "https://www.linkedin.com/in/yogeshk12",
  resume: "/Yogesh_Kumawat_Resume.pdf",
  summary:
    "Full Stack Developer with hands-on experience building 3 production-shaped MERN applications — from schema design to payment integration. I ship complete, working systems: React interfaces, Express APIs, MongoDB data, and everything wired between them.",
};

export const layers = [
  { key: "M", full: "MongoDB", role: "Data", color: "#4FA94B", desc: "Schema design, Mongoose ODM, indexing" },
  { key: "E", full: "Express", role: "Server", color: "#B7B9C3", desc: "REST APIs, middleware, auth guards" },
  { key: "R", full: "React", role: "Interface", color: "#58C4DC", desc: "Component architecture, state, Tailwind" },
  { key: "N", full: "Node.js", role: "Runtime", color: "#83CD29", desc: "Async I/O, JWT, third-party integrations" },
];

export const skills = [
  {
    layer: "Frontend",
    color: "#58C4DC",
    items: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Design", "HTML5 / CSS3"],
  },
  {
    layer: "Backend",
    color: "#B7B9C3",
    items: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "Google OAuth"],
  },
  {
    layer: "Database",
    color: "#4FA94B",
    items: ["MongoDB", "Mongoose ODM", "Schema Design", "Aggregation"],
  },
  {
    layer: "Integrations",
    color: "#F2A65A",
    items: ["Razorpay Payments", "Gemini AI API", "Nodemailer", "Role-Based Access Control"],
  },
];

export const projects = [
  {
    title: "Brew Haven",
    tagline: "Poured with Intention",
    description:
      "Full-stack coffee shop platform with product catalog, cart, and order flow. 15+ REST APIs secured with JWT, Razorpay payments, and a responsive admin dashboard for managing products and orders.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    live: "https://coffee-shop-virid-tau.vercel.app/",
    github: "https://github.com/yogesh286",
    layers: ["R", "N", "E", "M"],
  },
  {
    title: "AI Doctor Booking",
    tagline: "Doctor Appointment Booking + AI Assistant",
    description:
      "Doctor discovery and appointment scheduling system with role-based access (patient / doctor / admin), slot double-booking prevention, Razorpay payments, and an AI-powered recommendation assistant.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "AI Assistant"],
    live: "https://ai-doctor-booking-seven.vercel.app/",
    github: "https://github.com/yogesh286",
    layers: ["R", "N", "E", "M"],
  },
  {
    title: "E-Commerce Platform",
    tagline: "Product Catalog & Order Processing",
    description:
      "Full-stack e-commerce app covering product management, shopping cart, and order processing. 10+ REST APIs with JWT authentication and integrated payment gateway.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Payments"],
    live: "https://frontend-ecommerse-alpha.vercel.app/",
    github: "https://github.com/yogesh286",
    layers: ["R", "N", "E", "M"],
  },
];

export const stats = [
  { value: "3", label: "Projects shipped" },
  { value: "30+", label: "REST APIs built" },
  { value: "100%", label: "MERN stack" },
  { value: "Dec '26", label: "Diploma completion" },
];

export const features = [
  { title: "Full-Stack Ownership", desc: "Frontend, API, and database, built and connected by one person." },
  { title: "Secure Auth & Payments", desc: "JWT, Google OAuth, and Razorpay integrated the right way." },
  { title: "Responsive Modern UI", desc: "React and Tailwind interfaces that hold up on any screen." },
  { title: "Real API Integrations", desc: "Third-party services like Gemini AI wired into working products." },
];

export const builtWith = ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT", "Razorpay", "Gemini AI"];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

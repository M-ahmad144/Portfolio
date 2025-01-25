import Project1 from "../../assets/images/lymora.png";
import Project2 from "../../assets/images/netflix.png";
import Project3 from "../../assets/images/crypto-1.jpg";
import Project4 from "../../assets/images/tour1.jpg";
import Project5 from "../../assets/images/lsp.png";
import Project6 from "../../assets/images/news.png";
import Project7 from "../../assets/images/todo.png";
import Project8 from "../../assets/images/react.png";
import Project9 from "../../assets/images/watherApp.jpg";
import Project10 from "../../assets/images/slider-1.jpg";
import Project11 from "../../assets/images/SET.png";
import Project12 from "../../assets/images/DS.png";

export const projectsData = [
  // MERN Projects (5)
  {
    id: 1,
    image: Project1,
    title: "Lymora E-Commerce Store",
    category: "MERN",
    description:
      "Lymora E-Commerce Store is a full-stack application providing a seamless shopping experience for users and a robust admin interface for managing products, orders, and users. It features secure user authentication, product management, payment integration with PayPal, and real-time data visualization for analytics. The application is designed for scalability, performance, and an intuitive user interface.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Chart.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Cloudinary",
      "PayPal API",
    ],
    github: "https://github.com/M-ahmad144/Lymora-Ecommerce-Store",
    demo: "https://lymora-ecommerce-store.vercel.app/",
  },

  {
    id: 2,
    image: Project2,
    title: "Netflix Clone",
    category: "MERN",
    description:
      "A feature-rich clone of the Netflix platform, offering user authentication, filterable movie search based on categories, and a responsive user interface. The application integrates the TMDB API for fetching dynamic movie data and includes a responsive, modern user interface built with Tailwind CSS. Key features include a user dashboard, movie search, and dynamic categorization. Built for scalability and performance, this project replicates the core functionality of Netflix with a clean and interactive design.",
    technologies: [
      "Firebase",
      "Express.js",
      "React.js",
      "Node.js",
      "TMDB API",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    github: "https://github.com/M-ahmad144/Netflix-clone",
    demo: "https://netflix-clone-ruddy-sigma.vercel.app",
  },

  {
    id: 3,
    image: Project3,
    title: "CryptoBuzz - Cryptocurrency Screener",
    category: "MERN",
    description:
      "CryptoBuzz is a modern cryptocurrency screener application built with React.js and Tailwind CSS. It features real-time data updates and advanced filtering options for cryptocurrencies. The application leverages the CoinGecko API to fetch dynamic market data and provides an intuitive user interface for tracking price trends and market performance. The app is hosted on Vercel, ensuring high availability and fast performance.",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "CoinGecko API"],
    github:
      "https://github.com/M-ahmad144/CryptoBuzz-A-crypto-screener-application",
    demo: "cryptobuzz-liart.vercel.app",
  },

  {
    id: 4,
    image: Project4,
    title: "Natourist",
    category: "MERN",
    description:
      "Natourist is a modern and user-friendly tour booking application designed to simplify travel planning. It features secure user authentication, seamless payment integration, and interactive maps for exploring destinations. Built using Node.js, Express.js, React.js, and MongoDB, the app ensures a smooth and efficient user experience. Additional features include real-time data visualization with Chart.js and responsive design for accessibility across devices.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
    github: "https://github.com/M-ahmad144/Natourist-TourApp",
    demo: "https://natourist.vercel.app",
  },

  {
    id: 5,
    image: Project5,
    title: "LSP - Local Services Provider",
    category: "MERN",
    description:
      "LSP is a freelance platform connecting clients with local service providers, including carpenters, plumbers, and more. The platform empowers local workers by offering opportunities to showcase their skills while providing clients with reliable service options. Key features include dual registration for clients and freelancers, real-time chat powered by Socket.io, secure payment integration with Stripe, and an intuitive admin dashboard for managing orders, users, and platform activities. Built with the MERN stack, LSP ensures scalability, efficiency, and a user-friendly experience.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Stripe",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/M-ahmad144/Local-Services-Provider",
    demo: "myneighbourly.vercel.app",
  },

  // React Projects (3)
  {
    id: 6,
    image: Project6,
    title: "News App",
    category: "React.js",
    description:
      "A responsive news application that delivers real-time updates and allows users to filter articles by category. Built with React and the News API, it offers a seamless experience for staying informed across various topics.",
    technologies: ["React.js", "Context API", "News API", "CSS"],
    github: "https://github.com/M-ahmad144/NewsApp",
  },

  {
    id: 7,
    image: Project7,
    title: "TODO App",
    category: "React.js",
    description:
      "A full-stack to-do application for task management, featuring user authentication, task categorization, and a clean, intuitive interface. Built using the MERN stack, it includes Redux for state management and Tailwind CSS for styling.",
    technologies: ["React.js", "Redux", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/M-ahmad144/Todo___MERN",
  },

  {
    id: 8,
    image: Project8,
    title: "React Project Collection",
    category: "React.js",
    description:
      "A collection of React projects designed to demonstrate various concepts and features of the framework. These projects, found in the '25-reactjs-interview-projects' folder, cover a range of real-world scenarios and are perfect for interview preparation and learning React development.",
    technologies: ["React.js"],
    github:
      "https://github.com/M-ahmad144/React/tree/main/25-reactjs-interview-projects",
  },

  // HTML/CSS/JS Projects (5)
  {
    id: 9,
    image: Project9,
    title: "Weather App",
    category: "HTML CSS JS",
    description:
      "A responsive weather application that provides real-time forecasts and weather details based on the user's location. Built with HTML5, CSS3, and JavaScript",
    technologies: ["HTML5", "CSS3", "JavaScript", "ScrollMagic"],
    github: "https://github.com/M-ahmad144/html-css-js/tree/main/Weather%20APP",
  },

  {
    id: 10,
    image: Project10,
    title: "Carousel",
    category: "HTML CSS JS",
    description:
      "A customizable and interactive image carousel built with HTML5, CSS3, and JavaScript. This project features smooth transitions, touch and click support, and dynamic content loading for an enhanced user experience. It utilizes ScrollMagic for adding engaging animations as users interact with the carousel.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github:
      "https://github.com/M-ahmad144/html-css-js/tree/main/Carousel%20Slider",
  },

  // AI/Data Science Projects (2)
  {
    id: 11,
    image: Project11,
    title: "Student Engagement Tracker System",
    category: "AI/Data Science",
    description:
      "A machine learning model designed to track and classify student engagement through facial expressions and behavioral cues. Utilizing an optimized Convolutional Neural Network (CNN) architecture, the system ensures efficient and accurate image classification even in resource-constrained environments. The dashboard provides a comprehensive overview of student engagement, displaying key metrics and trends through interactive charts for real-time monitoring and analysis.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "CNN",
      "TensorFlow",
      "OpenCV",
    ],
    github:
      "https://github.com/M-ahmad144/student-engagement-tracking-ml-model",
  },

  {
    id: 12,
    image: Project12,
    title: "Movie Success Prediction Model",
    category: "AI/Data Science",
    description:
      "A machine learning model designed to predict the success of movies based on various factors such as budget, genre, cast, and marketing efforts. The model uses regression techniques to analyze historical movie data and generate predictions for box office performance. By leveraging data science libraries like Pandas and Matplotlib, the model provides actionable insights for movie studios and producers.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    github: "https://github.com/M-ahmad144/movie-success-prediction-model",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "MERN" },
  { name: "React.js" },
  { name: "HTML CSS JS" },
  { name: "AI/Data Science" },
];

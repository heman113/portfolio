import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    linkedin,
    amazon,
    freshhub,
    interra
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Angular Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Trainee",
      company_name: "Interra IT",
      icon: interra,
      iconBg: "#383E56",
      date: "January 2022 - July 2022",
      points: [
        "Learned front-end development using Angular and working with senior developers.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Building an E-commerce web application using Angular and Firebase.",
        "Participating in code reviews and getting feedback from other developers.",
      ],
    },
    {
      title: "Member of Technical Staff",
      company_name: "Interra IT",
      icon: interra,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Developing and maintaining web applications using Angular, Node JS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Writing integration test cases using Jest for a web application",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Linked-in CLone",
      description:
        "A clone of a social media app where you can browse through feeds, post or share pictures.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: linkedin,
      source_code_link: "https://github.com/heman113/linkedin-clone",
    },
    {
      name: "Freshhub",
      description:
        "An E-commerce web application to buy groceries. You can browse through various products, filter them out basedon categories, add them to your cart and checkout.",
      tags: [
        {
          name: "angular",
          color: "red-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: freshhub,
      source_code_link: "https://github.com/heman113/Freshhub",
    },
    {
      name: "Amazon Clone",
      description:
        "A clone of a very famous E-commerce web application Amazon. Implemented with react with a clean UI and features like login, signup and shopping cart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/heman113/amazon-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
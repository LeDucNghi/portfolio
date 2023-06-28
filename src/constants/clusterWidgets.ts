import { Images } from "./images";

export const socialButton = [
  {
    id: 1,
    ref: "https://www.linkedin.com/in/ngh%E1%BB%8B-%C4%91%E1%BB%A9c-85a19b254/",
    image: Images.linkedin,
  },
  {
    id: 2,
    ref: "https://github.com/LeDucNghi",
    image: Images.github,
  },
  {
    id: 3,
    ref: "https://www.facebook.com/nghile.genji/",
    image: Images.facebook,
  },
];

export const headerNavLinks = [
  {
    id: 1,
    name: "home",
    ref: "",
  },
  {
    id: 2,
    name: "about",
    ref: "#about",
  },
  {
    id: 3,
    name: "projects",
    ref: "#projects",
  },
  {
    id: 4,
    name: "contact",
    ref: "#contact",
  },
];

export const skills = [
  {
    id: 1,
    tech: "HTML",
    logo: Images.html,
    bgColor: "#f06529",
  },
  {
    id: 2,
    tech: "CSS",
    logo: Images.css,
    bgColor: "#2965f1",
  },
  {
    id: 3,
    tech: "SASS",
    logo: Images.sass,
    bgColor: "#cc6699",
  },
  {
    id: 4,
    tech: "JavaScript",
    logo: Images.js,
    bgColor: "#f0db4f",
  },
  {
    id: 5,
    tech: "TypeScript",
    logo: Images.typescript,
    bgColor: "#007acc",
  },
  {
    id: 6,
    tech: "ReactJS",
    logo: Images.react,
    bgColor: "#61dafb",
  },

  {
    id: 7,
    tech: "ExpressJS",
    logo: Images.nodejs,
    bgColor: "#68a063",
  },
  {
    id: 8,
    tech: "ReduxJS",
    logo: Images.redux,
    bgColor: "#764abc",
  },
  {
    id: 9,
    tech: "Redux-toolkit",
    logo: Images.redux,
    bgColor: "#764abc",
  },
  {
    id: 10,
    tech: "Redux-thunk",
    logo: Images.redux,
    bgColor: "#764abc",
  },

  {
    id: 11,
    tech: "Material UI",
    logo: Images.muiLogo,
    bgColor: "#007fff",
  },

  {
    id: 12,
    tech: "MYSQL",
    logo: Images.mysql,
    bgColor: "#00758f",
  },

  {
    id: 13,
    tech: "Figma",
    logo: Images.figma,
    bgColor: "#0cb47c",
  },

  {
    id: 14,
    tech: "Responsive Design",
    logo: Images.tablet,
    bgColor: "#72b4ed",
  },
];

export const projects = [
  {
    id: 1,
    thumbnail: Images.katenblogThumbnail,
    title: "Katen Blog",
    description:
      "This website project is a website that is designed to host and display blog posts. These posts can be written by the website owner or by guest authors, and they typically cover a wide range of topics. The website may also include features such as commenting, social media sharing, and categorization of posts.",
    techs: [
      {
        id: 1,
        tech: "HTML",
        logo: Images.html,
        bgColor: "#f06529",
      },
      {
        id: 2,
        tech: "SCSS",
        logo: Images.sass,
        bgColor: "#2965f1",
      },
      {
        id: 3,
        tech: "ExpressJS",
        logo: Images.nodejs,
        bgColor: "#68a063",
      },

      {
        id: 5,
        tech: "Redux-toolkit",
        logo: Images.redux,
        bgColor: "#764abc",
      },
      {
        id: 6,
        tech: "Redux-thunk",
        logo: Images.redux,
        bgColor: "#764abc",
      },
      {
        id: 7,
        tech: "TypeScript",
        logo: Images.typescript,
        bgColor: "#007acc",
      },

      {
        id: 8,
        tech: "MYSQL",
        logo: Images.mysql,
        bgColor: "#007acc",
      },
    ],
    githubLink: "https://github.com/LeDucNghi/KatenBlog",
    demoLink: "https://katen-blog.vercel.app/",
  },
  {
    id: 2,
    thumbnail: Images.pvfoodThumbnail,
    title: "PV Store",
    description:
      "This website application is for selling cakes. It allows user order, follow, review and check for order status. And manager can add, edit cakes, manage customers, manage orders, analysis revenues, warning users.",
    techs: [
      {
        id: 1,
        tech: "HTML",
        logo: Images.html,
        bgColor: "#f06529",
      },
      {
        id: 2,
        tech: "CSS",
        logo: Images.css,
        bgColor: "#2965f1",
      },
      {
        id: 3,
        tech: "JavaScript",
        logo: Images.js,
        bgColor: "#f0db4f",
      },
      {
        id: 4,
        tech: "ReactJS",
        logo: Images.react,
        bgColor: "#61dafb",
      },

      {
        id: 6,
        tech: "Redux-toolkit",
        logo: Images.redux,
        bgColor: "#764abc",
      },
      {
        id: 7,
        tech: "Redux-thunk",
        logo: Images.redux,
        bgColor: "#764abc",
      },
    ],
    githubLink: "https://github.com/LeDucNghi/PVStore",
    demoLink: "https://pvstore.vercel.app/home",
  },
];

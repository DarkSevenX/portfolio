import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { de, en } from "zod/v4/locales";

export const DATA = {
  name: "Nelson Argumedo",
  initials: "NA",
  url: "https://nelsonargumedo.netlify.app/",
  location: "Montería, Colombia",
  locationLink: "https://www.google.com/maps/place/Monter%C3%ADa,+C%C3%B3rdoba,+Colombia",
  description:
    "Ingeniero de software convertido en emprendedor. Me encanta crear cosas y ayudar a la gente.",
  summary:
    "Tengo 22, soy un estudiante de Ingeniería de Software, apasionado por la programación y la tecnología. Me gusta aprender de forma autodidacta y pasar el tiempo haciendo proyectos interesantes y retadores.",
  avatarUrl: "https://github.com/DarkSevenX.png",
  skills: [
    // Languages
    { name: "JavaScript", icon: (props: any) => <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" {...props} /> },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "Go", icon: Golang },
    { name: "Bash", icon: (props: any) => <img src="https://cdn.simpleicons.org/gnubash" alt="Bash" {...props} /> },

    // Frontend & UI
    { name: "HTML5", icon: (props: any) => <img src="https://cdn.simpleicons.org/html5" alt="HTML5" {...props} /> },
    { name: "CSS3", icon: (props: any) => <img src="https://cdn.simpleicons.org/css" alt="CSS3" {...props} /> },
    { name: "SASS", icon: (props: any) => <img src="https://cdn.simpleicons.org/sass" alt="SASS" {...props} /> },
    { name: "TailwindCSS", icon: (props: any) => <img src="https://cdn.simpleicons.org/tailwindcss" alt="TailwindCSS" {...props} /> },
    { name: "React", icon: ReactLight },
    { name: "Angular", icon: (props: any) => <img src="https://cdn.simpleicons.org/angular/red" alt="Angular" {...props} /> },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vite", icon: (props: any) => <img src="https://cdn.simpleicons.org/vite" alt="Vite" {...props} /> },
    { name: "Electron", icon: (props: any) => <img src="https://cdn.simpleicons.org/electron" alt="Electron" {...props} /> },

    // Backend
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: (props: any) => <img src="https://cdn.simpleicons.org/express/green" alt="Express" {...props} /> },
    { name: "NestJS", icon: (props: any) => <img src="https://cdn.simpleicons.org/nestjs" alt="NestJS" {...props} /> },
    { name: "Spring", icon: (props: any) => <img src="https://cdn.simpleicons.org/spring" alt="Spring" {...props} /> },
    { name: "FastAPI", icon: (props: any) => <img src="https://cdn.simpleicons.org/fastapi" alt="FastAPI" {...props} /> },

    // Databases
    { name: "SQL", icon: (props: any) => <img src="https://cdn.simpleicons.org/mysql" alt="SQL" {...props} /> },
    { name: "Postgres", icon: Postgresql },
    { name: "SQLite", icon: (props: any) => <img src="https://cdn.simpleicons.org/sqlite" alt="SQLite" {...props} /> },
    { name: "LibSQL", icon: (props: any) => <img src="https://cdn.simpleicons.org/turso" alt="LibSQL" {...props} /> },
    { name: "MongoDB", icon: (props: any) => <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" {...props} /> },
    { name: "Redis", icon: (props: any) => <img src="https://cdn.simpleicons.org/redis" alt="Redis" {...props} /> },

    // ORMs & Tools
    { name: "Prisma", icon: (props: any) => <img src="https://cdn.simpleicons.org/prisma" alt="Prisma" {...props} /> },
    { name: "TypeORM", icon: (props: any) => <img src="https://cdn.simpleicons.org/typeorm" alt="TypeORM" {...props} /> },
    { name: "SQLAlchemy", icon: (props: any) => <img src="https://cdn.simpleicons.org/sqlalchemy" alt="SQLAlchemy" {...props} /> },

    // APIs & Others
    { name: "REST API", icon: (props: any) => <img src="https://cdn.simpleicons.org/openapiinitiative" alt="REST" {...props} /> },
    { name: "GraphQL", icon: (props: any) => <img src="https://cdn.simpleicons.org/graphql" alt="GraphQL" {...props} /> },
    { name: "JWT", icon: (props: any) => <img src="https://cdn.simpleicons.org/jsonwebtokens/white" alt="JWT" {...props} /> },
    { name: "Zod", icon: (props: any) => <img src="https://cdn.simpleicons.org/zod" alt="Zod" {...props} /> },

    // DevOps & Testing
    { name: "Git", icon: (props: any) => <img src="https://cdn.simpleicons.org/git" alt="Git" {...props} /> },
    { name: "GitHub", icon: (props: any) => <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" {...props} /> },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "SuperTest", icon: (props: any) => <img src="https://cdn.simpleicons.org/jest" alt="SuperTest" {...props} /> },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DarkSevenX",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nelson-argumedo-ramos-ba200a323/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "nelsonargumedoramos182@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "SISSGO",
      href: "",
      badges: [],
      location: "Montería",
      title: "Frontend Angular Developer",
      logoUrl: "/logo de sissgo.png",
      start: "Oct 2025",
      end: "Julio 2026",
      description:
        "Participé en el desarrollo del producto principal de la empresa: un sistema de gestión hospitalario integral. Implementé formularios dinámicos y componentes reutilizables utilizando Angular. Desarrollé y mejoré funcionalidades específicas del sistema según los requerimientos asignados. Trabajé bajo lineamientos del equipo de desarrollo, siguiendo buenas prácticas de frontend y control de versiones.",
    },
    {
      company: "MaderexTK",
      href: "",
      badges: [],
      location: "Montería",
      title: "Fullstack web Junior developer",
      logoUrl: "/logo-maderex.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Desarrollé la landing page y e-commerce para Maderex, mejorando la experiencia de usuario. Implementé soluciones técnicas eficientes, integrando tecnologías front-end y back-end. Colaboré en la optimización del rendimiento del sitio web, aumentando la velocidad de carga. Realicé pruebas de funcionalidad y usabilidad, asegurando una experiencia fluida.",
    },
    {
      company: "DevsCorp",
      href: "",
      badges: [],
      location: "Montería",
      title: "Frontend React developer",
      logoUrl: "/185019248.jpg",
      start: "Oct 2024",
      end: "Abril 2025",
      description:
        "Implementé soluciones frontend innovadoras, mejorando la experiencia del usuario en DevsCorp un 50%. Trabajé en estrecha colaboración con los equipos de diseño y backend para garantizar una integración fluida. Optimicé el rendimiento y la capacidad de respuesta de las aplicaciones mediante prácticas de codificación eficaces.",
    },
  ],
  education: [
    {
      school: "Universidad De Cartagena",
      href: "https://www.unicartagena.edu.co/",
      degree: "Ing Software",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCETihQny13oepi8-Niz7cnSfAX2NsGYhCH43yUrWKHfImz6N8xaw2YV4&s=10",
      start: "Sep 2022",
      end: "Presente",
    },
    {
      school: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "Online Javascript y Estructuras de datos",
      logoUrl: "https://avatars.githubusercontent.com/u/9892522?v=4",
      start: "Feb 2024",
      end: "Oct 2024",
    },
    {
      school: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "Online Desarrollo Backend y APIs",
      logoUrl: "https://avatars.githubusercontent.com/u/9892522?v=4",
      start: "May 2024",
      end: "Oct 2024",
    },
    {
      school: "Alura Latam",
      href: "https://www.aluracursos.com/",
      degree: "Online Git & Github",
      logoUrl: "https://avatars.githubusercontent.com/u/64977466?s=280&v=4",
      start: "Jul 2024",
      end: "Jul 2024",
    },
  ],
  projects: [
    {
      title: "Boo Money",
      href: "https://boo-money.vercel.app/",
      dates: "Abril 2025",
      active: true,
      description:
        "Boo Money es una plataforma gratuita que permite a los usuarios gestionar sus finanzas personales.",
      technologies: [
        "Next.js",
        "Typescript",
        "Turso",
        "LibSQL",
        "DrizzleORM",
        "TailwindCSS",
        "Radix UI",
        'Shadcn UI'
      ],
      links: [
        {
          type: "Website",
          href: "https://boo-money.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/boo-money.png",
      video: "",
    },
    {
      title: "CommitNotes",
      href: "https://commitnotes.netlify.app/",
      dates: "Junio 2025",
      active: true,
      description:
        "Convierte automáticamente los commits técnicos en actualizaciones de producto legibles para los usuarios.Deja de perder tiempo redactando manualmente las novedades.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://commitnotes.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/commitnotes.png",
      video: "",
    },
    {
      title: "Megara",
      href: "https://megarahabits.netlify.app",
      dates: "Marzo 2026",
      active: true,
      description:
        "Construye hábitos consistentes con la técnica Pomodoro, lleva seguimiento de tu progreso y alcanza tus metas personales.",
      technologies: [
        "Next.js",
        "Typescript",
        "localhost",
        "TailwindCSS",
        "ChakraUI"
      ],
      links: [
        {
          type: "Website",
          href: "https://megarahabits.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DarkSevenX/habit-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/megara.png",
      video: "",
    },
    {
      title: "Rick and morty explorer",
      href: "https://rm-explorer.netlify.app/",
      dates: "Abril 2025",
      active: true,
      description:
        "Aplicación que consume la API de Rick and Morty permitiendo explorar personajes, locaciones y episodios de la serie.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Axios",
        "Rest"
      ],
      links: [
        {
          type: "Website",
          href: "https://rm-explorer.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rick-morty.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
  hackathons: [] as any[],
} as const;

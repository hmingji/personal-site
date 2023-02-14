export interface Project {
  title: string;
  description: string;
  tags: string[];
  appUrl: string;
  sourceUrl: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: 'To-Do App',
    description:
      'A complete full-stack to-do app built using react and asp.net core, deployed using docker. Added email notification feature to notify user about upcoming task.',
    tags: [
      'React',
      'Typescript',
      'ASP.NET Core',
      'Redux-Toolkit',
      'Axios',
      'React Hook Form',
      'MUI',
      'IdentityServer4',
      'Docker',
      'Postgres',
      'RabbitMQ',
      'MassTransit',
      'Mailjet',
    ],
    appUrl: 'http://todoapp-jtc5.onrender.com/',
    sourceUrl: 'https://github.com/hmingji/ToDoApp',
    imageUrl: '/images/project-image-todoapp.png',
  },
  {
    title: 'Music Visualizer',
    description:
      'A pure javascript application to display audio spectrum, lyrics and playtime on html canvas.',
    tags: ['Javascript', 'CSS', 'HTML Canvas'],
    appUrl: 'https://music-visualizer-gamma.vercel.app/',
    sourceUrl: 'https://github.com/hmingji/MusicVisualizer',
    imageUrl: '/images/project-image-musicvisual.png',
  },
  {
    title: 'Personal Site',
    description:
      'My personal site to showcase the projects I have been working on.',
    tags: ['React', 'Typescript', 'Tailwind CSS', 'daisyUI'],
    appUrl: 'https://hmingji.com/',
    sourceUrl: 'https://github.com/hmingji/personal-site',
    imageUrl: '/images/project-image-personalsite.png',
  },
  {
    title: 'whatToWatch(movies);',
    description:
      'A movie catalog site where user could find latest movie information, powered by tmdb api.',
    tags: [
      'React',
      'Typescript',
      'Tailwind CSS',
      'daisyUI',
      'React-Query',
      'Redux-Toolkit',
      'Axios',
    ],
    appUrl: 'https://what-to-watch-rosy.vercel.app/',
    sourceUrl: 'https://github.com/hmingji/whatToWatch',
    imageUrl: '/images/project-image-whatToWatch.png',
  },
  {
    title: 'Maze Escaped',
    description:
      'Multiplayer io game: players have to find the flag in maze to win.',
    tags: ['HTML5 Canvas', 'Socket-io', 'Express', 'Typescript'],
    appUrl: 'https://maze-escaped.onrender.com/',
    sourceUrl: 'https://github.com/hmingji/Maze-Escaped',
    imageUrl: '/images/project-image-mazeescaped.png',
  },
  {
    title: 'Blood Donation Trend',
    description:
      'An interactive visualization of blood donation trend in Malaysia.',
    tags: [
      'Nextjs',
      'ASP.NET Core',
      'react-chartjs-2',
      'Headless UI',
      'Postgres',
    ],
    appUrl: 'https://blood-donation-trend.vercel.app/',
    sourceUrl: 'https://github.com/hmingji/DataViz',
    imageUrl: '/images/project-image-blooddonation.png',
  },
];

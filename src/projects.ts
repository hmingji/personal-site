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
      'A complete full-stack to-do app built using react and asp.net, deployed using docker.',
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
    ],
    appUrl: 'http://demo-todo-apps-client.herokuapp.com/',
    sourceUrl: 'https://github.com/hmingji/ToDoApp',
    imageUrl: '/images/project-image-todoapp.png',
  },
  {
    title: 'Music Visualizer',
    description:
      'A pure javascript application to display audio spectrum, lyrics and playtime on html canvas.',
    tags: ['Javascript', 'CSS', 'HTML Canvas'],
    appUrl: 'https://music-visual.herokuapp.com/',
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
];

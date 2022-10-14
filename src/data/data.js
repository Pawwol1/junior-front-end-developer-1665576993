import blue_arrow from '../assets/blue_arrow.svg';
import green_tick from '../assets/green_tick.svg';
import grey_lock from '../assets/grey_lock.svg';
import user1 from '../assets/user1.svg';
import user2 from '../assets/user1.svg';

export const sidebarIcons = [
  {
    url: `${blue_arrow}`,
    status: 'active',
  },
  {
    url: `${green_tick}`,
    status: 'completed',
  },
  {
    url: `${grey_lock}`,
    status: 'blocked',
  },
];

const data = [
  {
    title: 'Application Setup',
    status: 'completed',
    businessContext: [
      {
        status: 'unread',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'active',
        title: 'Application has been accepted  🎉  🙌',
        content:
          'Mauris fermentum ante mauris, in consectetur est viverra pharetra. Etiam odio mauris, malesuada quis ullamcorper nec, efficitur vel libero. Integer eu finibus neque. Proin porta massa eu metus ultricies, id posuere felis rhoncus. Praesent semper maximus nunc nec aliquam. Nulla vel sem ex. Vivamus ipsum ligula, tempor tempus congue nec, finibus et lorem. Nam sed diam mattis, rutrum enim ut, malesuada lorem. Fusce iaculis gravida risus id tempor. Phasellus tincidunt ultricies pretium. Sed sit amet ante sed lorem ultrices blandit. In ut turpis turpis. Phasellus rhoncus ac justo non rhoncus. Etiam sodales purus id lobortis suscipit. ',
        author: { name: 'Kirsten Aniston', img: user1 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'read',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
    ],
  },
  {
    title: 'Static Books List',
    status: 'completed',
    businessContext: [
      {
        status: 'unread',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'active',
        title: 'Application has been accepted  🎉  🙌',
        content:
          'Mauris fermentum ante mauris, in consectetur est viverra pharetra. Etiam odio mauris, malesuada quis ullamcorper nec, efficitur vel libero. Integer eu finibus neque. Proin porta massa eu metus ultricies, id posuere felis rhoncus. Praesent semper maximus nunc nec aliquam. Nulla vel sem ex. Vivamus ipsum ligula, tempor tempus congue nec, finibus et lorem. Nam sed diam mattis, rutrum enim ut, malesuada lorem. Fusce iaculis gravida risus id tempor. Phasellus tincidunt ultricies pretium. Sed sit amet ante sed lorem ultrices blandit. In ut turpis turpis. Phasellus rhoncus ac justo non rhoncus. Etiam sodales purus id lobortis suscipit. ',
        author: { name: 'Kirsten Aniston', img: user1 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'read',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
    ],
  },
  {
    title: 'Administration Panel',
    status: 'completed',
    businessContext: [
      {
        status: 'unread',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'active',
        title: 'Application has been accepted  🎉  🙌',
        content:
          'Mauris fermentum ante mauris, in consectetur est viverra pharetra. Etiam odio mauris, malesuada quis ullamcorper nec, efficitur vel libero. Integer eu finibus neque. Proin porta massa eu metus ultricies, id posuere felis rhoncus. Praesent semper maximus nunc nec aliquam. Nulla vel sem ex. Vivamus ipsum ligula, tempor tempus congue nec, finibus et lorem. Nam sed diam mattis, rutrum enim ut, malesuada lorem. Fusce iaculis gravida risus id tempor. Phasellus tincidunt ultricies pretium. Sed sit amet ante sed lorem ultrices blandit. In ut turpis turpis. Phasellus rhoncus ac justo non rhoncus. Etiam sodales purus id lobortis suscipit. ',
        author: { name: 'Kirsten Aniston', img: user1 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'read',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
    ],
  },
  {
    title: 'Connect Admin with Frontend',
    status: 'active',
    businessContext: [
      {
        status: 'unread',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'active',
        title: 'Application has been accepted  🎉  🙌',
        content:
          'Mauris fermentum ante mauris, in consectetur est viverra pharetra. Etiam odio mauris, malesuada quis ullamcorper nec, efficitur vel libero. Integer eu finibus neque. Proin porta massa eu metus ultricies, id posuere felis rhoncus. Praesent semper maximus nunc nec aliquam. Nulla vel sem ex. Vivamus ipsum ligula, tempor tempus congue nec, finibus et lorem. Nam sed diam mattis, rutrum enim ut, malesuada lorem. Fusce iaculis gravida risus id tempor. Phasellus tincidunt ultricies pretium. Sed sit amet ante sed lorem ultrices blandit. In ut turpis turpis. Phasellus rhoncus ac justo non rhoncus. Etiam sodales purus id lobortis suscipit. ',
        author: { name: 'Kirsten Aniston', img: user1 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'read',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
    ],
  },
  {
    title: 'Book Review Feature',
    status: 'blocked',
    businessContext: [
      {
        status: 'unread',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'active',
        title: 'Application has been accepted  🎉  🙌',
        content:
          'Mauris fermentum ante mauris, in consectetur est viverra pharetra. Etiam odio mauris, malesuada quis ullamcorper nec, efficitur vel libero. Integer eu finibus neque. Proin porta massa eu metus ultricies, id posuere felis rhoncus. Praesent semper maximus nunc nec aliquam. Nulla vel sem ex. Vivamus ipsum ligula, tempor tempus congue nec, finibus et lorem. Nam sed diam mattis, rutrum enim ut, malesuada lorem. Fusce iaculis gravida risus id tempor. Phasellus tincidunt ultricies pretium. Sed sit amet ante sed lorem ultrices blandit. In ut turpis turpis. Phasellus rhoncus ac justo non rhoncus. Etiam sodales purus id lobortis suscipit. ',
        author: { name: 'Kirsten Aniston', img: user1 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
      {
        status: 'read',
        title: 'New sprint, tasks and intro information',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa non mauris dignissim interdum. Donec in leo mi. Donec sit amet tellus vitae lectus congue iaculis. Mauris tincidunt auctor mi sit amet pulvinar. Integer et orci vel dolor porttitor viverra ut nec lorem. Vivamus interdum nulla eget aliquet sollicitudin. Aenean tellus libero, scelerisque eu sodales nec, finibus at nulla. Quisque ut nibh vestibulum, dapibus ante vitae, eleifend nunc. Cras euismod ante vel dolor sollicitudin maximus. ',
        author: { name: 'Olga Nelson', img: user2 },
        created_at: { date: '12/17/2021', fullDate: '17th December 2021' },
      },
    ],
  },
];

export default data;

import blue_arrow from '../../assets/blue_arrow.svg';
import green_tick from '../../assets/green_tick.svg';
import grey_lock from '../../assets/grey_lock.svg';

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

const sidebarData = [
  {
    title: 'Application Setup',
    status: 'completed',
    businessContext: [],
  },
  {
    title: 'Static Books List',
    status: 'completed',
    businessContext: [],
  },
  {
    title: 'Administration Panel',
    status: 'completed',
    businessContext: [],
  },
  {
    title: 'Connect Admin with Frontend',
    status: 'active',
    businessContext: [],
  },
  {
    title: 'Book Review Feature',
    status: 'blocked',
    businessContext: [],
  },
];

export default sidebarData;

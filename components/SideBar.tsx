import Card from './Card';
import SideBarLink from './SideBarLink';

const links = [
  { label: 'Home', icon: 'Grid' as const, path: '/home' },
  { label: 'Calendar', icon: 'Calendar' as const, path: '/calendar' },
  { label: 'Profile', icon: 'User' as const, path: '/profile' },
  { label: 'Settings', icon: 'Settings' as const, path: '/settings' },
];

const SideBar = () => {
  return (
    <Card className='h-full w-40 flex items-center justify-between flex-wrap'>
      {links.map((link, i) => (
        <SideBarLink link={link} key={i} />
      ))}
    </Card>
  );
};

export default SideBar;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User, Grid, Calendar } from 'react-feather';
import clsx from 'clsx';

const icons = { Settings, User, Grid, Calendar };

export interface SideBarLinkProps {
  link: {
    label: string;
    icon: keyof typeof icons;
    path: string;
  };
}

const SideBarLink = ({ link }: SideBarLinkProps) => {
  const pathname = usePathname();

  let isActive = false; // toggle when url path changes
  if (pathname === link.path) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.path}>
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600'
        )}
      />
    </Link>
  );
};

export default SideBarLink;

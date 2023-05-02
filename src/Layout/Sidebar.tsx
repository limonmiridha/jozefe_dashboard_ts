import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';

const menuItemStyles = {
  root: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#82858E',
    margin: '0 auto',
  },
  icon: {
    color: '#8A8E97',
  },
  SubMenuExpandIcon: {
    color: '#8A8E97',
  },
  subMenuContent: {},
  button: {
    color: '#000',

    '&:hover': {
      backgroundColor: '#017EFB !important',
      borderRadius: '10px',
      color: '#fff',
    },
  },
};

const DashboardSidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <div className="sidebar relative h-screen overflow-y-auto">
      <Sidebar selectedMenu={selectedMenu}>
        <main>
          <Menu className="bg-white">
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={() => collapseSidebar()}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={() => collapseSidebar()}
              >
                <div>
                  <Image
                    src="/images/sidebar/logo.svg"
                    width={160}
                    height={22}
                    style={{ objectFit: 'cover' }}
                    alt="Logo"
                  />
                </div>
              </MenuItem>
            )}
          </Menu>

          <Menu menuItemStyles={menuItemStyles}>
            <div
              className={`bg-white px-3 pt-2 ${collapsed ? 'mb-0' : 'mb-12'}`}
            >
              {sidebarMenu.map((menu, i) => (
                <MenuItem
                  component={<Link href={menu.link} />}
                  onClick={() => setSelectedMenu(menu.link)}
                  className={`menuItem ${
                    selectedMenu === menu.link ? 'selected' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 ">
                    <Image
                      src={menu.icon}
                      width={18}
                      height={18}
                      className="normal-icon"
                      alt="dashboard"
                    />
                    <Image
                      src={menu.hoverIcon}
                      width={18}
                      height={18}
                      className="hover-icon hidden"
                      alt="dashboard"
                    />
                    <p>{menu.title}</p>
                  </div>
                </MenuItem>
              ))}
            </div>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
const sidebarMenu = [
  {
    id: 1,
    link: '/dashboard',
    icon: '/images/sidebar/dashboard.svg',
    hoverIcon: '/images/sidebar/dashboard-H.svg',
    title: 'Dashboard',
  },
  {
    id: 2,
    link: '/property',
    icon: '/images/sidebar/building.png',
    hoverIcon: '/images/sidebar/property-H.svg',
    title: 'Property',
  },
];
interface SidebarProps {
  selectedMenu: string;
}

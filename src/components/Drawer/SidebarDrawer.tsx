import React, { useState } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { useProSidebar } from 'react-pro-sidebar';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import DashboardSidebar from '@/Layout/Sidebar';

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { collapsed } = useProSidebar();
  const toggleDrawer = (sidebar: string) => {
    sidebar
      ? setIsSidebarOpen((prevState) => !prevState)
      : setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="md:hidden">
      <button
        className="bg-gray-200 w-9 h-9 absolute top-3 -left-2 rounded hover:bg-blue-500 hover:text-white"
        onClick={() => toggleDrawer('sidebar')}
      >
        <FiChevronsRight className="mx-auto" />
      </button>
      <Drawer
        open={isSidebarOpen}
        onClose={() => toggleDrawer('sidebar')}
        direction="left"
        size={collapsed ? 80 : 270}
        lockBackgroundScroll={true}
      >
        <DashboardSidebar />
      </Drawer>
    </div>
  );
};

export default SidebarDrawer;

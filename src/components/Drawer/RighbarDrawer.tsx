import React, { useState } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import DashboardRightbar from '../Rightbar/DashboardRightbar';
import RentalRightbar from '../Rightbar/RentalRightbar';

const RighbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { collapsed } = useProSidebar();
  const router = useRouter();
  const toggleDrawer = (sidebar: string) => {
    sidebar
      ? setIsSidebarOpen((prevState) => !prevState)
      : setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="xl:hidden">
      <button onClick={() => toggleDrawer('')}>
        <FaBars />
      </button>
      <Drawer
        open={isOpen}
        onClose={() => toggleDrawer('')}
        direction="right"
        size={350}
        lockBackgroundScroll={true}
        className="overflow-y-auto p-4"
      >
        {router.pathname === '/' && <DashboardRightbar />}
        {router.pathname === '/dashboard' && <DashboardRightbar />}
        {router.pathname === '/accounting/rentalDashboard' && (
          <RentalRightbar />
        )}
        {/* <DashboardRightbar mobile={true} />
    <RentalRightbar mobile={true} /> */}
      </Drawer>
    </div>
  );
};

export default RighbarDrawer;

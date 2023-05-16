import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Rightbar from '@/components/Rightbar';
import DashboardRightbar from '@/components/Rightbar/DashboardRightbar';
import RentalRightbar from '@/components/Rightbar/RentalRightbar';

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  //   We need rightbar in these route.
  const showRightbar =
    router.pathname === '/accounting/rentalDashboard' ||
    router.pathname === '/dashboard' ||
    router.pathname === '/';
  return (
    <div className="flex">
      <div className="bg-white border-r border-gray-200 hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="nav border-b border-slate-200">
          <Navbar />
        </div>
        <div className="containerr grid grid-cols-12 h-screen place-content-start overflow-y-auto">
          <div
            className={`m-4 content h-full  ${
              showRightbar ? 'xl:col-span-9' : 'col-span-12'
            }`}
          >
            {children}
          </div>
          <div
            className={`right ${
              showRightbar && 'hidden xl:block xl:col-span-3 h-full'
            } bg-white w-auto`}
          >
            {showRightbar ? (
              <Rightbar>
                {router.pathname === '/' && <DashboardRightbar />}
                {router.pathname === '/dashboard' && <DashboardRightbar />}
                {router.pathname === '/accounting/rentalDashboard' && (
                  <RentalRightbar />
                )}
              </Rightbar>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
type LayoutProps = {
  children: React.ReactNode;
};

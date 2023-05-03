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
const subMenuItemStyles = {
  button: {
    color: '#000',

    '&:hover': {
      backgroundColor: '#017EFB !important',
      opacity: '.65',
      borderRadius: '10px',
      color: '#fff',
    },
  },
};

const DashboardSidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('dashboard');
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <div className="sidebar relative h-screen overflow-y-auto">
      <Sidebar>
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
            <div className={`px-3 pt-2 ${collapsed ? 'mb-0' : 'mb-12'}`}>
              {sidebarMenu.map((menu, i) => {
                if (menu.type === 'menu') {
                  return (
                    <MenuItem
                      key={i}
                      component={<Link href={menu.link} />}
                      suffix={!collapsed && menu.suffix && <Zero />}
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
                  );
                } else if (menu.type === 'dropdown') {
                  return (
                    <SubMenu
                      // defaultOpen

                      icon={
                        <div className="flex items-center -ml-4">
                          <Image
                            src="/images/sidebar/accounting.svg"
                            width={16}
                            height={16}
                            className="normal-icons"
                            alt="dashboard"
                          />
                          <Image
                            src="/images/sidebar/accounting-H.svg"
                            width={16}
                            height={16}
                            className="hover-icons hidden"
                            alt="dashboard"
                          />
                        </div>
                      }
                      title="Accounting"
                      label="Accounting"
                      className={`subMenuItem ${
                        selectedMenu === 'accounting' ? 'selected' : ''
                      }`}

                      // onMouseEnter={handleSubmenuClick}
                    >
                      <Menu menuItemStyles={subMenuItemStyles} className="px-4">
                        {menu.children?.map((item, i) => (
                          <MenuItem
                            key={i}
                            component={<Link href={item.link} />}
                            onClick={() => setSelectedMenu(item.title)}
                            className={`menuItem ${
                              selectedMenu === item.title ? 'selected' : ''
                            }`}
                          >
                            <div className="flex items-center gap-3 ">
                              <Image
                                src={item.icon}
                                width={16}
                                height={16}
                                className="normal-icon"
                                alt="dashboard"
                              />
                              <Image
                                src={item.hoverIcon}
                                width={16}
                                height={16}
                                className="hover-icon hidden"
                                alt="dashboard"
                              />
                              <p>{item.title}</p>
                            </div>
                          </MenuItem>
                        ))}
                      </Menu>
                    </SubMenu>
                  );
                }
              })}
            </div>
          </Menu>
          <div className="px-1 py-4 mb-16">{!collapsed && <SidebarCard />}</div>
          <Menu
            className={`${
              collapsed ? 'w-[70px]' : 'w-[270px] px-3'
            } bg-white fixed left-1 bottom-0`}
            menuItemStyles={menuItemStyles}
          >
            <MenuItem
              component={<Link href="/interfaces/property" />}
              onClick={() => setSelectedMenu('Logout')}
              className={`menuItem ${
                selectedMenu === 'Logout' ? 'selected' : ''
              }`}
            >
              <div className="flex items-center gap-3 ">
                <Image
                  src="/images/sidebar/logout.svg"
                  width={collapsed ? 32 : 16}
                  height={collapsed ? 32 : 16}
                  className="normal-icon"
                  alt="dashboard"
                />
                <Image
                  src="/images/sidebar/logout.svg"
                  width={collapsed ? 32 : 16}
                  height={collapsed ? 32 : 16}
                  className="hover-icon hidden"
                  alt="dashboard"
                />

                <p>{collapsed ? '' : 'Logout'}</p>
              </div>
            </MenuItem>
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
    type: 'menu',
    link: '/dashboard',
    icon: '/images/sidebar/dashboard.svg',
    hoverIcon: '/images/sidebar/dashboard-H.svg',
    title: 'Dashboard',
  },
  {
    id: 2,
    type: 'menu',
    link: '/property',
    icon: '/images/sidebar/building.png',
    hoverIcon: '/images/sidebar/property-H.svg',
    title: 'Property',
  },
  {
    id: 3,
    type: 'menu',
    link: '/members',
    icon: '/images/sidebar/member.svg',
    hoverIcon: '/images/sidebar/member-H.svg',
    title: 'Members',
  },
  {
    id: 4,
    type: 'dropdown',
    link: '/property',
    icon: '/images/sidebar/building.png',
    hoverIcon: '/images/sidebar/dashboard-H.svg',
    title: 'Accounting',
    children: [
      {
        id: '3a',
        link: '/interfaces/property',
        icon: '/images/sidebar/GAcounting.svg',
        hoverIcon: '/images/sidebar/GAcounting-H.svg',
        title: 'General Accounting',
      },
      {
        id: '3b',
        link: '/accounting/rentalDashboard',
        icon: '/images/sidebar/rental.svg',
        hoverIcon: '/images/sidebar/rental-H.svg',
        title: 'Rental Dashboard',
      },
      {
        id: '3c',
        link: '/accounting/membersPayment',
        icon: '/images/sidebar/payment.svg',
        hoverIcon: '/images/sidebar/payment-H.svg',
        title: 'Members Payment',
      },
      {
        id: '3d',
        link: '/accounting/membersInvoice',
        icon: '/images/sidebar/invoice.svg',
        hoverIcon: '/images/sidebar/invoice-H.svg',
        title: 'Members Invoice',
      },
      {
        id: '3e',
        link: '/accounting/pInvoice',
        icon: '/images/sidebar/Pinvoice.svg',
        hoverIcon: '/images/sidebar/Pinvoice-H.svg',
        title: 'Property Invoice',
      },
      {
        id: '3f',
        link: '/interfaces/property',
        icon: '/images/sidebar/suppliers.svg',
        hoverIcon: '/images/sidebar/suppliers-H.svg',
        title: 'Suppliers',
      },
      {
        id: '3g',
        link: '/interfaces/property',
        icon: '/images/sidebar/contact.svg',
        hoverIcon: '/images/sidebar/contact-H.svg',
        title: 'Contracts',
      },
      {
        id: '3h',
        link: '/interfaces/property',
        icon: '/images/sidebar/cashflow.svg',
        hoverIcon: '/images/sidebar/cashflow-H.svg',
        title: 'Tresory Cashflow',
      },
      {
        id: '3i',
        link: '/interfaces/property',
        icon: '/images/sidebar/fund.svg',
        hoverIcon: '/images/sidebar/fund-H.svg',
        title: 'Fundraising',
      },
      {
        id: '3j',
        link: '/interfaces/property',
        icon: '/images/sidebar/debit.svg',
        hoverIcon: '/images/sidebar/debit-H.svg',
        title: 'Debit',
      },
      {
        id: '3k',
        link: '/interfaces/property',
        icon: '/images/sidebar/credit.svg',
        hoverIcon: '/images/sidebar/credit-H.svg',
        title: 'Credit',
      },
    ],
  },
  {
    id: 4,
    type: 'menu',
    title: 'Documents',
    link: '/documents',
    icon: '/images/sidebar/document.svg',
    hoverIcon: '/images/sidebar/document-H.svg',
  },
  {
    id: 5,
    type: 'menu',
    title: 'Incidents',
    suffix: true,
    link: '/incidents',
    icon: '/images/sidebar/incidents.svg',
    hoverIcon: '/images/sidebar/incidents-H.svg',
  },
  {
    id: 6,
    type: 'menu',
    title: 'Messages',
    suffix: true,
    link: '/messages',
    icon: '/images/sidebar/messages.svg',
    hoverIcon: '/images/sidebar/messages-H.svg',
  },
  {
    id: 7,
    type: 'menu',
    title: 'Agenda',
    link: '/agenda',
    icon: '/images/sidebar/agenda.svg',
    hoverIcon: '/images/sidebar/agenda-H.svg',
  },
  {
    id: 8,
    type: 'menu',
    title: 'Meetings',
    link: '/meetings',
    icon: '/images/sidebar/meeting.svg',
    hoverIcon: '/images/sidebar/meeting-H.svg',
  },
  {
    id: 9,
    type: 'menu',
    title: 'Tasks',
    link: '/task',
    icon: '/images/sidebar/task.svg',
    hoverIcon: '/images/sidebar/task-H.svg',
  },
  {
    id: 10,
    type: 'menu',
    title: 'News',
    link: '/news',
    icon: '/images/sidebar/news.svg',
    hoverIcon: '/images/sidebar/news-H.svg',
  },
];
export const Zero = () => {
  return (
    <div className="rounded-full bg-[#017EFB]  w-5 h-5 p-2 text-sm text-center text-white m-auto flex justify-center items-center">
      0
    </div>
  );
};

export const SidebarCard = () => {
  return (
    <div className=" rounded-xl bg-[#F3F9FF] py-3 flex flex-col justify-center items-center text-center mt-[50px] ">
      <Image
        src="/images/sidebar/rocket.svg"
        width={96}
        height={96}
        className="-mt-[60px] bg-white rounded-full p-2 w-24 h-24 border-4 "
        alt="Card Image"
      />

      <h4 className=" text-[#000000] text-lg font-semibold">Go Premium</h4>
      <p className=" text-[#5B5D63] text-sm mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className=" text-white bg-[#017EFB] rounded-lg px-5 py-2">
        Update Now
      </button>
    </div>
  );
};

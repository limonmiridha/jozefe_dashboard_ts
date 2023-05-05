import React, { useState, useEffect, useRef } from "react";
import { BsBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import SidebarDrawer from "@/components/Drawer/SidebarDrawer";
import RighbarDrawer from "@/components/Drawer/RighbarDrawer";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import SelectElement from "@/components/SelectElement";

const avatars = [0, 1, 2, 3, 4, 5, 6];

const Navbar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSetDropdownOpen, setIsSetDropdownOpen] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleClickOutside2 = (event: any) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsSetDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutside2);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutside2);
    };
  }, [dropdownRef, dropdownRef2]);
  const handleDropdownClick = (e: any) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSetDropdownClick = (e: any) => {
    e.preventDefault();
    setIsSetDropdownOpen(!isSetDropdownOpen);
  };
  const handleAvatarSelect = (avatar: any) => {
    setSelectedAvatar(avatar);
    setShowDropdown(false);
  };
  // Navbar Main Header for each page
  let title = "";
  let subTitle = "";
  let miniDesc = "";
  switch (router.pathname) {
    case "/dashboard":
      title = "Dashboard";
      subTitle =
        "Welcome back Józef 👋, Let’s get back to managing your properties.";
      break;
    case "/incidents":
      title = "Incident";
      subTitle =
        "Welcome back Józef 👋, Let’s get back to managing your properties.";
      break;
    case "/property":
      title = "Property";
      subTitle = "Let’s get back to managing your property.";
      miniDesc = "Information - Documents - Financials";
      break;
    case "/accounting/rentalDashboard":
      title = "Rental Dashboard";
      subTitle = "Let’s get back to managing your rentals.";
      break;
    case "/members":
      title = "Members";
      subTitle = "Let’s get back to managing your members.";
      miniDesc = "Information - Documents - Financials";
      break;
    case "/memberProfile":
      title = "Member Profile";
      subTitle = "Let’s get back to managing your members.";
      break;
    case "/accounting/membersPayment":
      title = "Member Payment";
      subTitle = "Let’s get back to managing your members payment.";
      miniDesc = "Accounting";
      break;
    case "/accounting/membersInvoice":
      title = "Members Invoice";
      subTitle = "Let’s get back to invoicing your members.";
      miniDesc = "Private Accounting";
      break;
    case "/accounting/pInvoice":
      title = "Invoice Creation";
      subTitle = "Let’s get back to invoicing your members.";
      miniDesc = "Accounting - Common Property Charge";
      break;
    case "/tasks":
      title = "Tasks & Maintenance";
      subTitle = "View upcoming tasks and maintenance";
      break;
    case "/news":
      title = "News";
      subTitle =
        "Welcome back Józef 👋, Let’s get back to managing your properties.";
      break;
    case "/messages":
      title = "Messages";
      subTitle =
        "Welcome back Józef 👋, Let’s get back to managing your properties.";
      break;

    default:
      title = "Dashboard";
      subTitle =
        "Welcome back Józef 👋, Let’s get back to managing your properties.";
      break;
  }
  return (
    <>
      <SidebarDrawer />

      <div className="items-center justify-between gap-3 py-2 pl-8 pr-8 bg-white md:flex md:pl-4">
        {/* Navbar header Text */}
        <div>
          <h2 className="text-2xl font-bold">
            {title}
            <span className="ml-2 text-xs text-slate-500">
              {miniDesc && miniDesc}
            </span>
          </h2>
          <p className="text-sm text-slate-400">{subTitle}</p>
        </div>
        <div className="justify-center gap-6 mt-3 text-xl flexs md:mt-0">
          {/* Notification with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Link href="" onClick={handleDropdownClick}>
              <BsBellFill className="text-gray-400" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </Link>
            {isDropdownOpen && (
              <div className="absolute z-20 p-4 -translate-x-1/2 bg-white rounded-lg shadow-lg w-60 top-12">
                <h3 className="text-base font-bold">Notifications</h3>
                <hr className="mt-2 border" />
                {dropdown.map((item, i) => (
                  <div className="flex items-center gap-3 my-3" key={i}>
                    <Image
                      src={item.image}
                      width={32}
                      height={32}
                      alt="incidents"
                    />
                    <Link
                      href="/incidents"
                      className="text-base text-slate-500 hover:text-blue-700 "
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Settings Dropdown */}
          <div className="relative" ref={dropdownRef2}>
            <Link href="" onClick={handleSetDropdownClick}>
              <Image
                src="/images/navbar/setting.svg"
                width={24}
                height={24}
                style={{ minWidth: "20px" }}
                alt="setting Icon"
              />
            </Link>
            {isSetDropdownOpen && (
              <div className="absolute z-20 p-4 -translate-x-1/2 bg-white rounded-lg w-72 top-12 drop-shadow-lg">
                <h3 className="text-base font-bold">Settings</h3>
                <hr className="mt-2 border" />
                {settingDropdown.map((item, i) => (
                  <div className="flex items-center gap-3 my-3" key={i}>
                    <Image
                      src={item.image}
                      width={24}
                      height={24}
                      alt="incidents"
                    />
                    <Link
                      href="/incidents"
                      className="text-sm text-slate-500 hover:text-blue-700 "
                      onClick={() => setIsSetDropdownOpen(!isSetDropdownOpen)}
                    >
                      {item.title}
                    </Link>
                    <p
                      className={`${
                        item.type && "bg-blue-500"
                      } text-sm  text-white rounded ml-auto px-2 py-1`}
                    >
                      {item.type && item.type}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Help Section */}
          <Link href="" className="flex items-center gap-2">
            <BsFillQuestionCircleFill className="text-gray-400" />
            <p className="text-base text-slate-500">Help</p>
          </Link>
          {/* Profile Avatar */}
          <div className="relative">
            <Link href="">
              <Image
                src={`/images/navbar/avatar/avatar-${selectedAvatar}.svg`}
                width={36}
                height={36}
                style={{ minWidth: "28px" }}
                onClick={() => setShowDropdown(!showDropdown)}
                alt="avatar"
              />
            </Link>
            <div>
              {showDropdown && (
                <SelectElement
                  avatars={avatars}
                  handleAvatarSelect={handleAvatarSelect}
                  selectedAvatar={selectedAvatar}
                />
              )}
            </div>
          </div>
          <RighbarDrawer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
const dropdown = [
  {
    id: 1,
    image: "/images/incidents.svg",
    title: "1 New Incident",
  },
  {
    id: 1,
    image: "/images/chat.svg",
    title: "1 New Message",
  },
  {
    id: 1,
    image: "/images/task.svg",
    title: "1 New Task Pending",
  },
];
const settingDropdown = [
  {
    id: 1,
    image: "/images/plan.svg",
    title: "My Account Plan",
    type: "FREE",
  },
  {
    id: 1,
    image: "/images/access.svg",
    title: "Control Access",
  },
  {
    id: 1,
    image: "/images/changePass.svg",
    title: "Change Password",
  },
  {
    id: 1,
    image: "/images/premium.svg",
    title: "Go Premium",
  },
  {
    id: 1,
    image: "/images/customer-care.svg",
    title: "Contact Support",
  },
];

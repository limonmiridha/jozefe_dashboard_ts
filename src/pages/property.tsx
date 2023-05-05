import React from 'react';
import Image from 'next/image';
import { TitleHeader } from '@/components/Headers';
import Button from '@/components/Button';
import Input from '@/components/Input';
import FileUploader from '@/components/FileUploader';
import SelectInput from '@/components/SelectInput';
import ProfilePicture from '@/components/ProfilePicture';
import GlobalDataTable from '@/components/GlobalDataTable';
import {
  memberCreditColumn,
  memberCreditData,
  memberDebitColumn,
  memberDebitData,
  memberPendingColumn,
  memberPendingData,
} from '@/data/TableData';

const property = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/property/property.svg"
        headerText="blablabla"
      />

      <div className="p-4 bg-white rounded-lg box-shadow">
        <div className="xs:flex space-y-3 xs:space-y-0 items-center justify-between">
          <h2 className="text-xl font-bold">Property Profile</h2>
          <div className="flex items-center gap-5">
            <Button
              text="Edit"
              cls=" bg-[#edf3fa] w-full py-2 px-4 border-none"
            />
            <Button
              text="Back"
              cls=" bg-[#017efb] w-full py-2 px-4  text-white"
            />
          </div>
        </div>
        <div className="grid gap-5 mt-5 xl:grid-cols-2">
          <div className="w-full">
            <p className="">Property Information</p>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/inputIcon/manInput.svg"
                name="Property Name"
                type="name"
              />
              <Input
                img="/images/inputIcon/address.svg"
                name="Property Address"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/inputIcon/country.svg"
                name="Country"
                type="name"
              />
              <Input
                img="/images/inputIcon/postal.svg"
                name="Postal Code Of Property"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyType} />
            </div>
            <p className="mt-3">Building Information</p>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input name="Number of Units" type="name" />
              <Input name="Number of Garages" type="name" />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input name="Number of Floors" type="name" />
              <Input name="Number of Cellars" type="name" />
            </div>
          </div>
          <div>
            <p className="">Property Manager Information</p>

            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyRole} />
              <Input
                img="/images/inputIcon/email.svg"
                name="Email"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/inputIcon/manInput.svg"
                name="First Name"
                type="name"
              />
              <Input
                img="/images/inputIcon/manInput.svg"
                name="Last Name"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/inputIcon/phone.svg"
                name="Phone Number"
                type="name"
              />
              <Input
                img="/images/inputIcon/address.svg"
                name="Full Address"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/inputIcon/tax.svg"
                name="Tax ID Number"
                type="name"
              />
            </div>
            <div className="my-3">
              <p>Property Manager Profile Picture</p>
            </div>
            <ProfilePicture />
          </div>
        </div>
      </div>
      {/* Document upload section */}
      <div className="mt-3 bg-white rounded-lg box-shadow">
        <div className="grid lg:grid-cols-2 gap-12 p-6">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Documents</h2>
            <FileUploader text="Drag or drop documents here to upload" />
            {/* <p className="py-8 ">Property Documents</p>
        <Documents />
        <Documents />
        <Documents />
        <GlobalButton
          text="Show all documents"
          cls=" bg-[#017efb] py-2 px-4 mt-3 text-sm border-none text-white"
        /> */}
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">Property Images</h2>
            <FileUploader
              text="Drag or drop images here to upload"
              image="image"
            />
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 mt-16 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                <Image
                  src={`/images/property/upload/img${x}.svg`}
                  width={200}
                  height={200}
                  className="w-full"
                  key={x}
                  alt=""
                />
              ))}
            </div>
            <Button
              text="Show all photos"
              cls=" bg-[#017efb] py-2 px-4 text-sm border-none text-white"
            />
          </div>
        </div>
      </div>
      {/* Limon */}
      <h3 className="my-4 text-xl font-bold">Property Financial Transaction</h3>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberCreditData}
          column={memberCreditColumn}
          tableTitle="Common Bills Invoice (Credit)"
          titleImg="/images/property/credit.svg"
          headerText={true}
        />
      </div>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberDebitData}
          column={memberDebitColumn}
          tableTitle="Member Payed Bills Invoice (Debit)"
          titleImg="/images/property/credit.svg"
        />
      </div>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberPendingData}
          column={memberPendingColumn}
          tableTitle="Member Pending Payment"
          titleImg="/images/property/credit.svg"
          capsuleBtn={false}
        />
      </div>
      {/* Limon */}
    </>
  );
};

export default property;
const propertyType = [
  {
    value: 'Property Type',
    label: 'Property Type',
    image: '/images/inputIcon/propertyType.svg',
  },
  {
    value: 'Home',
    label: 'Home',
    image: '/images/inputIcon/home.svg',
  },
  {
    value: 'Apartment',
    label: 'Apartment',
    image: '/images/inputIcon/apartment.svg',
  },
  {
    value: 'Studios',
    label: 'Studios',
    image: '/images/inputIcon/studios.svg',
  },
  {
    value: 'Condos',
    label: 'Condos',
    image: '/images/inputIcon/condos.svg',
  },
  {
    value: 'Commercial',
    label: 'Commercial',
    image: '/images/inputIcon/commercial.svg',
  },
  {
    value: 'Other',
    label: 'Other',
    image: '/images/inputIcon/other.svg',
  },
];
const propertyRole = [
  {
    value: 'Property Role',
    label: 'Property Role',
    // image: '/images/property/a.svg',
  },
  {
    value: 'Manager',
    label: 'Manager',
    image: '/images/inputIcon/manInput.svg',
  },
  {
    value: 'Owner',
    label: 'Owner',
    image: '/images/inputIcon/owner.svg',
  },
  {
    value: 'Company',
    label: 'Company',
    image: '/images/inputIcon/company.svg',
  },
];

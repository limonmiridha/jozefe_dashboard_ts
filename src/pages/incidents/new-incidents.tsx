import Button from '@/components/Button';
import FileUploader from '@/components/FileUploader';
import Card from '@/components/GlobalCard';
import { InnerHeader, TitleHeader } from '@/components/Headers';
import Input from '@/components/Input';
import SelectInput from '@/components/SelectInput';
import React from 'react';

const newIncidents = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/incidents/incidents.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <Card cls="p-4">
        <InnerHeader>Create Incident</InnerHeader>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {newIncidentsInput.map((input, i) => (
            <div>
              {input.type === 'select' ? (
                <SelectInput data={propertyRole} />
              ) : (
                <Input
                  key={i}
                  name={input.placeholder}
                  cls="col-span-full "
                  type={input.type ? input.type : 'text'}
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-3 my-3">
          <textarea
            placeholder="Incident Message"
            className="h-full bg-gray-50 rounded-lg p-3"
          />
          <FileUploader image="image" />
        </div>
        <Button cls="bg-blue-500 px-4 py-2 text-white">Create</Button>
      </Card>
    </>
  );
};

export default newIncidents;
const newIncidentsInput = [
  { type: 'select' },
  { placeholder: 'ACP' },
  { placeholder: 'Phone Number' },
  { placeholder: 'Email' },
  { type: 'date', placeholder: 'Date' },
  { type: 'select' },
  { type: 'select' },
];
const propertyRole = [
  {
    value: 'Username',
    label: 'Username',
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

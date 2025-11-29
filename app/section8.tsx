'use client';

import FormField from '@/components/FormField/FormField';
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import React from 'react';

const Section8 = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mobileno: '',
    countryofresidence: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    mobileno: '',
    countryofresidence: '',
    message: '',
  });

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleMobileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, mobileno: e.target.value });
  };
  const handleCountryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, countryofresidence: e.target.value });
  };
  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, message: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? '' : 'Email is required',
      mobileno: formData.mobileno ? '' : 'Mobile No. is required',
      countryofresidence: formData.countryofresidence
        ? ''
        : 'Country of Residence is required',
      message: formData.message ? '' : 'Message is required',
    });
  };

  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center pt-15">
      <div className="blue-text self-center">
        <h3>Enquire Now</h3>
      </div>
      <div className="grid grid-rows-[auto_auto_auto] gap-8 self-center w-full px-32">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
            error={errors.name}
          />
          <FormField
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            error={errors.email}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            placeholder="Mobile No."
            name="mobileno"
            value={formData.mobileno}
            onChange={handleMobileChange}
            error={errors.mobileno}
          />
          <FormField
            placeholder="Country of Residence"
            name="countryofresidence"
            value={formData.countryofresidence}
            onChange={handleCountryChange}
            error={errors.countryofresidence}
          />
        </div>
        <div className="grid grid-cols-1">
          <FormField
            placeholder="Enter your message here"
            name="message"
            value={formData.message}
            onChange={handleMessageChange}
            error={errors.message}
            textarea
            rows={8}
          />
        </div>
      </div>
      <div>
        <SubmitButton onClick={handleSubmit}></SubmitButton>
      </div>
    </div>
  );
};

export default Section8;

import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { FormContainer, Label, Button } from './styled';
 
const Register = () => {
  const genderOptions = [
    { id: 'F', title: 'Female' },
    { id: 'M', title: 'Male' }
  ]

  const intimacyLevelOptions = [
    { id: '1', title: 'Very Low' },
    { id: '2', title: 'Low' },
    { id: '3', title: 'Regular' },
    { id: '4', title: 'High' },
    { id: '5', title: 'Very High' }
  ]

  const handleSubmit = (data: any) => {
      console.log(data)
  }
 
  return (
    <FormContainer>
      <Form className="form" onSubmit={handleSubmit}>
        <Label>Full Name</Label>
        <Input name="Name" placeholder="John Doe" autoComplete="off" />
        <Label>Birthday</Label>
        <Input name="Birthdate" placeholder="Birthday" type="date" autoComplete="off" />
        <Label>Gender</Label>
        <Select name="Gender" options={genderOptions} placeholder="Female or Male" />
        <Label>Phone Number</Label>
        <Input name="Phone" placeholder="Ex: 5524912345678" autoComplete="off" />
        <Label>Intimacy Level</Label>
        <Select name="IntimacyLevel" options={intimacyLevelOptions} placeholder="Intimacy Level" />
        <Label>Twitter ID</Label>
        <Input name="TwitterId" type="text" placeholder="Twitter ID" autoComplete="off" />
        <Label>Email</Label>
        <Input name="Email" type="email" placeholder="john_doe@email.com" autoComplete="off" />
        <Label>Twitter Username</Label>
        <Input name="TwitterName" type="text" placeholder="@TwitterUsername" autoComplete="off" />
  
        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
}

export default Register;
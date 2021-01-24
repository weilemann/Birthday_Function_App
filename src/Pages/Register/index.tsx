import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { Container, Image, FormContainer, Label, Button } from './styles';

import logo from '../../assets/Logo.png';
import api from '../../services/api';

// interface IBirthdayPerson {
//   Name: string,
//   Birthdate: Date,
// 	Email: string,
// 	Gender: string,
// 	IntimacyLevel: number,
// 	Phone: number,
// 	TwitterId: number,
// 	TwitterName: string
// }
 
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

  const handleSubmit = async (data: any) => {
    data.Phone = Number(data.Phone)
    data.IntimacyLevel = Number(data.IntimacyLevel)
    data.TwitterId = Number(data.TwitterId)

    if(data.TwitterId === "") {
      delete data.TwitterId
    }

    if(data.TwitterName === "") {
      delete data.TwitterId
    }

    if(data.Phone === "") {
      delete data.Phone
    }

    if(data.Email === "") {
      delete data.Email
    }

    console.log(data);
    var response = await api.post('/v1/birthdays', data);
    console.log(response.data);
  }
 
  return (
    <Container>
      <Image src={logo} />
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
    </Container>
  );
}

export default Register;
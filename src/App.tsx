// import React, { useState } from 'react';
// import styled from 'styled-components';

// import Header from './component/Header/Header';
// import TableUser from './component/TableUser/TableUser';
// import Button from './common/Button';

// const Container = styled.div`
//     // min-height: 100vh;
//     // display: flex;
//     // flex-direction: column;
//     // align-items: center;
//     // justify-content: center;
//     // font-size: calc(10px + 2vmin);
// `;

// const App = () => {
//     const [date, setDate] = useState('');

//     const handleDateTime = () => {
//         let currentDate = new Date();
//         setDate(currentDate.toDateString());
//     };

//     return (
//         <Container>
//             <Header />
//             <TableUser />
//             {/* <h2>{date}</h2>
//             <Button btnText="Show timess" isPublished={true} handleDateTime={handleDateTime} variant={'outline'} />
//             <Button btnText="Show timess" isPublished={true} handleDateTime={handleDateTime} variant={'none'} /> */}
//         </Container>
//     );
// };

// export default App;








import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";
import React from "react";
 
import './App.css'
 
enum GenderEnum {
  famale = "female",
  male = "male",
  other = "other",
}
 
type Inputs = {
  firstName: string;
  lastName: string;
  age: number,
  gender: GenderEnum;
};
 
export default function App() {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();
  const resetFormByUseRef = useRef();
 
 
  React.useEffect(() => {
    setFocus("firstName");
    console.log(watch("firstName")); // watch input value by passing the name of it
  });
 
  const handleUnRegister = () => {
    unregister("lastName")
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset();
  };
 
 
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
      readOnly
      defaultValue=""
      {...register("firstName", { pattern: /^[A-Za-z0-9]+$/i })}
      placeholder="Chi duoc doc"
      />
      {errors.firstName && <span role="alert">Vui long nhap first name</span>}
 
      <label>Last Name</label>
      {/*  Mỗi trường required phải có name cũng như là key cho register process  */}
      <fieldset disabled>
      <input defaultValue="" {...register("lastName", { required: true })} />
      {errors.firstName && <span role="alert">Vui long nhap last name</span>}
      </fieldset>
      <label>Age</label>
      <input type="number" {...register('age', {min: 18, max: 100})} />
      {errors.age && <span>Vui long nhap do tuoi hop le</span>}
 
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">other</option>
      </select>
     
      <button type="button" onClick={() => handleUnRegister()}>Unregister</button>
      <input type="submit" />
    </form>
  );
}
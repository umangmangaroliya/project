"use client"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTodo } from './useTodo';


const Todo = () => {
  const {handleSubmit,register,onSubmit} = useTodo()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input type="submit" />
    </form>
  );
};

export default Todo;
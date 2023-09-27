import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../BFF';

const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверный заполнен логин. Допускаются только буквы и цифры')
    .min(3, 'Неверный заполнен логин. Минимум 3 символа')
    .max(15, 'Неверный заполнен логин. Максимум 15 символов'),
  password: yup
    .string()
    .required('Заполните пароль')
    .matches(
      /^\[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
    )
    .min(6, 'Неверный заполнен пароль. Минимум 6 символов')
    .max(30, 'Неверный заполнен пароль. Минимум 30 символов'),
});

export const Authorization = () => {
    const [formError, setFormError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormScheme),
  });

  const onSubmit = ({ login,password}) => {

      server.authorization(login,password).then(({ error,response })=>{
          if (error){
              setFormError(`Ошибка запроса: ${error}`)
          }
      })
  }

  return <div>
      <h2>Авторизация</h2>
      <form action='#' onSubmit={()=>handleSubmit(onSubmit)}>
          <input type='text' placeholder={'Логин...'} {...register('login')}/>
          <input type='password' placeholder={'Пароль...'} {...register('password')}/>
          <button type={'submit'}>Войти</button>
      </form>
  </div>;
};

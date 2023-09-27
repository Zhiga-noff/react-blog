import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../BFF';
import styled from 'styled-components';

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

const AuthorizationContainer = ({ className }) => {
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

  const [serverError, setServerError] = useState('');

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  const onSubmit = ({ login, password }) => {
    server.authorization(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
      }
    });
  };

  return (
    <div className={className}>
      <h2>Авторизация</h2>
      <form action="#" onSubmit={() => handleSubmit(onSubmit)}>
        <input type="text" placeholder={'Логин...'} {...register('login')} />
        <input type="password" placeholder={'Пароль...'} {...register('password')} />
        <button type={'submit'} disabled="">
          Войти
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
`;

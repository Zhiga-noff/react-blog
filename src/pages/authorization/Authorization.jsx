import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../BFF';
import styled from 'styled-components';
import { Button, FormErrorMessage, H2, Input } from '../../components';
import { Link, Navigate } from 'react-router-dom';
import { setUserAction } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../store/selectors';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';

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
      /^[a-zA-Z0-9#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
    )
    .min(6, 'Неверный заполнен пароль. Минимум 6 символов')
    .max(30, 'Неверный заполнен пароль. Минимум 30 символов'),
});

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin-top: 20px;
  font-size: 18px;
`;

const AuthorizationContainer = ({ className }) => {
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormScheme),
  });

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    server.authorization(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }
      dispatch(setUserAction(response));
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to={'/'}></Navigate>;
  }

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder={'Логин...'}
          {...register('login', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder={'Пароль...'}
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />
        <Button type={'submit'} disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        <StyledLink to={'/register'}>Регистрация</StyledLink>
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
    width: 260px;
  }
`;

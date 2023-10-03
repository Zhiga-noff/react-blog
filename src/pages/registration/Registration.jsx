import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../BFF';
import styled from 'styled-components';
import { Button, FormErrorMessage, H2, Input } from '../../components';
import { Link, Navigate } from 'react-router-dom';
import { setUserAction } from '../../store/actions';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { selectUserRole } from '../../store/selectors';
import { ROLE } from '../../constants';

const regFormScheme = yup.object().shape({
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
  passwordCheck: yup
    .string()
    .required('Заполните повтор пароль')
    .oneOf([yup.ref('password')], 'Повтор пароля не совпадает'),
});

const RegistrationContainer = ({ className }) => {
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
      passwordCheck: '',
    },
    resolver: yupResolver(regFormScheme),
  });

  const store = useStore();

  const roleId = useSelector(selectUserRole);

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let previousWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== previousWasLogout) {
        reset();
      }
    });
  }, [reset, store]);

  const onSubmit = ({ login, password }) => {
    server.registration(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }
      console.log(response);
      dispatch(setUserAction(response));
    });
  };

  const formError =
    errors?.login?.message || errors?.password?.message || errors?.passwordCheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to={'/'}></Navigate>;
  }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
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
          placeholder={'Проверка пароля...'}
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder={'Пароль...'}
          {...register('passwordCheck', {
            onChange: () => setServerError(null),
          })}
        />
        <Button type={'submit'} disabled={!!formError}>
          Зарегистрироваться
        </Button>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
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

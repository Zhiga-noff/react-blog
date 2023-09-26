import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=8aefa63524eff2979c790f4d780328ec',
    )
      .then((data) => data.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <footer className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <a href={'mailto:zhiganov_k.n@mail.ru'}>zhiganov_k.n@mail.ru</a>
      </div>
      <div>
        <div>
          {city},{' '}
          {new Date().toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
          })}
        </div>
        <div>
          {temperature} градусов, {weather}
        </div>
      </div>
    </footer>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 2px 15px #000;

  background-color: white;
  width: 1000px;

  font-weight: bold;
`;

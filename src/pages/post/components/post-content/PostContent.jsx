import React from 'react';
import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({ className, post }) => {
  const { id, title, imageUrl, content, publishedAt } = post;
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className={'published-at'}>
          <Icon id={'fa-calendar-o'} margin={'0 10px 0 0'} size={'18px'} />
          {publishedAt}
        </div>
        <div className="buttons">
          <Icon id={'fa-trash-o'} margin={'0 20px 0 0'} />
          <Icon id={'fa-pencil-square-o'} />
        </div>
      </div>
      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin-right: 40px;
    margin-bottom: 30px;
  }

  & .special-panel {
    margin: -20px 0 20px;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }

  & .buttons {
    display: flex;
    align-items: center;
  }

  & .post-text {
    font-size: 18px;
  }
`;

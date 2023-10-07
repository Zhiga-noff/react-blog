import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../components';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
  return (
    <div className={className}>
      <div className="information-panel">
        <div className="author">
          <Icon id={'fa-user-circle-o'} margin={'0 10px 0 0'} size={'18px'} />
          {author}
        </div>
        <div className="published-at">
          <Icon id={'fa-calendar-o'} margin={'0 10px 0 0'} size={'18px'} />
          {publishedAt}
        </div>
      </div>
      <div className="comment">{content}</div>
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  & .information-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .author {
    display: flex;
    align-items: center;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }
`;

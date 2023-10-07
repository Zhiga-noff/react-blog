import React from 'react';
import styled from 'styled-components';
import { H2 } from '../../../../components';

const PostContentContainer = ({ className, post }) => {
  const { id, title, image_url: imageUrl, content, published_at: publishedAt } = post;
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">{publishedAt}</div>
      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)``;

// components/SkeletonLoader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkeletonLoader: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </SkeletonContainer>
  );
};

export default SkeletonLoader;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkeletonCard = styled.div`
  width: 100%;
  height: 200px;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0px, #edeef1 40px, #f6f7f8 80px);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
  margin: 0 8px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  max-width: 1228px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SlideShow = styled.div`
  display: flex;
  gap: 48px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Card = styled.div<{
  currentSlide: number;
  cardHeight: number;
}>`
  height: ${({ cardHeight }) => `${cardHeight}px`};
  width: 590px;
  min-width: 590px;

  background-color: red;
  border-radius: 8px;

  transform: translateX(
    ${({ currentSlide }) => `-${currentSlide * 638}px`}
  );
  transition: all 800ms ease-in-out;
`;

export const LeftButton = styled.button``;

export const RightButton = styled.button``;

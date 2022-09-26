import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  max-width: 1440px;
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
  totalCards: number;
  cardHeight: number;
}>`
  height: ${({ cardHeight }) => `${cardHeight}px`};
  width: 590px;
  min-width: 590px;

  background-color: red;
  border-radius: 8px;

  transform: translateX(
    ${({ currentSlide, totalCards }) =>
      currentSlide + 2 === totalCards
        ? `-${currentSlide * 638 - 205}px`
        : `-${currentSlide * 638}px`}
  );
  transition: all 800ms ease-in-out;
`;

export const LeftButton = styled.button``;

export const RightButton = styled.button``;

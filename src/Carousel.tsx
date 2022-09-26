import React, { useState } from 'react';

import {
  Card,
  CarouselContainer,
  Container,
  LeftButton,
  RightButton,
  SlideShow,
} from './CarouselStyles';

interface CarouselProps {
  cards: any[];
  cardHeight: number;
}

const Carousel: React.FC<CarouselProps> = ({ cards, cardHeight }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide + 2 === cards.length;

  const handleLeftClick = () => {
    if (isFirstSlide) {
      return;
    }

    setCurrentSlide(currentSlide - 1);
  };

  const handleRightClick = () => {
    if (isLastSlide) {
      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <LeftButton onClick={handleLeftClick}>LEFT</LeftButton>
      <RightButton onClick={handleRightClick}>RIGHT</RightButton>
      <Container>
        <CarouselContainer>
          <SlideShow>
            {cards.map((card, index) => (
              <Card
                currentSlide={currentSlide}
                totalCards={cards.length}
                cardHeight={cardHeight}
              >
                {card}
              </Card>
            ))}
          </SlideShow>
        </CarouselContainer>
      </Container>
    </>
  );
};

export { Carousel };

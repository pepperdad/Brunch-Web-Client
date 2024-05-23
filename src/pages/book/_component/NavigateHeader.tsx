import styled from '@emotion/styled';
import ArrowLeftIcon from 'public/icon/arrow-left.svg?react';
import ArrowRightIcon from 'public/icon/arrow-right.svg?react';
import Polygon from 'public/icon/polygon.svg';
import { Link } from 'react-router-dom';

export type ArrowType = 'left' | 'right';

interface NavigateHeaderProps {
  position: number;
  // eslint-disable-next-line no-unused-vars
  onArrowClick: (direction: ArrowType) => void;
  title: string;
}

const NavigateHeader = ({ position, onArrowClick, title }: NavigateHeaderProps) => {
  return (
    <NavigationWrapper>
      <NavigationTextBox>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavigationText>브런치 홈</NavigationText>
        </Link>
        <Polygon />
        <Link to="/library" style={{ textDecoration: 'none' }}>
          <NavigationText>최근 읽었던 글</NavigationText>
        </Link>
        <Polygon />
        <Link to="" style={{ textDecoration: 'none' }}>
          <NavigationText>{title}</NavigationText>
        </Link>
      </NavigationTextBox>

      <div>
        <ArrowBtn onClick={() => onArrowClick('left')}>
          <ArrowLeft position={position} />
        </ArrowBtn>
        <ArrowBtn onClick={() => onArrowClick('right')}>
          <ArrowRight position={position} />
        </ArrowBtn>
      </div>
    </NavigationWrapper>
  );
};

export default NavigateHeader;

const NavigationWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 9.5rem 1rem 5.5rem;
`;

const NavigationTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const NavigationText = styled.span`
  color: ${({ theme }) => theme.color.gray06};
  ${({ theme }) => theme.font.caption3};
`;

const ArrowBtn = styled.button`
  display: inline-flex;
  padding: 0 1rem;
`;
const ArrowLeft = styled(ArrowLeftIcon)<{ position: number }>`
  width: 1.5rem;
  stroke-width: ${({ position }) => (position === 0 ? '1px' : '2.5px')};
`;

const ArrowRight = styled(ArrowRightIcon)<{ position: number }>`
  width: 1.5rem;
  stroke-width: ${({ position }) => (position === 0 ? '2.5px' : '1px')};
`;
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { H3 } from "../Typography";
import styled from "@emotion/styled";
import { useWindowSize } from "rooks";
import { Carousel as CarouselLib } from "react-responsive-carousel";

interface CarouselProps {
  isCenterd?: boolean;
  items: {
    image?: ReactElement;
    name: string;
    text: ReactNode;
    fullName?: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ isCenterd, items }) => {
  const { innerWidth } = useWindowSize();
  const activeIndicatorRef = useRef<HTMLLIElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState<number | null>(
    null,
  );
  const [selectedItem, setSelectedItem] = useState(
    Math.floor(items.length / 2),
  );

  useEffect(() => {
    const activeIndicatorItemRec =
      activeIndicatorRef.current?.getBoundingClientRect();
    const indicatorContainerRect =
      activeIndicatorRef.current?.parentElement?.getBoundingClientRect();
    if (innerWidth && activeIndicatorItemRec && indicatorContainerRect) {
      const activeIndicatorItemLeft = activeIndicatorItemRec.left;
      const activeIndicatorItemWidth = activeIndicatorItemRec.width;
      const indicatorContainerLeft = indicatorContainerRect!.left;

      setIndicatorPosition(
        innerWidth / 2 -
          (activeIndicatorItemLeft -
            indicatorContainerLeft +
            activeIndicatorItemWidth / 2),
      );
    }
  }, [innerWidth, selectedItem]);

  return (
    <CarouselWrapper
      selectedItem={selectedItem}
      onChange={setSelectedItem}
      onClickItem={setSelectedItem}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={600}
      emulateTouch
      renderIndicator={(onClick, isSelected, index) => (
        <>
          <Name
            ref={isSelected ? activeIndicatorRef : undefined}
            onClick={onClick}
            isSelected={isSelected}
          >
            {items[index].name}
          </Name>
          {index < items.length - 1 && "–"}
        </>
      )}
      indicatorContainerPosition={indicatorPosition ?? 0}
    >
      {items.map(({ text, name, image, fullName }) => (
        <div
          className={`${isCenterd ? "text-center" : "text-left"} select-none`}
          key={name}
        >
          {image && image}
          {fullName && <H3>{fullName}</H3>}
          {text}
        </div>
      ))}
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled(CarouselLib)`
  padding: 2rem 0 1rem;

  .carousel {
    position: relative;
    width: 100%;
    padding-bottom: 60px;
    overflow: hidden;

    .slider {
      display: flex;
      max-width: 34rem;
      margin: 0 auto;
      padding: 0;
      list-style: none;
      transition: all 600ms cubic-bezier(0.1, 0.15, 0, 0.97);
    }

    .slide {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
      transform: scale(1);
      transition:
        opacity 600ms cubic-bezier(0.1, 0.15, 0, 0.97),
        transform 600ms cubic-bezier(0.1, 0.15, 0, 0.97);

      p {
        display: flex;
        align-items: center;
        flex: 1;
      }

      &:not(.selected) {
        cursor: pointer;
        opacity: 0.4;
        transform: scale(0.7);
      }
    }

    .control-dots {
      position: absolute;
      bottom: 0;
      left: ${({
        indicatorContainerPosition,
      }: {
        indicatorContainerPosition: number;
      }) => indicatorContainerPosition}px;
      padding: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      list-style: none;
      margin: 16px 0;
      height: 18px;
      transition: left 600ms cubic-bezier(0.1, 0.15, 0, 0.97);

      .dot {
        background: #62226a;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        cursor: pointer;
        transition:
          background-color 600ms,
          height 600ms,
          width 600ms;

        &.selected {
          background-color: #e8dd2f;
          width: 18px;
          height: 18px;
        }
        &:hover {
          background-color: #e8dd2f;
        }
      }
    }

    .control-disabled {
      display: none;
    }
  }
`;

interface NameProps {
  isSelected: boolean;
}

const Name = styled.button`
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  justify-self: flex-end;
  color: ${({ isSelected }: NameProps) => (isSelected ? "#62226a" : "#052f32")};
  font-size: ${({ isSelected }: NameProps) => (isSelected ? "1.4rem" : "1rem")};
  transition: font-size 600ms cubic-bezier(0.1, 0.15, 0, 0.97);
`;

import React, { FC } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  children?: React.ReactChild | React.ReactNode,
  variant: CardVariant,
  title?: string,
  onClick?: (e: React.MouseEvent<HTMLDivElement>, title: string) => void,
}


const Card: FC<CardProps> = (
    {
      children,
      variant,
      title= 'default',
      onClick,
    }
) => {

  return (
      <div className={variant} onClick={(e) => onClick && onClick(e, 'child')}>
        Card
        test - {title}
        <div>
          {children}
        </div>
      </div>
  );
};

export default Card;

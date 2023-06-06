import clsx from 'clsx';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

const Card = ({ children, className }: DivProps) => {
  return (
    <div
      className={clsx(
        'rounded-3xl px-10 py-4 dro-shadow-xl bg-white',
        className
      )}>
      {children}
    </div>
  );
};

export default Card;

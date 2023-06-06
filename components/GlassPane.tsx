import clsx from 'clsx';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

const GlassPane = ({ children, className }: DivProps) => {
  return (
    <div
      className={clsx(
        'glass rounded-2xl border-solid border-2 border-gray-200',
        className
      )}>
      {children}
    </div>
  );
};

export default GlassPane;

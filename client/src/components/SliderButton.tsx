import Icon from './Icon';

interface SliderButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

function SliderButton({ direction, onClick }: SliderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute inset-y-2/4 z-30 ${direction === 'prev' ? 'left-20 3xl:left-40' : 'right-20 3xl:right-40'} flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-slate-900 outline-0 ring-blue-500 transition-all duration-500 hover:bg-slate-100 focus-visible:ring-4`}
    >
      {direction === 'prev' ? (
        <Icon name="arrowLeft" />
      ) : (
        <Icon name="arrowRight" />
      )}
    </button>
  );
}

export default SliderButton;

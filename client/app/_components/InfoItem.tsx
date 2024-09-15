import { createMoviesInfoList, createRenderedValue } from '../_utils/helper';

type ArrayData = ReturnType<typeof createMoviesInfoList>;

function InfoItem({ data }: { data: ArrayData[0] }) {
  const renderedValue = createRenderedValue(data);

  return (
    <div className="mb-4 flex flex-col gap-1">
      <h4 className="text-base font-bold">{data.key}</h4>
      <span className="text-xs dark:text-slate-400">{renderedValue}</span>
    </div>
  );
}

export default InfoItem;


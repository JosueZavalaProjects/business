import useSalesPointState from "../states/sales-point-state";

type TabSelectionItemProps = {
  optionName: string;
  text: string;
};
export const TabSelectionItem = ({
  optionName,
  text,
}: TabSelectionItemProps) => {
  const { tabName, setTabName } = useSalesPointState();
  return (
    <li
      className={`flex items-center text-center min-w-[105px] h-12 p-2 ${
        optionName === tabName
          ? "border-b-2 border-gray-800 text-gray-800"
          : "text-gray-300"
      }`}
      onClick={() => setTabName(optionName)}
    >
      <span className="w-full">{text}</span>
    </li>
  );
};

import Text from "@/components/UI/text";

export const NumberButton = ({ number }: { number: number | string }) => {
  return (
    <div className="grid justify-items-center items-cener w-20 h-20 cursor-pointer ">
      <Text color="white" size="4xl" className="flex text-center items-center">
        {number}
      </Text>
    </div>
  );
};

export const CategoryCard = ({ name }: { name: string }) => {
  return (
    <div className="grid gap-2">
      <div className="w-16 h-16 bg-main-gray rounded-lg"></div>
      <div className="grid justify-items-center items-center text-eerie-black">
        {name}
      </div>
    </div>
  );
};

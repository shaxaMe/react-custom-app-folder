import Filters from "./filter";
import PeopleTable from "./table";
function ProcessUsers() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Обработать</h1>
      </div>
      <Filters />
      <PeopleTable />
    </div>
  );
}

export default ProcessUsers;

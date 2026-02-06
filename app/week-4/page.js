import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

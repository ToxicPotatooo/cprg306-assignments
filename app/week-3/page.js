import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 tracking-tight">
          Shopping List
        </h1>
        <GroceryItemList />
      </div>
    </main>
  );
}

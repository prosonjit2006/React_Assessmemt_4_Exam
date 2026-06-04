import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import {
  setSearchTerm,
  setCategory,
  setSortOrder,
} from "../store/slices/product.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, selectedCategory, sortOrder } = useAppSelector(
    (state) => state.product,
  );

  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="max-w-9xl mx-auto py-8">
        <div className="flex flex-wrap gap-4 mx-14 justify-between mb-8">
          <h2 className="text-3xl font-bold">All Products</h2>

          <div className="flex gap-4">
            <input
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              type="text"
              placeholder="Search Products..."
              className="border rounded-lg px-4 py-2"
            />

            <select
              value={selectedCategory}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              className="border rounded-lg px-4 py-2"
            >
              <option value="all">All Categories</option>
              <option value="Fruits-vegetable">Fruits & Vegetables</option>
              <option value="proteins">Proteins</option>
              <option value="dairy">Dairy</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) =>
                dispatch(setSortOrder(e.target.value as "asc" | "desc" | ""))
              }
              className="border rounded-lg px-4 py-2"
            >
              <option value="">Sort By</option>
              <option value="asc">Price Low → High</option>
              <option value="desc">Price High → Low</option>
            </select>
          </div>
        </div>

        <Card
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
        />
      </div>
    </section>
  );
};

export default Home;

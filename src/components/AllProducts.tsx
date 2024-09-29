import {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "../app/service/testData";

const AllProducts = () => {
  const all_products = useGetAllProductsQuery({});
  const new_data = useGetProductByIdQuery(1);
  const [addProduct, { data, isError, isLoading }] = useAddProductMutation();
  console.log("data", data, "new_data", new_data);

  const handleAdd = () => {
    const body = {
      name: "New Product",
      price: 100,
    };
    addProduct(body);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add product</button>
    </div>
  );
};

export default AllProducts;

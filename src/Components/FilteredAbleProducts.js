import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
function FilteredAbleProducts(props) {
    return (
        <div className="w-[240px] p-[12px] bg-blue-200 flex justify-self-center flex-col">
            <SearchBar></SearchBar>
            <ProductTable neg={props.data}></ProductTable>
        </div>
    )
}
export default FilteredAbleProducts;
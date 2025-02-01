import ProductRow from "./ProductRow";
function ProductCategoryRow(props) {
    console.log(props.category, "This is product category row")
    return(
      <div>
        <h3 className="flex justify-self-center">{props.category.category}</h3>
        <ProductRow item = {props.category.items}></ProductRow>
      </div>
    )
  }
export default ProductCategoryRow;  
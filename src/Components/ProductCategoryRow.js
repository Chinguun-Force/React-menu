import ProductRow from "./ProductRow";
function ProductCategoryRow(props) {
    // console.log(props)
    return(
      <div>
        <h3 className="flex justify-self-center">{props.category}</h3>
        <ProductRow item = {props.category.items}></ProductRow>
      </div>
    )
  }
export default ProductCategoryRow;  
import ProductCategoryRow from "./ProductCategoryRow";
function ProductTable(props) {
    console.log(props , "This is product table")
    return(
      <div>
        <div className="flex justify-between">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
        <ProductCategoryRow category={props.neg[0]}></ProductCategoryRow>
      </div>      
    )
  }
  export default ProductTable;
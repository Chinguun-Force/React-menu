function ProductRow(props) {
    console.log(props, "This is product row")
    return(
      <div className="flex justify-between">
        <h3>{props.item[0].name}</h3>
        <h3>{props.item[0].price}</h3>
      </div>
    )
  }
  export default ProductRow;
function ProductRow(props) {
    console.log(props, "This is product row")
    return(
      <div className="flex justify-between">
        <h3>{props.item.name}</h3>
        <h3>{props.item.price}</h3>
      </div>
    )
  }
  export default ProductRow;
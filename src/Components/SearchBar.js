function SearchBar() {
    return (
      <form className="">
        <input type="text" placeholder="Search..." className="mr-12"/>
        <label>
          <input id="isCheck" type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
export default SearchBar;
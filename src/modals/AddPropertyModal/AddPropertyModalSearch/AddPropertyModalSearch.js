import "./AddPropertyModalSearch.css";

function AddPropertyModalSearch({ onQuery, queryValue }) {
  return (
    <form>
      <p>Search by Object Number</p>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => onQuery(e.target.value)}
        value={queryValue}
      />
    </form>
  );
}

export default AddPropertyModalSearch;

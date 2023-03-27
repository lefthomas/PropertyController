import "./AddPropertyModalSearch.css";

function AddPropertyModalSearch({ onQuery, queryValue }) {
  return (
    <form className="property-modal-search-container">
      <textarea
        type="text"
        placeholder="search"
        onChange={(e) => onQuery(e.target.value)}
        value={queryValue}
        className="property-modal-search-input"
      />
    </form>
  );
}

export default AddPropertyModalSearch;

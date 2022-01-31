const Search = (props) => {
  const { search, searchText, ...rest } = props;
  return (
    <div className="search-input text-right">
      <div className="form-group">
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder="Search something..."
          onChange={search}
        />
      </div>
    </div>
  );
};

export default Search;

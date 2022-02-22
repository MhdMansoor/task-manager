import useTranslation from "../CHC/translations";
const Search = (props) => {
  const { search, searchText, ...rest } = props;
  const translation = useTranslation();
  return (
    <div className="search-input text-right">
      <div className="form-group">
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder={translation.SearchSome}
          onChange={search}
        />
      </div>
    </div>
  );
};

export default Search;

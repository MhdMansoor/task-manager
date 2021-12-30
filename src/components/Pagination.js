import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../assets/styles/pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <button>
        <KeyboardArrowLeftIcon />
      </button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;

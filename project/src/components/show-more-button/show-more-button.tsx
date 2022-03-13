type ShowMoreButtonProps = {
    handleButtonClick: () => void;
}

function ShowMoreButton({handleButtonClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={handleButtonClick}
      >Show more
      </button>
    </div>);
}

export default ShowMoreButton;

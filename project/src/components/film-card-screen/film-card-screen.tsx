function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Seven Years in Tibet</a>
      </h3>
    </article>
  );
}

export default FilmCard;

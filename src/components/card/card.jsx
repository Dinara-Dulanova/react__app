import './card.css'



function Card({ title, subtitle, alt, src }) {
  return (
    <div className="card">
      <img
        src={src}
        alt={alt}
        className="card__image"
      />
      <p className="card__title">{title}</p>
      <p className="card__subtitle">{subtitle}</p>
    </div>
  );
}

export default Card

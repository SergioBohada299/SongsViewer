import Link from "next/link";

const Card = ({ song: { name, image, año, artista, link } }) => {
  //console.log("Card name", song);
  return (
    <Link
      href={{
        pathname: `song/${name}`,
        query: { name, image, año, artista, link }, // the data
      }}
    >
      <div className="song-card">
        <span>{name}</span>
        {image && <img src={image} />}

        <p>
          <b>Año de lanzamiento: </b> {año} <br />
          <b>Artista: </b>
          {artista}
        </p>
      </div>
    </Link>
  );
};

export default Card;

import { useRouter } from "next/router";
import Link from "next/link";
const SongDetail = () => {
  const router = useRouter();
  const data = router.query;
  const name = data?.name
  const image = data?.image
  const año = data?.año
  const artista = data?.artista
  const link = data?.link
 //const { name, image, año, artista, link } = data;
  console.log(data);
  return (
    <div className="song-container">
      <span>{name}</span>
      <img src={image} />
      <p>
        <b>Artista: </b>
        {artista}
        <br />
        <b>Año de lanzamiento: </b> {año}
      </p>
      <Link href={link} target="_blank">
        Ver en spotify
      </Link>
    </div>
  );
};

export default SongDetail;

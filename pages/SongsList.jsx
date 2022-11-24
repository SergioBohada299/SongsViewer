import Card from "../components/Card";

const SongsList = () => {
  const songs = [
    {
      name: "Feather",
      image:
        "https://i.discogs.com/Du-ERmtnVUqTrtgc8H7JofA4XCC8Vi-VcXmlaYlBado/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4OTQ4/Mi0xNTA5NzUwOTgy/LTMyOTYuanBlZw.jpeg",
      año: "2005",
      link: "https://open.spotify.com/track/2ej1A2Ze6P2EOW7KfIosZR?si=fad154f0952d4e36",
      artista: "Nujabes",
    },
    {
      name: "Ordinary Joe",
      image:
        "https://i.discogs.com/Du-ERmtnVUqTrtgc8H7JofA4XCC8Vi-VcXmlaYlBado/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4OTQ4/Mi0xNTA5NzUwOTgy/LTMyOTYuanBlZw.jpeg",
      año: "2005",
      link: "https://open.spotify.com/track/6zYBZOP6SuKa5JszwpAz7Z?si=cc480ed4b791472f",
      artista: "Nujabes",
    },
    {
      name: "Reflection Eternal",
      image:
        "https://i.discogs.com/Du-ERmtnVUqTrtgc8H7JofA4XCC8Vi-VcXmlaYlBado/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4OTQ4/Mi0xNTA5NzUwOTgy/LTMyOTYuanBlZw.jpeg",
      año: "2005",
      link: "https://open.spotify.com/track/6eGMwVVABqVTe9bWRIm498?si=d63d437157ec47e8",
      artista: "Nujabes",
    },
    {
      name: "Will he",
      image:
        "https://i.discogs.com/MBDsQUPbee1OvS-FJoJ6BttA4qRXKn6AvCddLBR2HIg/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjg3/MTg3LTE2NDMyNDE1/OTYtOTMwMy5qcGVn.jpeg",
      año: "2017",
      link: "https://open.spotify.com/track/7wvwXi9Z66dcH5t202vVkN?si=760c14d0bde544d0",
      artista: "Joji",
    },
    {
      name: "Pills",
      image:
        "https://i.discogs.com/MBDsQUPbee1OvS-FJoJ6BttA4qRXKn6AvCddLBR2HIg/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjg3/MTg3LTE2NDMyNDE1/OTYtOTMwMy5qcGVn.jpeg",
      año: "2017",
      link: "https://open.spotify.com/track/5iIixnRBYl3NJDBfzEOKWz?si=160addf736d849ba",
      artista: "Joji",
    },
    {
      name: "Demons",
      image:
        "https://i.discogs.com/MBDsQUPbee1OvS-FJoJ6BttA4qRXKn6AvCddLBR2HIg/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjg3/MTg3LTE2NDMyNDE1/OTYtOTMwMy5qcGVn.jpeg",
      año: "2017",
      link: "https://open.spotify.com/track/77UXyXy6qie0sOtLdEIH4A?si=28505c71b986429e",
      artista: "Joji",
    },
    {
      name: "81Summer",
      image:
        "https://i.discogs.com/9QO1fO-8zGDUBmzZFEl3qJkpgYw4MatILBztNdmH7d8/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTky/NjAtMTIxNzM2MTEy/OC5qcGVn.jpeg",
      año: "2008",
      link: "https://open.spotify.com/track/1R8DL1a9aFYdOzhv6sYjV1?si=ff29fa27808c4cd3",
      artista: "Uyama Hiroto",
    },
    {
      name: "Stratus",
      image:
        "https://i.discogs.com/9QO1fO-8zGDUBmzZFEl3qJkpgYw4MatILBztNdmH7d8/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTky/NjAtMTIxNzM2MTEy/OC5qcGVn.jpeg",
      año: "2008",
      link: "https://open.spotify.com/track/2rnno3yF5yMGOYpOqztW0Q?si=7650df164ba44733",
      artista: "Uyama Hiroto",
    },
    {
      name: "Fly Love Song",
      image:
        "https://i.discogs.com/9QO1fO-8zGDUBmzZFEl3qJkpgYw4MatILBztNdmH7d8/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTky/NjAtMTIxNzM2MTEy/OC5qcGVn.jpeg",
      año: "2008",
      link: "https://open.spotify.com/track/3AE4jmo39N2z8RC05mMWpS?si=ac8c76c6996d4cde",
      artista: "Uyama Hiroto",
    },
  ];

  return (
    <div className="songs-container">
      {songs.map((song, i) => (
        <Card song={song} key={i} />
      ))}
    </div>
  );
};

export default SongsList;

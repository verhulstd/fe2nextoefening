import Link from "next/link";
import { slugit } from "../helpers";
//CLIENT SIDE
export default function stations({ stations }) {
  return (
    <ul>
      {stations.map((station) => (
        <li key={station.id}>
          {station.name}{" "}
          <Link href={`/station/${station.id}/${slugit(station.name)}`}>
            <a>detail</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

//SERVER SIDE = NODEJS CODE
//SSG  => Static Site Generation
// ISG => Incremental Static Generation
export async function getStaticProps() {
  console.log("test");
  const response = await fetch("https://api.irail.be/stations/?format=json");
  const data = await response.json();
  const stations = data.station;
  return {
    props: {
      stations,
    },
    revalidate: 60 * 60, //every hour
  };
}

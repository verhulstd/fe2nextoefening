import { slugit } from "../../../helpers";

export default function StationDetail({ station }) {
  return <pre>{JSON.stringify(station, null, 2)}</pre>;
}
export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch("https://api.irail.be/stations/?format=json");
  const data = await response.json();
  const [station] = data.station.filter((s) => s.id === id);
  return {
    props: {
      station,
    },
    revalidate: 60 * 60 * 24, // every day
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://api.irail.be/stations/?format=json");
  const data = await response.json();
  const stations = data.station;
  return {
    paths: stations.map((station) => ({
      params: { id: station.id, name: slugit(station.name) },
    })),
    fallback: "blocking",
  };
}

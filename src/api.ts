export type EventItem = {
  id: string;
  name: string;
  location: string;
  language: string;
};

export async function getEvents({
  location,
  language,
}: Partial<{ language: string; location: string }>) {
  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), (Math.random() / 1.5) * 10000);
  });

  return events
    .filter((x) => {
      if (!location && !language) {
        return true;
      }
      return (
        (!!language && x.language.toLowerCase() === language) ||
        (!!location && x.location.toLowerCase() === location)
      );
    })
    .slice(0, 20);
}

const events = [
  { id: "1", name: "Viking Museet", location: "Århus", language: "dansk" },
  {
    id: "2",
    name: "The Sculpture Garden",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "3", name: "Den Gamle By", location: "Århus", language: "dansk" },
  {
    id: "4",
    name: "The Art Museum",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "5", name: "Moesgaard Museum", location: "Århus", language: "dansk" },
  { id: "6", name: "Lake Tour", location: "Silkeborg", language: "engelsk" },
  { id: "7", name: "Aros Kunstmuseum", location: "Århus", language: "dansk" },
  {
    id: "8",
    name: "Himmelbjerget Hike",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "9", name: "Tivoli Friheden", location: "Århus", language: "dansk" },
  {
    id: "10",
    name: "Silkeborg Museum",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "11", name: "Marselisborg Slot", location: "Århus", language: "dansk" },
  {
    id: "12",
    name: "Kayak Adventure",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "13", name: "Botanisk Have", location: "Århus", language: "dansk" },
  {
    id: "14",
    name: "Paper Factory Tour",
    location: "Silkeborg",
    language: "engelsk",
  },
  {
    id: "15",
    name: "Naturhistorisk Museum",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "16",
    name: "Søhøjlandet Cycling",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "17", name: "Aarhus Ø Rundtur", location: "Århus", language: "dansk" },
  {
    id: "18",
    name: "The Paper Mill Museum",
    location: "Silkeborg",
    language: "engelsk",
  },
  {
    id: "19",
    name: "Ebeltoft Fregatten",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "20",
    name: "River Boat Cruise",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "21", name: "Århus Street Food", location: "Århus", language: "dansk" },
  {
    id: "22",
    name: "The Silkeborg Bunker",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "23", name: "Steno Museet", location: "Århus", language: "dansk" },
  {
    id: "24",
    name: "Aquatic Center Visit",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "25", name: "Bakken Bears Kamp", location: "Århus", language: "dansk" },
  { id: "26", name: "Forest Walk", location: "Silkeborg", language: "engelsk" },
  {
    id: "27",
    name: "Aarhus Jazz Festival",
    location: "Århus",
    language: "engelsk",
  },
  {
    id: "28",
    name: "Silkeborg Kunstcenter",
    location: "Silkeborg",
    language: "dansk",
  },
  {
    id: "29",
    name: "Tangkrogen Festival",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "30",
    name: "Sky Mountain Walk",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "31", name: "Kalø Slotsruin", location: "Århus", language: "dansk" },
  {
    id: "32",
    name: "Nature Photography Tour",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "33", name: "Øst for Paradis", location: "Århus", language: "dansk" },
  {
    id: "34",
    name: "Veteran Train Ride",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "35", name: "Aarhus Festuge", location: "Århus", language: "dansk" },
  {
    id: "36",
    name: "Art by the Lake",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "37", name: "Randers Regnskov", location: "Århus", language: "dansk" },
  { id: "38", name: "Jutland Zoo", location: "Silkeborg", language: "engelsk" },
  {
    id: "39",
    name: "Moesgaard Vikingemarked",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "40",
    name: "Lake Monster Hunt",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "41", name: "Stadsarkivet", location: "Århus", language: "dansk" },
  {
    id: "42",
    name: "Silkeborg Outdoor Adventures",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "43", name: "Musikhuset", location: "Århus", language: "dansk" },
  {
    id: "44",
    name: "Historical Walk",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "45", name: "Børnenes Jord", location: "Århus", language: "dansk" },
  {
    id: "46",
    name: "The Lake District Tour",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "47", name: "Århus Festuge", location: "Århus", language: "dansk" },
  {
    id: "48",
    name: "Kayak on Silkeborg Lakes",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "49", name: "Kattegatcentret", location: "Århus", language: "dansk" },
  {
    id: "50",
    name: "The Silkeborg Manor",
    location: "Silkeborg",
    language: "engelsk",
  },
  {
    id: "51",
    name: "Læssøesgade Loppemarked",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "52",
    name: "Nature Trails",
    location: "Silkeborg",
    language: "engelsk",
  },
  {
    id: "53",
    name: "Marselisborg Dyrehave",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "54",
    name: "Sky Mountain Trails",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "55", name: "Aarhus Theater", location: "Århus", language: "engelsk" },
  {
    id: "56",
    name: "Silkeborg Kunstgalleri",
    location: "Silkeborg",
    language: "dansk",
  },
  {
    id: "57",
    name: "Bådtur på Århus Bugt",
    location: "Århus",
    language: "dansk",
  },
  {
    id: "58",
    name: "The Lake Museum",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "59", name: "Landsbymuseet", location: "Århus", language: "dansk" },
  {
    id: "60",
    name: "Fishing Tour",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "61", name: "Vikingemarked", location: "Århus", language: "dansk" },
  {
    id: "62",
    name: "The Old Town",
    location: "Silkeborg",
    language: "engelsk",
  },
  { id: "63", name: "Botanisk Have", location: "Århus", language: "dansk" },
];

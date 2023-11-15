import blockContent from "./block-content";
import people from "./people";
import person from "./person";
import plotSummaries from "./plot-summaries";
import plotSummary from "./plot-summary";
import match from "./match";
import nationality from "./nationality";
import category from "./category";
import post from "./video-post";
import author from "./author";
import club from "./club";
import competition from "./competition";
import tier from "./tier";
import livestream from "./livestream";

const schemaTypes = [
  post,
  livestream,
  match,
  person,
  club,
  competition,
  nationality,
  author,
  category,
  tier,
  blockContent,
  plotSummary,
  plotSummaries,
  people,
];

export default schemaTypes;

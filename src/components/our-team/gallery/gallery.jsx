import { useGetOurTeamQuery } from "../../../services/features/our-team/api";
import Card from "./card/card";

function Gallery() {
  useGetOurTeamQuery();

}

export default Gallery;

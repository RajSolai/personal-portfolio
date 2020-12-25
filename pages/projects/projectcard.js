import Axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectCard(props) {
  const getData = () => {
    let temp = [];
    Axios.get("./api/projects").then((res) => {
      temp = res.data;
    });
    return temp;
  };

  return (
    <>{getData().length == 0 ? <ProjectCard></ProjectCard> : <p>loading</p>}</>
  );
}

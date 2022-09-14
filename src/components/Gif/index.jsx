/* gif index */
import { useEffect, useState } from "react";
import axios from "axios";

const Gif = ()=> {
  const [dataGif, setDataGif] = useEstate([]);
  const [loading , setLoading] = useEffect(true);

  useEffect(()=> {
    axios.get()
    .then(({ data }))
  })
  return(
    <>
      <h1> estos son los difs del top 24</h1>
      {loading ? <p>lading...</p> : null}
    </>
  )
}

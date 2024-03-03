import "./index.css"
import { useEffect, useState } from 'react'
import { Table } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { FrameState } from '../../types'
import { Genres, Genre } from '../../oldalcontent'
import { current } from "@reduxjs/toolkit"
interface Props {

}
export function MainFrame(props: Props){
    const [genres, setGenres] = useState([] as Genre[])
    const frameState = useSelector((state: FrameState) => state.frameState)

    useEffect(() => {
        console.log('Genres fetch effect')
        async function load() {
          const response = await fetch('/oldalcontent.json')
          const genres = await response.json() as Genres;
          setGenres(genres.genres);
        }
        load()
    }, [])
    const currentGenre = genres.find((genre) => genre.genre === frameState);
    console.log(currentGenre)
    return <div className="frame">
        <h1 className="frameheader">{currentGenre?.title}</h1>
        <div className="framecontent">
            <Table className="scuffed">
                <tr>
                    <td className="scuffedleft">
                        <h1>Leírás</h1>
                        <p>{currentGenre?.leiras}</p>
                    </td>
                    <td className="scuffedright">
                        <h1>Adatok</h1>
                        <h2>{currentGenre?.categoria}</h2>
                        <h2>Spotify playlist:</h2>
                        <p>{currentGenre?.spotify_playlist}</p>
                        <h2>Artists in this category:</h2>
                        <ul>
                            <li><a href="#artistlink">{currentGenre?.eloadok[0]}</a></li>
                            <li><a href="#artistlink">{currentGenre?.eloadok[1]}</a></li>
                            <li><a href="#artistlink">{currentGenre?.eloadok[2]}</a></li>
                            <li><a href="#artistlink">{currentGenre?.eloadok[3]}</a></li>
                            <li><a href="#artistlink">{currentGenre?.eloadok[4]}</a></li>
                        </ul>
                    </td>
                </tr>
            </Table>
        </div>
    </div>
}
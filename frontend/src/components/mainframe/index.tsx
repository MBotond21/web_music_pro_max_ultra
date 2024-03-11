import "./index.css"
import { useEffect, useState } from 'react'
import { Table } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { FrameState } from '../../types'
import { Genres, Genre } from '../../oldalcontent'

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
    if(currentGenre?.genre == "Fooldal"){
        return <div className="frame" style={{backgroundImage: currentGenre ? `url(${currentGenre.hatterkep})` : 'none' }}>
            <h1 className="frameheader">{currentGenre?.title}</h1>
            <div className="framecontent">
                <Table className="scuffed">
                    <tr>
                        <td className="scuffedleft">
                            <h1>Leírás</h1>
                            <p>{currentGenre?.leiras}</p>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    }
    else{
        return <div className="frame" style={{backgroundImage: currentGenre ? `url(${currentGenre.hatterkep})` : 'none' }}>
            <h1 className="frameheader">{currentGenre?.title}</h1>
            <div className="framecontent">
                <Table className="scuffed">
                    <tr>
                        <td className="scuffedleft">
                            <h1>Leírás</h1>
                            <p>{currentGenre?.leiras}</p>
                        </td>
                        <td className="scuffedright">
                            <h2>Spotify playlist:</h2>
                            <p>{currentGenre?.spotify_playlist}</p>
                            <h2>Artists in this category:</h2>
                            <ul>
                                <li><a href={currentGenre?.elink[0]}>{currentGenre?.eloadok[0]}</a></li>
                                <li><a href={currentGenre?.elink[1]}>{currentGenre?.eloadok[1]}</a></li>
                                <li><a href={currentGenre?.elink[2]}>{currentGenre?.eloadok[2]}</a></li>
                                <li><a href={currentGenre?.elink[3]}>{currentGenre?.eloadok[3]}</a></li>
                                <li><a href={currentGenre?.elink[4]}>{currentGenre?.eloadok[4]}</a></li>
                            </ul>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    }
}
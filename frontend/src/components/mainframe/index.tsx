import "./index.css";
import { Table } from "react-bootstrap";

interface Props {

}
export function MainFrame(props: Props){
    return <div className="frame">
        <h1 className="frameheader">*insert title/name*</h1>
        <div className="framecontent">
            <Table className="scuffed">
                <tr>
                    <td className="scuffedleft">
                        <h1>Leírás</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor mauris a ipsum rhoncus, a aliquet neque ultrices. Aenean in sapien leo. Integer pellentesque accumsan purus eget facilisis. Praesent eleifend lacus sit amet sapien mollis bibendum. Ut a ornare sem, non elementum libero. Morbi rhoncus est vel purus sollicitudin semper. Nam nisl odio, ullamcorper in orci nec, vulputate sodales turpis. Mauris et mauris in mauris laoreet pulvinar vitae at elit. Nullam mollis dictum consectetur. Aenean sagittis sit amet arcu in auctor. Fusce consequat augue sit amet elit iaculis, a consectetur lacus iaculis. Sed ante mi, rutrum at pharetra ut, luctus sit amet tellus. Sed non auctor lorem, ut semper elit. Integer vel quam tortor. Proin ac diam aliquam, tincidunt mi eget, volutpat purus. Etiam laoreet dictum leo, vitae interdum purus.</p>
                    </td>
                    <td className="scuffedright">
                        <h1>Adatok</h1>
                        <h2>*insert category*</h2>
                        <h2>Spotify playlist:</h2>
                        <p>*insert spotify link*</p>
                        <h2>Artists in this category:</h2>
                        <ul>
                            <li><a href="#artistlink">Artist 1</a></li>
                            <li><a href="#artistlink">Artist 2</a></li>
                            <li><a href="#artistlink">Artist 3</a></li>
                            <li><a href="#artistlink">Artist 4</a></li>
                            <li><a href="#artistlink">Artist 5</a></li>
                        </ul>
                    </td>
                </tr>
            </Table>
        </div>
    </div>
}
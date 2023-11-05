import '../static/css/SkillsMedia.css'
import HTMLicon from '../static/img/languages/html.png';
import CSSicon from '../static/img/languages/CSS.png';
import JSicon from '../static/img/languages/JS.png';
import NodeJS from '../static/img/languages/NodeJS.png';
import Python from '../static/img/languages/Python.png';
import XAMLicon from '../static/img/languages/XAML.png';
import MySQLicon from '../static/img/languages/MySQL.png';
import SQLServer from '../static/img/languages/SQLServer.png';
import CSharp from '../static/img/languages/CS.png';
import dotnet from '../static/img/libs/dotnet.png';
import flask from '../static/img/libs/Flask.png';
import p5 from '../static/img/libs/p5.png';
import ReactJS from '../static/img/libs/REACT.png';

const languages = {
    HTML: HTMLicon,
    CSS: CSSicon,
    JS: JSicon,
    NodeJS: NodeJS,
    Python: Python,
    'C#': CSharp,
    XAML: XAMLicon,
    MySQL: MySQLicon,
    SQLServer: SQLServer,
};
const frameworks_libraries = {
    dotnet: dotnet,
    flask: flask,
    p5: p5,
    REACT: ReactJS
}

function Skills() {
    return (
        <div className='Card Skills'>
            <h2>skills</h2>
            <h4>Languages I work with ☕☠️</h4>
            <div className="languageImages">
                {Object.keys(languages).map((language) => (
                    <img src={languages[language]} className='Language' alt={language} />
                ))}
            </div>
            <h4>Frameworks/Libraries 🤯✨</h4>
            <div className='frameworks_libraries'>
                {Object.keys(frameworks_libraries).map((framework) => (
                    <img src={frameworks_libraries[framework]} className='frameworks_library' alt={framework} />
                ))}
            </div>
        </div>
    )
}


export default Skills;
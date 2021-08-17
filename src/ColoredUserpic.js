import {useState} from 'react';
import avatar from './avatar.png';
import './ColoredUserpic.css';

function ColoredUserpic(props) {
    const [hover, setHover] = useState(false);

    return (
        <div className="App-header">
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    height: props.size + 'px',
                    width: props.size + 'px',
                    borderRadius: '50%',
                    background: hover ? `linear-gradient(to right, ${props.hoverColors})` : `linear-gradient(to right, ${props.colors})`
                }}
            >
                <img src={avatar} alt={'Avatar'} style={{
                    width: props.size - 28 + 'px',
                    height: props.size - 28 + 'px',
                    borderRadius: '50%',
                    border: `${props.backgroundColor} solid ${props.margin}px`,
                    margin: props.colorWidth + props.margin + 'px'
                }}/>
            </div>
        </div>
    );
}

export default ColoredUserpic;

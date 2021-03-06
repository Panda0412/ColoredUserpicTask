import {useState} from 'react';
import avatar from './avatar.png';
import './ColoredUserpic.css';

function ColoredUserpic(props) {
    const [hover, setHover] = useState(false);
    const avatarBackgroundSize = props.size - 2 * props.colorWidth;
    const avatarSize = avatarBackgroundSize - 2 * props.margin;

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
                <div style={{
                    width: avatarBackgroundSize + 'px',
                    height: avatarBackgroundSize + 'px',
                    borderRadius: '50%',
                    background: props.backgroundColor,
                    margin: props.colorWidth + 'px'
                }}>
                    <img src={avatar} alt={'Avatar'} style={{
                        width: avatarSize + 'px',
                        height: avatarSize + 'px',
                        borderRadius: '50%',
                        margin: props.margin + 'px'
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default ColoredUserpic;

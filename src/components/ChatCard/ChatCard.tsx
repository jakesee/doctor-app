import { IconButton } from '@mui/material';
import { Wrapper, FaceImages, Menu, Content, Info } from './ChatCard.styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Episode } from '../../interfaces/episode';
import { IUser } from '../../interfaces/user';


interface ChatCardProps {
    episode: Episode;
    session: IUser;
    onClick: (e: Episode) => void;
    isActive?: boolean;
    onMore: (e: Episode) => void;
}

const ChatCard = ({ episode, session, onClick, isActive, onMore }: ChatCardProps) => {

    const { participants, messages } = episode;

    const faces = participants.filter((p) => p.id !== session.id);
    const lastMsg = messages ? messages[messages.length - 1] : null;

    return (
        <Wrapper type={episode.type}>
            <Content className={isActive ? 'isActive' : ''}>
                <FaceImages>
                    <img src={faces[0].imgUrl} alt={ faces[0].name }/>
                </FaceImages>
                <Info>
                    <div className="container" onClick={ () => onClick(episode) }>
                        <div>{faces.map((p, i) => (<span key={i}>{ p.name }</span>))}</div>
                        <div>{lastMsg && `${lastMsg.user.firstName}: ${lastMsg.message}`}</div>
                    </div>
                </Info>
                <Menu>
                    <IconButton onClick={() => onMore(episode)}><MoreVertIcon /></IconButton>
                </Menu>
            </Content>
        </Wrapper>
    )
}

export default ChatCard;

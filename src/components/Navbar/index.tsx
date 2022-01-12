import { Container, Wrapper } from "./styles";
import logo from '../../assets/avatar.jpg';

  
  
export function Navbar({username = "Lucas Mendes", avatarURL = logo}) {
    return (
        <Container>
            <Wrapper>
                <div className="user-box">
                    <div className="user-info">
                        <span className="user-name">
                            {username}
                        </span>
                        <p>Key Account</p>
                    </div>

                    <div className="user-avatar">
                        <img src={avatarURL}></img>
                    </div>
                    
                </div>
            </Wrapper>
        </Container>
    )
}
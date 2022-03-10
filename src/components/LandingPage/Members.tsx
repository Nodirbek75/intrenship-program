import React from "react";
import styled from "styled-components";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
];

const Members: React.FC = () => {
  return (
    <Wrapper>
      <Title>Preparation is the key to success</Title>
      <MembersImgWrapper>
        {avatars.map((el) => (
          <MemberImg key={el} src={el} />
        ))}
      </MembersImgWrapper>
      <Subtitle>Join 1,137 music creators, fans & professionals</Subtitle>
      <Link href="/">
        Read Felisha’s letter to you <ArrowLine src="assets/lineGray.svg" />
      </Link>
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 140px 0;
`;

const MembersImgWrapper = styled.div`
  margin: 36px 0;
`;

const MemberImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: red;
  margin-right: -20px;
  border: 3px solid ${(props) => props.theme.backgroundColor};
  object-fit: cover;
`;

const Title = styled.text`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35.53px;
  color: rgba(255, 255, 255, 0.6);
`;

const Subtitle = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  color: ${(props) => props.theme.grey};
  margin-bottom: 16px;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  color: ${(props) => props.theme.grey};
  margin-bottom: 16px;
`;

const ArrowLine = styled.img`
  margin-left: 10px;
`;

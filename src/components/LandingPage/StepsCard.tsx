import React from "react";
import styled from "styled-components";

const StepsCard: React.FC = () => {
  return (
    <Wrapper>
      <SingleCard>
        <TitleWrapper>
          <Title>01</Title>
          <Arrow src="assets/lineGold.svg" />
        </TitleWrapper>
        <Subtitle>Listen</Subtitle>
        <ListItemsWrapper>
          <ListItem>Discover new artists </ListItem>
          <ListItem>Give your opinion on tracks </ListItem>
          <ListItem>Invite talented artists to our community </ListItem>
        </ListItemsWrapper>
      </SingleCard>
      <SingleCard>
        <TitleWrapper>
          <Title>02</Title>
          <Arrow src="assets/lineBlue.svg" />
        </TitleWrapper>
        <Subtitle>Support</Subtitle>
        <ListItemsWrapper>
          <ListItem>Join teams and promote artists </ListItem>
          <ListItem>Spread the word about new talent</ListItem>
          <ListItem>Share your fav tracks on social media</ListItem>
        </ListItemsWrapper>
      </SingleCard>
      <SingleCard>
        <Title lastStep={true}>03</Title>
        <Subtitle lastStep={true}>Network</Subtitle>
        <ListItemsWrapper>
          <ListItem>Meet other aspiring music pros</ListItem>
          <ListItem>Cohost & organize music meetups</ListItem>
          <ListItem>Attend in-app networking events</ListItem>
        </ListItemsWrapper>
      </SingleCard>
    </Wrapper>
  );
};

export default StepsCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 77px 53px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-wrap: wrap;
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  :last-child {
    margin-right: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.img`
  margin-left: 30px;
  width: 70%;
`;

const Title = styled.text<{ lastStep?: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  color: ${(props) => (props.lastStep ? props.theme.purple : props.theme.gold)};
`;

const Subtitle = styled.text<{ lastStep?: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => (props.lastStep ? props.theme.purple : props.theme.gold)};
  margin: 26px 0;
`;

const ListItemsWrapper = styled.ul``;

const ListItem = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: ${(props) => props.theme.white};
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;

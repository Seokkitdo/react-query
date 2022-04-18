import React from 'react';
import styled from '@emotion/styled/macro';
import PokomonList from '../components/PokemonList';

const Base = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #d34f49;
  font-size: bold;
`;

const Description = styled.small`
  color: #6b7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(960x, -96px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IndexPage: React.FC = () => {
  return (
    <Base>
      <Title>Pokedex</Title>
      <Description>
        The Pokedex contains detailed stats for every creature from the Pokemon
        game
      </Description>
      <PokomonList />
      <ImageWrapper>
        <Image src="/assets/poketball.svg" />
      </ImageWrapper>
    </Base>
  );
};

export default IndexPage;

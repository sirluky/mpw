import React, { Component } from 'react';
import {
  Title,
  Card,
  CardContent,
  CardImage,
  Box,
  Columns,
  Column,
} from 'bloomer';
import './projekty.scss';
import Preview1 from '../gameoflife.png';
import Preview2 from '../flappybird.png';

export default class projekty extends Component {
  render() {
    return (
      <div className="projekty">
        <Title>Projekty</Title>
        <p>Zde budou moje projekty.</p>
        <Columns>
          <Column isSize="1/3">
            <Box className="projekt">
              <Card style={{ border: 'none', boxShadow: 'none' }}>
                <CardImage>
                  <img src={Preview1} alt="game of life preview" />
                </CardImage>
                <CardContent>
                  <Title hasTextAlign="centered" className="arial">
                    Game of Life
                  </Title>
                </CardContent>
              </Card>
            </Box>
          </Column>
          <Column isSize="1/3">
            <Box className="projekt">
              <Card style={{ border: 'none', boxShadow: 'none' }}>
                <CardImage>
                  <img src={Preview2} alt="game of life preview" />
                </CardImage>
                <CardContent>
                  <Title hasTextAlign="centered" className="arial">
                    Flappy Bird
                  </Title>
                </CardContent>
              </Card>
            </Box>
          </Column>
          <Column isSize="1/3">
            <Box className="projekt">
              <Card style={{ border: 'none', boxShadow: 'none' }}>
                <CardImage>
                  <img
                    src="https://via.placeholder.com/640x360"
                    alt="game of life preview"
                  />
                </CardImage>
                <CardContent>
                  <Title hasTextAlign="centered" className="arial">
                    Game of Life
                  </Title>
                </CardContent>
              </Card>
            </Box>
          </Column>
        </Columns>
      </div>
    );
  }
}

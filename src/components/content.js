import React, { Component } from 'react';
import './content.scss';
import { Content, Container, Hero, HeroBody, Title } from 'bloomer';

export default class Header extends Component {
  render() {
    return (
      <Hero>
        <HeroBody>
          <Content>
            <Container className="clanek">
              <Title>Článek</Title>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae dolorum minima aliquam ullam, fuga suscipit quaerat,
                iusto, beatae et rerum eum rem dolorem quam ut architecto
                ducimus. Reprehenderit, itaque reiciendis! Animi, aliquam
                consectetur. Animi maxime doloremque dicta aut ea perferendis
                repellendus ratione dignissimos dolor facilis non, sequi error,
                ad dolores minima. Officiis dicta quibusdam, laboriosam fugit
                recusandae iusto nulla voluptatibus! Quos quo blanditiis debitis
                voluptas tempora temporibus dolorum enim, accusamus quia
                nesciunt, natus nihil pariatur, cum alias eius incidunt ut sint.
                Mollitia praesentium iusto voluptas sunt iure. Quo, recusandae
                earum.
              </p>
            </Container>
          </Content>
        </HeroBody>
      </Hero>
    );
  }
}

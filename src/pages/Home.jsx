import React from 'react';
import '../styles/home.css';

import { Col, Container, Row } from 'reactstrap';

import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials';
import ServiceList from '../services/ServiceList';
import SearchBar from '../shared/SearchBar';
import Subtitle from '../shared/Subtitle';

import cities from '../assets/data/Cidades.json';

import experienceImg from '../assets/images/experience.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know Before You Go'} />
                <img className='' src={worldImg} alr='worldImg' />
              </div>
              <h1>
                Viajar abre portas para{' '}
                <span className='highlight'>
                  momentos e memórias inesquecíveis!
                </span>
              </h1>
              <p className='justify-text'>
                Se você está em busca de uma viagem inesquecível, repleta de
                aventuras, culturas fascinantes e paisagens exóticas, então
                temos o roteiro perfeito para você!
                <br />
                Nosso roteiro de viagem foi pensado para oferecer o máximo de
                conforto e comodidade, com hospedagens em hotéis de qualidade,
                transporte seguro e confortável, além de um itinerário bem
                planejado para que você possa aproveitar ao máximo cada momento
                da viagem.
                <br />
                Não perca mais tempo procurando por uma viagem dos sonhos, pois
                ela está aqui, pronta para ser realizada.
                <br />
                <span className='highlight'>
                  Entre em contato conosco agora mesmo e garanta sua vaga nessa
                  aventura incrível!
                </span>
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt='heroImg' />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box hero__video-box mt-4'>
              <video src={heroVideo} alt='heroVideo' controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={heroImg02} alt='heroImg' />
            </div>
          </Col>
          <SearchBar data={cities || []} />
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>What offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />
                <h2 className=''>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Exercitationem nobis expedita ut sint voluptas consequatur quo
                  et quis, incidunt voluptatum earum quaerat quasi aliquam ex
                  distinctio consectetur atque.
                </p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our customers tour galerry
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;

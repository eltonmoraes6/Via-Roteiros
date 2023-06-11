import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup } from 'reactstrap';

import '../styles/search-bar.css';
import { Searching } from '../utilities/searching';
import LoadingSpinner from './LoadingSpinner';

const SearchBar = ({ data }) => {
  // const navigate = useNavigate();
  // const [leavingFrom]= useState('');
  // const [goingTo]= useState('');

  // const res = await fetch(
  //   `${BASE_URL}/tours/search/getBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
  // );

  // navigate(
  //   `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
  //   { state: result.data }
  // );
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const [filterSearch, setFilterSearch] = useState([]);
  const [outboundTravelDate, setOutboundTravelDate] = useState('');

  const [returnTripDate, setReturnTripDate] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(function () {
      console.log(
        location,
        moment(outboundTravelDate).format('DD/MM/YYYY'),
        moment(returnTripDate).format('DD/MM/YYYY'),
        maxGroupSize
      );
      setIsLoading(false); // Hide loading screen
    }, 3000);
  };

  const handleFilter = (event) => {
    setLocation(event.target.value);
    setFilterSearch(Searching(data, location));
  };

  useEffect(() => {
    if (location === '') {
      setFilterSearch([]);
    }
  }, [location]);

  function handleClickAutoComplete(value) {
    setLocation(value.Nome);
    setFilterSearch([]);
  }

  return (
    <Col lg='12'>
      {isLoading && <LoadingSpinner value={25} />}

      <div className='search__bar'>
        <Form autoComplete='off' className='d-flex align-items-center gap-4'>
          <div className='form__group'>
            <FormGroup>
              <div className='d-flex align-items-center gap-3'>
                <span>
                  <i className='ri-map-pin-line'></i>
                </span>
                <h6>Destino</h6>
              </div>

              <input
                type='text'
                name='location'
                id='location'
                placeholder='Para onde você quer ir?'
                onChange={handleFilter}
                value={location}
                required
              />
              {filterSearch.length !== 0 && (
                <div className='autocomplete'>
                  <div className='autocomplete-items'>
                    {filterSearch.slice(0, 15).map((value) => (
                      <div
                        className='data__item'
                        key={value.ID}
                        onClick={() => handleClickAutoComplete(value)}
                      >
                        {value.Nome}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </FormGroup>
          </div>
          {/* Outbound Travel Date */}
          <div className='form__group'>
            <FormGroup>
              <div className='d-flex align-items-center gap-3'>
                <span>
                  <i className='ri-calendar-check-fill'></i>
                </span>
                <h6>Data da viagem de ida</h6>
              </div>
              <input
                type='date'
                id='outboundTravelDate'
                required
                defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                onChange={(e) => setOutboundTravelDate(e.target.value)}
              />
            </FormGroup>
          </div>
          {/* Return Trip Date */}
          <div className='form__group'>
            <FormGroup>
              <div className='d-flex align-items-center gap-3'>
                <span>
                  <i className='ri-calendar-check-fill'></i>
                </span>
                <h6>Data da viagem de volta</h6>
              </div>
              <input
                type='date'
                id='returnTripDate'
                required
                defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                onChange={(e) => setReturnTripDate(e.target.value)}
              />
            </FormGroup>
          </div>
          {/* MaxGroupSize */}
          <div className='form__group'>
            <FormGroup>
              <div className='d-flex align-items-center gap-3'>
                <span>
                  <i className='ri-group-line'></i>
                </span>
                <h6>Quantidade de Pessoas</h6>
              </div>

              <input
                type='number'
                name='people'
                id='maxGroupSize'
                placeholder='0'
                min='0'
                value={maxGroupSize}
                onChange={(e) => setMaxGroupSize(e.target.value)}
                required
              />
            </FormGroup>
          </div>

          <Button
            type='button'
            onClick={handleClick}
            className='form__group-button'
            disabled={isLoading}
          >
            <div className='d-flex align-items-center gap-3'>
              Buscar
              <i className='ri-search-line'></i>
            </div>
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

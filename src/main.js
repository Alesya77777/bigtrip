import {createTripInfoTemplate} from './components/trip-info';
import {createTripCostTemplate} from './components/cost';
import {createSiteMenuTemplate} from './components/site-menu';
import {createFiltersTemplate} from './components/filter';
import {createSortTripTemplate} from './components/sort';
import {createTripWrapper} from './components/wrapper';
import {createDateTrip} from './components/date';
import {createPointTripTemplate} from './components/point';
import {createFormTripTemplate} from './components/form';


const COUNT_POINT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainTrip = document.querySelector('.trip-main');


const contriolsTrip = document.querySelector('.trip-main__trip-controls');
const tripEvents = document.querySelector('.trip-events');


render(mainTrip, createTripInfoTemplate(), 'afterbegin');
render(contriolsTrip , createTripCostTemplate(), 'beforebegin');
render(contriolsTrip, createSiteMenuTemplate(),'afterbegin');
render(contriolsTrip, createFiltersTemplate(),'beforeend');
render(tripEvents, createSortTripTemplate(), 'afterbegin');

const sortTripEvents = document.querySelector('.trip-events__trip-sort');
render(sortTripEvents, createTripWrapper(), 'afterend');

const tripDay = document.querySelector('.trip-days__item');
render(tripDay, createDateTrip(), 'afterbegin');


const eventsList = document.querySelector('.trip-events__list');
for (let i = 0; i < COUNT_POINT; i++) {
  render(eventsList, createPointTripTemplate(), 'beforeend');
}


const eventItem = document.querySelector('.trip-events__item');
render(eventItem, createFormTripTemplate(), 'beforebegin');











import CalcEdit from './calculator-edit.js';

const LimitCalculator = (() => {
  const {registerBlockType} = wp.blocks;

  registerBlockType('dashifen/limit-calculator', {
    title: 'SR5 Limit Calculator',
    category: 'widgets',
    description: 'A block that adds an SR5 limit calculator to the post.',
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M552 0c-13.25 0-24 10.74-24 24v48h-48V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H240V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V24C48 10.74 37.25 0 24 0S0 10.74 0 24v476c0 6.63 5.37 12 12 12h24c6.63 0 12-5.37 12-12v-60h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v60c0 6.63 5.37 12 12 12h24c6.63 0 12-5.37 12-12V24c0-13.26-10.75-24-24-24zM96 120v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v112H336v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V120h48zm384 272v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H240v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V280h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v112h-48z"/>
      </svg>,
    attributes: {},
    supports: {
      customClassName: false
    },
    edit: (props) => {
      return CalcEdit(props);
    },
    save: () => {
      return null;
    }
  });
});

export default LimitCalculator;
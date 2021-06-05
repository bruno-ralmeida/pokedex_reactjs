import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }


  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    background-color: #edeceb;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  .bug {
    background: #a8b820;
  }

  .dark {
    background: #705848;
  }

  .dragon {
    background: #7038f8;
  }

  .electric {
    background: #f8d030;
  }

  .fairy {
    background: #ee99ac;
  }

  .fighting {
    background: #c03028;
  }

  .fire {
    background: #f08030;
  }

  .flying {
    background: #a890f0;
  }

  .grass {
    background: #78c850;
  }

  .ghost {
    background: #705898;
  }

  .ground {
    background: #e0c068;
  }

  .ice {
    background: #98d8d8;
  }

  .normal {
    background: #a8a878;
  }

  .poison {
    background: #a040a0;
  }

  .psychic {
    background: #f85888;
  }

  .rock {
    background: #b8a038;
  }

  .steel {
    background: #b8b8d0;
  }

  .water {
    background: #6890f0;
  }
  
`;

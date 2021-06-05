import styled from 'styled-components';

export const Container = styled.div`
  padding: 2em 4em;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      list-style: none;
      width: 350px;
    }
  }
`;

export const Card = styled.section`
  background-color: #fff;
  display: flex;
  height: 300px;
  margin: 1em 0.5em;
  overflow: hidden;
  padding: 0.5em;
  position: relative;

  section {
    flex: 1;
    position: relative;

    h3 {
      bottom: 0;
      position: absolute;
      text-transform: capitalize;
    }

    img {
      height: 250px;
      padding: 1em;
      position: absolute;
      width: 100%;
      z-index: 10;
    }

    span {
      border-radius: 100% 0% 100% 0% / 0% 78% 22% 100%;
      height: 550px;
      left: 20%;
      position: absolute;
      top: 25%;
      transform: translate(-40%, -50%);
      width: 500px;

      &.secundary {
        height: 250px;
        left: 20%;
        position: absolute;
        top: 25%;
        transform: translate(-40%, -50%);
        width: 250px;
        border-radius: 71% 29% 100% 0% / 0% 53% 47% 100%;
      }
    }
  }

  aside {
    position: absolute;
    right: 0;

    div {
      border-radius: 50%;
      height: 50px;
      margin: 0.5em;
      width: 50px;
      z-index: 11;

      img {
        height: 50px;
        padding: 0.5em;
        width: 50px;
      }
    }
  }
`;

import React from 'react';
import { findDOMNode } from 'react-dom';
import { TweenLite, Power2 } from 'gsap';

export const fadeIn = (Component) => {
  return class FadeIn extends React.Component {
    componentDidMount() {
      const el = findDOMNode(this);
      TweenLite.fromTo(el, 0.5, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Power2.easeOut, 
        y: -500,
        delay: 0.2,
      });
    }
    render() {
      return (<Component />);
    }
  };
};

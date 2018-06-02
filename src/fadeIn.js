import React from 'react';
import { findDOMNode } from 'react-dom';
import { TweenLite, Power2 } from 'gsap';

export const fadeIn = (Component) => {
  return class FadeIn extends React.Component {
    constructor(props) {
      super(props);
    }
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
    enlarge = (e) => {
      const el = e.currentTarget;
      console.log('enlarge', el)

      TweenLite.to(el, .3, {
        scale: 1.16
      });
    }
    shrink = (e) => {
      const el = e.currentTarget;

      TweenLite.to(el, .3, {
        scale: 1
      });
    }
    render() {
      console.log(this.props)
      return (<Component {...this.props} onHoverIn={this.enlarge} onHoverOut={this.shrink}/>);
    }
  };
};

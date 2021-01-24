import React from 'react';
import { TweenMax, SlowMo } from 'gsap';

class Loading extends React.Component {
  componentDidMount() {
    TweenMax.staggerTo('.dot', 2, {
      x:220,
      backgroundColor:'#ca68fd',
      repeat:-1,
      ease:SlowMo.ease.config(0.5,0.4,false)
    }, 0.4);

    TweenMax.staggerFrom('.dot', 2, {
      opacity:0,
      scale:0.7,
      repeat:-1,
      ease:SlowMo.ease.config(0.5,0.4,true)
    }, 0.4);
  }

  render() {
    return (
      <div className="loading-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    )
  }
}

export default Loading;
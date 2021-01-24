import React, { Component } from 'react';
import Logo from './Logo';
import Loading from './Loading';
import { fadeIn } from './fadeIn';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      logos: [
        {
          'name': 'LinkedIn',
          'className': 'fab fa-linkedin-in', 
          'url' : '//www.linkedin.com/in/angelascerbo'
        },
        {
          'name': 'AngelList',
          'className': 'fab fa-angellist',
          'url': '//angel.co/angela-scerbo' 
        },
        {
          'name': 'GitHub',
          'className': 'fab fa-github',
          'url': '//github.com/angelascerbo'
        }, 
        {
          'name': 'SoundCloud',
          'className': 'fab fa-soundcloud',
          'url': '//soundcloud.com/ams923/likes'
        }
      ]
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }
  render() {
    const { isLoading, logos } = this.state;
    const logoComponents = logos.map((logo, i) => {
      const component = props => {
        return (
          <Logo 
            name={logo['name']} 
            className={logo['className']} 
            url={logo['url']} 
            key={i}
          />
        )
      }; 

      const AnimatedComponent = fadeIn(component);

      return <AnimatedComponent key={i}/>;
    });

    const app = isLoading ? 
      (
        <Loading/>
      )
      : (
        <figure className="main-image">
          <header>
            <h4>hello,</h4>
            <h1>I'm Angela</h1>
            <div className="subtitle">
              <h2>a software engineer building React apps in Berlin. <span className="find-me">you can find me here:</span></h2>
            </div>
            <div className="logos-container">
              { logoComponents }
            </div>
          </header>
        </figure>
      )

    return (
      <main className="app">
        { app }
      </main>
    );
  }
}

export default App;

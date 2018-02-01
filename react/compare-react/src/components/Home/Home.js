import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    let heading = "Soaring to new heights";
    let subheading = "Spicy jalapeno bacon ipsum dolor amet laboris pig incididunt biltong tempor shankle, consequat porchetta et nulla chuck occaecat short loin magna. Ham hock mollit tail, bresaola capicola laborum leberkas corned beef cupidatat rump proident id fugiat pastrami.";

    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{ heading }</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{ subheading }</h2>
              </div>
              <a className="button is-large is-primary" id="learn">Learn more</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title"><strong>We provide bacon and cured meats so your business can succeed against the horrors of veganism!</strong></p>
              </div>
              <div className="column">
                <p>Bacon ipsum dolor amet cupidatat sausage tri-tip short ribs deserunt in kevin. Andouille proident adipisicing, in t-bone chicken kielbasa sed nulla turducken. Cupim excepteur short ribs bacon nostrud fugiat</p>
              </div>
            </div>
          </div>

          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">"I think it was absolutely delicious!"</p>
                  <p className="subtitle">- Bacon Meatson</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">"Veggies are like white meat chicken only worse!!"</p>
                  <p className="subtitle">- Chuck Roast</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">"Ich ein Hamburger!"</p>
                  <p className="subtitle">- Weiner Schnitzel</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

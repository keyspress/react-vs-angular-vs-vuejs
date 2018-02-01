import React, { Component } from 'react';
import './Faq.css';

class Faq extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="section">
            <h1 className="title">FAQ</h1>
            <h2 className="subtitle is-4">Bacon ipsum and so on and so forth</h2>

            <div className="columns" v-if="faqs && faqs.length">
              <div className="column is-one-third" v-for="faq of faqs">
                <div className="card">
                  <div className="card-content">
                    <p className="title">{ faq.title }</p>
                    <p className="answer">{ faq.body }</p>
                  </div>
                </div>
              </div>
            </div>


          </section>
        </div>
      </div>
    );
  }
}

export default Faq;

import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStats = e => {
    const statName = e.target.dataset.name;
    this.setState(prevState => ({ [statName]: prevState[statName] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) {
      return 0;
    }

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button
            type="button"
            onClick={e => {
              this.incrementStats(e);
            }}
            data-name="good"
          >
            Good
          </button>
          <button
            type="button"
            onClick={e => {
              this.incrementStats(e);
            }}
            data-name="neutral"
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={e => {
              this.incrementStats(e);
            }}
            data-name="bad"
          >
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              <span>Good:</span>
              <span>{this.state.good}</span>
            </li>
            <li>
              <span>Neutral:</span>
              <span>{this.state.neutral}</span>
            </li>
            <li>
              <span>Bad:</span>
              <span>{this.state.bad}</span>
            </li>
            <li>
              <span>Total:</span>
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              <span>Positive feedback:</span>
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

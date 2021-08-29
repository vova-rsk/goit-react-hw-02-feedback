import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

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
    const {
      state: { good, neutral, bad },
      incrementStats,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Section title="Виджет отзывов">
        <FeedbackOptions options={1} onLeaveFeedback={incrementStats} />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;

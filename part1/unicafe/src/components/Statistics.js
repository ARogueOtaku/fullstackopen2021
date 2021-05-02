import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  return good + neutral + bad === 0 ? (
    "No feedback given"
  ) : (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + bad + neutral} />
        <Statistic
          text="average"
          value={((good - bad) / (good + bad + neutral)).toFixed(1)}
        />
        <Statistic
          text="positive"
          value={((good / (good + bad + neutral)) * 100).toFixed(1) + " %"}
        />
      </tbody>
    </table>
  );
};

export default Statistics;

import React from 'react';

import * as Cookies from 'js-cookie';

import { TextInput } from './TextInput';
import { Slider } from './Slider';
import { TextDisplay } from './TextDisplay';
import { LineChart } from './LineChart';

import styles from './App.scss';

const OUTPUT_HEIGHT = 50;

interface IAppState {
  text: string;
  textDisplayWidth: number;
  textDisplayWidthHistory: number[];
  viewportWidth: number;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      text: Cookies.get('text') || 'some text',
      textDisplayWidth: Cookies.get('textDisplayWidth') || 200,
      textDisplayWidthHistory: [],
      viewportWidth: window.innerWidth
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate() {
    Cookies.set('text', this.state.text);
    Cookies.set('textDisplayWidth', this.state.textDisplayWidth);
  }

  updateWindowDimensions = () => {
    const maxWidth = this.calculateMaximumDisplayWidth();

    this.setState({
      viewportWidth: window.innerWidth,
      textDisplayWidth: (this.state.textDisplayWidth > maxWidth ?
        maxWidth : this.state.textDisplayWidth)
    });
  };

  handleChange = field => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleWidthSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);

    this.setState(state => ({
      textDisplayWidth: value,
      textDisplayWidthHistory: state.textDisplayWidthHistory.concat(value)
    }));
  };

  calculateMaximumDisplayWidth() {
    return Math.round(this.state.viewportWidth * 0.90);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>Fit text!</h1>
          <p className={styles.intro}>
            Write some text on the field below, select a width for a container
            and see in real time how the text fits in the container with the largest
            font size possible!
          </p>
        </div>

        <div className={styles.section}>
          <label htmlFor="text-input" className={styles.label}>Text</label>
          <TextInput
            id="text-input"
            onChange={this.handleChange('text')}
            value={this.state.text}
          />
        </div>
        <div className={styles.section}>
          <label htmlFor="width-slider" className={styles.label}>
            Width <small>({this.state.textDisplayWidth}px)</small>
          </label>
          <Slider
            id="width-slider"
            min={this.state.viewportWidth * 0.05}
            max={this.calculateMaximumDisplayWidth()}
            value={this.state.textDisplayWidth}
            onChange={this.handleWidthSliderChange}
          />
        </div>

        <div className={styles.section}>
          <div className={styles.label}>Output</div>
        </div>

        <TextDisplay
          className={styles.textDisplay}
          width={this.state.textDisplayWidth}
          height={OUTPUT_HEIGHT}
        >
          {this.state.text}
        </TextDisplay>

        <div className={styles.chartWrapper}>
          <LineChart
            name="Display Width"
            data={this.state.textDisplayWidthHistory}
          />
        </div>
      </div>
    );
  }
}

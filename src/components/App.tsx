import React from 'react';

import { TextInput } from './TextInput';
import { Slider } from './Slider';
import { TextDisplay } from './TextDisplay';

import styles from './App.scss';

const OUTPUT_HEIGHT = 50;

interface IAppState {
  text: string;
  textDisplayWidth: number;
  viewportWidth: number;
}

export class App extends React.Component<any, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      text: 'some text',
      textDisplayWidth: 200,
      viewportWidth: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <label htmlFor="text-input" className={styles.label}>Text</label>
          <TextInput
            id="text-input"
            onChange={this.handleChange('text')}
            value={this.state.text}
          />
        </div>
        <div className={styles.section}>
          <label htmlFor="width-slider" className={styles.label}>Width</label>
          <Slider
            id="width-slider"
            min={this.state.viewportWidth * 0.05}
            max={this.state.viewportWidth * 0.90}
            value={this.state.textDisplayWidth}
            onChange={this.handleChange('textDisplayWidth')}
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
      </div>
    )
  }
}

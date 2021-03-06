import React from 'react';

export interface ITextDisplayProps {
  className?: string;
  width: number;
  height: number;
  children?: any;
}

const $ = (window as any).$;

const fitText = (element) => {
  $(element).textfill();
};

export class TextDisplay extends React.Component<ITextDisplayProps, {}> {
  ref = null;

  constructor(props) {
    super(props);
  }

  setRef = (ref) => {
    this.ref = ref;
  };

  componentDidMount() {
    fitText(this.ref);
  }

  componentDidUpdate() {
    fitText(this.ref);
  }

  dimensions() {
    return {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={this.dimensions()}
        ref={this.setRef}
      >
        <span>{this.props.children}</span>
      </div>
    );
  }
}

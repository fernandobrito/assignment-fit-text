import React from "react";

import $ from 'jquery';

export interface ITextDisplayProps {
  className?: string;
  width: number;
  height: number;
}

const fitText = (element) => {
  (window as any).$(element).textfill();
};

export class TextDisplay extends React.Component<ITextDisplayProps, any> {
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

  componentWillReceiveProps() {
    setTimeout(() => fitText(this.ref), 100);
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
    )
  }
}

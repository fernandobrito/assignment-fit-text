import React from "react";

import styles from './Slider.scss';

export interface ISliderProps {
  id?: string;
  value: number;
  min?: number;
  max?: number;
  onChange(event: React.FormEvent<HTMLInputElement>): any;
}

export const Slider: React.SFC<ISliderProps> = (props) => (
  <input
    id={props.id}
    type="range"
    className={styles.input}
    min={props.min}
    max={props.max}
    value={props.value}
    onChange={props.onChange}
  />
);

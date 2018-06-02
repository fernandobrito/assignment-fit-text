import React from 'react';

import styles from './TextInput.scss';

export interface ITextInputProps {
  id?: string;
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): any;
}

export const TextInput: React.SFC<ITextInputProps> = props => (
  <input
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    className={styles.input}
  />
);

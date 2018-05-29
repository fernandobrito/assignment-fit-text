import React from "react";

import styles from "./Hello.scss";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1 className={styles.title}>Hello from {props.compiler} and {props.framework}!</h1>;

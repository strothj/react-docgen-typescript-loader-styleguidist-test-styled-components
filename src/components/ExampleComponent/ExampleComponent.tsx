import React, { SFC } from "react";

interface IProps {
  color: string;
}

export const ExampleComponent: SFC<IProps> = ({ color }) => <div>{color}</div>;

import * as React from 'react';
import './Hello.css';

interface IHelloProps { compiler: string; framework: string; }

/*
export const Hello = (props: IHelloProps) => (
  <h1>Hello from {props.compiler} and {props.framework}!</h1>
);
*/

export class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return (
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    );
  }
}

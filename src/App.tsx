import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';

//conventional props
function Heading({ title }: { title: string; }) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingContent({ children, title }: { children: ReactNode; title: string; }): ReactElement {
  return (
    <>
      <h1>{title}</h1>
      <h1>{children}</h1>
    </>
  )
}

//defaultProps
const defaultContainerProps = {
  heading: <strong>My heading</strong>
};

type HeadingDefaultProps = { children: ReactNode } & typeof defaultContainerProps

function HeadingDefault({ children, heading }: HeadingDefaultProps): ReactElement {
  return (
    <>
      <h1>{heading}</h1>
      <h1>{children}</h1>
    </>
  )
}

HeadingDefault.defaultProps = defaultContainerProps

//Functional Props
function TextWithNumber({
  children
}: {
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)

  return (
    <div>
      {children(state)}
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}

//List 
function List<ListItem>({
  items,
  render
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>))}
    </ul>
  )
}


function App() {
  return (
    <div>
      <TextWithNumber>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List items={['Mack', 'Jack', 'Black']} render={(item: string) => <div>{item.toLowerCase()}</div>} />
    </div>
  );
}

export default App;

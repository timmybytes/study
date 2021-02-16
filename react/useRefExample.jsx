function App() {
  const count = useRef(0);

  return <button onClick={() => count.current++}>{count.current}</button>;
}

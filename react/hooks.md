# Hooks

## useEffect

`useEffect` allows access to the component lifecycle. It’s first argument is a function you define:

```jsx
useEffect(() => {
  alert('hello side effect!')
)}
```

The function is run both 1. When the component first initialized, and 2. When the state changes. To avoid infinite looping and maintain finer control, a second argument can be added as an array of dependencies:

```jsx

const [count, setCount] = useState(0);

useEffect(() => {
  fetch('foo').then(() => setLoaded(true) )
  },
  [count]
)

```

If array is empty, hook will only run once when the component is initialized. Adding the `count` dependency ensures the hook will only run when the state of `count` changes.

To trigger a “tear down” function when the component is removed from the UI, add a return statement to the hook:

```jsx
useEffect(() => {
  alert('side effect')

  return () => alert('goodbye component')
})
```

## useContext

Allows access to the Context API, which allows you to share or scope values through the entire component tree.

[useContext](./useContextExample.jsx)

## useRef

[useRef](./useRefExample.jsx)

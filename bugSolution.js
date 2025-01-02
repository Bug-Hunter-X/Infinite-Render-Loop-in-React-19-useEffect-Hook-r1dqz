```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect only runs when the count changes
    console.log('Component rendered');
  }, [count]); // Dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count => count + 1)}>Click me</button>
    </div>
  );
}
```
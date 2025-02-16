```javascript
// pages/index.js
import MyComponent from '../components/MyComponent'; // Correct path

export default function Home() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  return <div>Hello from MyComponent!</div>;
}
```

**Explanation of Solution:**

The primary solution involves ensuring the correct import path to your module. Double-check that the path to `MyComponent.js` relative to `pages/index.js` is accurate.  Additionally, ensure that `MyComponent.js` exists within the specified directory and is correctly exported.
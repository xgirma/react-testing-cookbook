# Utility modules

When writing tests for our React code, it is helpful to `pull out any functionality that doesn't have to do with our UI components into separate modules`, so that they can be tested separately.

```javascript
class AddQuote extends React.Component {
  createdId(uniqueNumber, description) {
    const shortKebabDescription = description
      .toLowerCase()
      .split(' ')
      .slice(0, 2)
      .join('-');
    return `${uniqueNumber}-${shortKebabDescription}`;
  }

  handleSubmit() {
    // ...
  }

  render() {
    return (
      <div>
        {"//..."}
      </div>
    );
  }
}
```

Currently the function that creates this unique ID is a method inside of the "add quote" React component. Because this function doesn't have anything to do with our React component, we can pull it out into its own module that we can test separately

```javascript
export default function(uniqueNumber, description) {
  const shortKebabDescription = description
    .toLowerCase()
    .split(' ')
    .slice(0, 2)
    .join('-');
  return `${uniqueNumber}-${shortKebabDescription}`;
}
```

```javascript
import createId from '../../../utilities/createId';

class AddQuote extends React.Component {
  handleSubmit() {
    // ...
  }

  render() {
    return (
      <div>
        {"//..."}
      </div>
    );
  }
}
```

Now our actual value is going to be the result of using the createID module with a unique number and a description. We will expect that result to be the unique number concatenated with the first two words of the description all together in kebab-case without spaces. Now if we run our test we can see that it's passing.

```javascript
import expect from 'expect';
import createId from './createId';

describe('createId', () => {

  it('should convert a description into a unique id', () => {
    const actual = createId(123, 'Cool example description');
    const expected = `123-cool-example`;
    expect(actual).toEqual(expected);
  });
});
```

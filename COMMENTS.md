# NetContruct Robot Blog assessment :robot:

### Overview

- Built using react-bootstrap and a very small amount of Ionic (one component).
- Includess pagination, filtering and animations using react-reveal
- Client-side routing includes navgiation back and forth to a detail page
- `typescript` branch has beginnings of conversion to TypeScript

### Bugs / TODOs

- The category filtering is not quite as I would like. The category list related to the posts remain in place, so when you select a second category subequent posts are filtered on that. The result is the full list of categories are not always shown. Workaround is to select the `Select Category` default option after each filter which fetches all from the API again. A better refactor would be to fetch the API with the category as a query param each time the select is changed rather than just fetching all at once.

- There is a lot of prop drilling for the category data. I would refactor this to use the Context API.

- The initial logic setting state in `App.jsx` is getting complicated, next steps would be to refactor using useReducer and split out into more helper function(s) where possible.

- Unit & e2e tests using Jest

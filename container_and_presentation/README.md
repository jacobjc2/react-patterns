# Container and Presentation Pattern

The container and presentation pattern allows us to enforce the separation of concerns in our React app by splitting the business logic and presentation logic into different components.
In several React applications, there arises a need to either retrieve data from a backend/database/etc. or compute a value/set of values and then present what was retrieved or computed to the user.

This pattern breaks those functions of the application into two (and maybe more in some cases) components:
1. **Container** - the container component is responsible for performing the business logic to retrieve or compute the data need
2. **Presentation** - the presentation component is responsible for taking the value retrieved by the container component and displaying it to the user through the UI
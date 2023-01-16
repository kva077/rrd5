import React from "react";
import {
  Link,
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <Switch>
        <Route path="/users" component={UsersLayout} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

function HomePage() {
  return <h1>Main Page</h1>;
}

function UsersListPage() {
  const usersArr = [
    { name: "User 1", id: 1 },
    { name: "User 2", id: 2 },
    { name: "User 3", id: 3 },
    { name: "User 4", id: 4 },
    { name: "User 5", id: 5 },
  ];
  const { path } = useRouteMatch();
  return (
    <>
      <h1>Users List Page</h1>
      <ul>
        {usersArr.map((u) => (
          <li>
            <Link to={`${path}/${u.id}`} key={u.id}>
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function UsersLayout() {
  return (
    <>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>
      <Switch>
        <Route path="/users/:userId/profile" component={UserProfilePage} />
        <Route path="/users/:userId/edit" component={EditUserPage} />
        <Route path="/users" exact component={UsersListPage} />
        <Redirect from="/users/:userId" to="/users/:userId/profile" />
      </Switch>
    </>
  );
}

function UserProfilePage() {
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <h1>User Profile Page</h1>
      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <hr />
        <li>
          <Link to={`/users/${params.userId}/edit`}>Edit this user</Link>
        </li>
      </ul>
      <span>User Id: {userId}</span>
    </>
  );
}

function EditUserPage() {
  const params = useParams();
  const id = params.userId;
  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <hr />
        <li>
          <Link to={`/users/${1}`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${+id + 1}`}>Another User</Link>
        </li>
      </ul>
    </>
  );
}

export default App;

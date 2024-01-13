
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query GetToDosWithUser {
    getTodos {
      id
      title
      completed
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getTodos.map(({ id, title, completed }:{
    id:string,
    title:string,
    completed:boolean
  }) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
      <b>About this completeness:</b>
      <p>{completed}</p>
      <br />
    </div>
  ));
}

export default App;

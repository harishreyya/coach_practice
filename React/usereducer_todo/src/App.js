import { TodoApp } from './Todo';
import { TodoProvider } from './TodoContext';
function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
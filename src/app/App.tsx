import styles from './App.module.css'
import { useAIStore } from "@/store";

function App() {
  const { answer, foobar, reset } = useAIStore();

  return (
    <main className={styles.app}>
      <button onClick={foobar}>Run AI</button>
      <button onClick={reset}>Reset</button>
      <p>Result: {answer}</p>
    </main>
  )
}

export default App

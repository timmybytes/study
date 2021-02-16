const moods = {
  happy: '😀'
  sad: '😞'
}

const MoodContext = createContext(moods);

function App(props) {

  return (
    // Provider scopes the 'happy' mood; any child components inside of the provider can inherit the 'happy' mood without having to pass props to the children.
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>


  )
}

// useContext hook allows access to consume current value of the nearest Context Provider
function MoodEmoji() {
  const mood = useContext(MoodContext)

  return <p>{ mood }</p>

}

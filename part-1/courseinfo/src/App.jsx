const Header = (props) => {
  return (
    <>
      <h1>Course: {props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises: {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </>
  )
}

function App() {
  const course = "Half Stack application development"

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    </>
  )
}

export default App
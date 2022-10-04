const App = () => {
    const course = {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App;

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            {
                props.parts.map((part, i) => <Part key={i} part={part}/>)
            }
        </div>

    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Total = (props) => {
    return (
        <div>
            <h4>total of {props.parts.reduce((x, y) => x + y.exercises, 0)} exercises</h4>
        </div>
    )
}

const MyButton = (props) => {
    return(
        <div>
            <button onClick={() => props.cliked()}>Click Me in Here!</button>
        </div>
    )
}

export default MyButton;
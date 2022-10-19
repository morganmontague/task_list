import App from "../app";

function Entry ({test}) {
    return (
        <div className={test.complete ? "text-decoration-line-through" : ""}>
            {test.task}
        </div>
    );
}

export default Entry
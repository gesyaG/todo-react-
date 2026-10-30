import Field from "./Field.jsx";

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
            />
        </form>
    )
}

export default SearchTaskForm;
export const TaskCard = ({ element, deleteTask }) => {



    return (
            <div key={element.id} className="bg-gray-800 text-white rounded-md p-4">
                <h1 className="font-bold capitalize">{element.title}</h1>
                <p className="text-gray-500 text-sm">{element.description}</p>
                <button className="bg-red-500 mt-4 px-2 py-1 rounded-md hover:bg-red-400"
                    onClick={() => { deleteTask(element.id) }}
                >Delete Task</button>
            </div>
    )
}

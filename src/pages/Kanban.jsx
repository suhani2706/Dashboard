import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';

const initialData = {
  todo: [
    { id: '1', text: 'Wireframe homepage' },
    { id: '2', text: 'Fix mobile nav' },
  ],
  doing: [
    { id: '3', text: 'Design dashboard UI' },
  ],
  done: [
    { id: '4', text: 'Install Tailwind CSS' },
  ],
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = [...tasks[sourceCol]];
    const destTasks = [...tasks[destCol]];

    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setTasks((prev) => ({ ...prev, [sourceCol]: sourceTasks }));
    } else {
      destTasks.splice(destination.index, 0, movedTask);
      setTasks((prev) => ({
        ...prev,
        [sourceCol]: sourceTasks,
        [destCol]: destTasks,
      }));
    }
  };

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`bg-white dark:bg-gray-800 rounded p-4 shadow min-h-[300px] transition ${
                    snapshot.isDraggingOver ? 'bg-blue-100 dark:bg-gray-700' : ''
                  }`}
                >
                  <h3 className="font-semibold capitalize mb-4">{columnId}</h3>
                  {columnTasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`p-3 mb-3 rounded bg-blue-200 dark:bg-blue-600 text-sm font-medium shadow ${
                            snapshot.isDragging ? 'bg-blue-300 dark:bg-blue-500' : ''
                          }`}
                        >
                          {task.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;

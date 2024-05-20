import { Container, Text, VStack, Input, Button, HStack, List, ListItem, Checkbox, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Todo List</Text>

        <HStack width="100%">
          <Input
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask}>
            Add Task
          </Button>
        </HStack>

        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem 
              key={index} 
              display="flex" 
              alignItems="center"
              bg={task.completed ? "gray.100" : "white"}
              p={2}
              borderRadius="md"
              boxShadow="sm"
            >
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
                mr={3}
              />
              <Text
                flex="1"
                textDecoration={task.completed ? "line-through" : "none"}
              >
                {task.text}
              </Text>
              <IconButton
                size="sm"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTask(index)}
                aria-label="Delete Task"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
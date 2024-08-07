// Importing necessary dependencies from React and react-hook-form library
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Functional component for Skill Component
const SkillPractice = () => {
  // State to manage the list of skills
  const [skills, setSkills] = useState([]);
    // State to manage the sorting order
  const [sortOrder, setSortOrder] = useState("asc");

  // Click handler to sort skills in ascending or descending order
  const sortSkillsClickHandler = () => {
     const newOrder = sortOrder === "asc" ? "desc" : "asc";
     // Sorting skills based on the current order
     const sortedSkills = [...skills].sort((a, b) => {
       const comparison = a.title.localeCompare(b.title);
       return newOrder === "asc" ? comparison : -comparison;
     });
 
     setSkills(sortedSkills);
     setSortOrder(newOrder);
  };

  // Function to remove a skill based on its id
  const removeSkill = (id) => {
    // Filter out the skill with the given id
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
  };

  // Nested functional component to display skills and a button to sort them
  const ShowData = ({ skills, removeSkill }) => {

    return (<div className="container">
      {skills && skills.length !== 0 && (
        <button onClick={sortSkillsClickHandler} className="btn btn-primary mb-2">
          Sort
        </button>
      )}

      <ul className="row pb-2">
        {skills.map((skill) => (
          // Display each skill as a list item, with a click event to remove it
          <li key={skill.id} className="form-lable" onClick={() => removeSkill(skill.id)}>
            {skill.title}
          </li>
        ))}
      </ul>
    </div>)
  };

  // Nested functional component for the skill input form
  const SkillForm = () => {
    // Destructuring values from the react-hook-form hook
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();

    // Function to save a new skill to the list
    const saveData = (data) => {
      // Generate a unique id for the new skill
      const id = "A" + Math.random().toString(36).substr(2, 5);
      // Create a new skill object
      const newElement = { id, title: data.title };
      // Update the skills list with the new skill
      setSkills((prevSkills) => [...prevSkills, newElement]);
      // Reset the form after submission
      reset();
    };

    // Form for entering a new skill
    return (
      <form onSubmit={handleSubmit(saveData)}>
        <div className="row">
          <div className="col">
            {/* Input field for the skill title */}
            <input
              type="text"
              className="form-control"
              {...register("title", { required: true })}
              placeholder="Skill Title"
            />
            {/* Display an error message if the title is required and not provided */}
            {errors.title && (
              <span className="text-danger">This is required</span>
            )}
          </div>
          <div className="col">
            {/* Button to submit the form and add a new skill */}
            <button type="submit" className="btn btn-success">
              +
            </button>
          </div>
        </div>
      </form>
    );
  };

  // Main render function of the SkillPractice component
  return (
    <div className="container">
      <h3>Fullstack Developer Skills</h3>
      {/* Display the skills and the sorting button */}
      <ShowData skills={skills}  removeSkill={removeSkill}/>
      {/* Display the form for adding new skills */}
      <SkillForm />
    </div>
  );
};

// Export the SkillPractice component as the default export
export default SkillPractice;

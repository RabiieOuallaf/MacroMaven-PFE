import React from 'react'
import  workout  from '../../images/fitness/workout.png';

function Exercices({ exercices }) {
    return (
      <div className="suggested-exercices flex flex-nowrap overflow-x-auto justify-center mx-[30%] w-[60%]">
        {exercices && exercices.map((exercice, index) => (
          <div
            key={index}
            className="exercice-container w-1/4 mx-8 flex flex-col justify-center my-3 flex-shrink-0"
          >
            <div className="exercice-image flex justify-center">
              <img
                src={exercice.exercice_image}
                alt="exercice picutre"
                className="w-28"
              />
            </div>
            <div className="exercice-details text-center">
              <h3 className="font-semibold">{exercice.exercice_name}</h3>
              <h4>
                {exercice.exercice_sets} sets * {exercice.exercice_repetition} reps
              </h4>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default Exercices
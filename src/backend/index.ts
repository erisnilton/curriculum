import { AboutSchema, EducationSchema, ExperienceSchema } from "./../lib/validation/index";
const BASE_URL = "http://localhost:3000";

//ABOUT
export const CreateAbout = async (about: AboutSchema) => {
  const response = await fetch(`${BASE_URL}/abouts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(about),
  });
  const data = await response.json();
  return data;
};

export const GetAbout = async (): Promise<AboutSchema> => {
  const response = await fetch(`${BASE_URL}/abouts/1`);
  const data = await response.json();
  return data;
};

export const UpdateAbout = async (
  about: AboutSchema,
  id: number
) => {
  const response = await fetch(`${BASE_URL}/abouts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(about),
  });
  const data = await response.json();
  return data;
};

// EDUCATION

export const CreateEducation = async (education: EducationSchema) => {
  const response = await fetch(`${BASE_URL}/educations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(education),
  });
  const data = await response.json();
  return data;
};

export const GetEducation = async () => {
  const response = await fetch(`${BASE_URL}/educations`);
  const data = await response.json();
  return data;
};

export const GetEducationById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/educations/${id}`);
  const data = await response.json();
  return data;
};

export const UpdateEducation = async (education: EducationSchema, id: number | undefined) => {
  const response = await fetch(`${BASE_URL}/educations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(education),
  });
  const data = await response.json();
  return data;
};

export const DeleteEducation = async (id: number | undefined) => {
  const response = await fetch(`${BASE_URL}/educations/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};



// EXPERIENCES

export const CreateExperience= async (experience: ExperienceSchema) => {
  const response = await fetch(`${BASE_URL}/experiences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experience),
  });
  const data = await response.json();
  return data;
};

export const GetExperience = async ()  => {
  const response = await fetch(`${BASE_URL}/experiences`);
  const data = await response.json();
  return data;
};

export const GetExperienceById = async (id: number): Promise<ExperienceSchema> => {
  const response = await fetch(`${BASE_URL}/experiences/${id}`);
  const data = await response.json();
  return data;
};

export const UpdateExperience = async (experience: ExperienceSchema, id: number | undefined) => {
  const response = await fetch(`${BASE_URL}/experiences/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experience),
  });
  const data = await response.json();
  return data;
};

export const DeleteExperience = async (id: number | undefined) => {
  const response = await fetch(`${BASE_URL}/experiences/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};







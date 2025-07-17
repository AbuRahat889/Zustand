import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Type for a single student
type Student = {
  name: string;
  studentId: number;
};

// Type for the entire store
type StudentStore = {
  students: Student[];
  addStudent: (student: Student) => void;
  removeStudent: (studentId: number) => void;
};

// Create the Zustand store with persistence
const useStudentStore = create<StudentStore>()(
  persist(
    (set) => ({
      students: [],
      addStudent: (student: Student) =>
        set((state) => ({
          students: [student, ...state.students],
        })),
      removeStudent: (studentId: number) =>
        set((state) => ({
          students: state.students.filter((s) => s.studentId !== studentId),
        })),
    }),

    {
      name: "Student-names",
      storage: createJSONStorage(() => localStorage), //  (optional) by default, 'localStorage' is used
      // or
      // storage :createJSONStorage(() => sessionStorage), // Use localStorage for persistence
    }
  )
);

export default useStudentStore;

import useStudentStore from "@/store/studentStore";
import React from "react";
import { X } from "lucide-react"; // or use any icon library you prefer

export default function StudentList() {
  const students = useStudentStore((state) => state.students);
  const removeStudent = useStudentStore((state) => state.removeStudent);

  return (
    <div className="py-10 ">
      <h2 className="text-xl font-semibold mb-4 text-[#3b9df8] ">
        Student List
      </h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students added yet.</p>
      ) : (
        <ul className="space-y-3">
          {students.map((student) => (
            <li
              key={student.studentId}
              className="flex justify-between items-center bg-white border-2 border-[#3b9df8] p-3 rounded-xl shadow-lg"
            >
              <span className="text-[#3b9df8] text-xl font-semibold leading-normal">
                {student.name}
              </span>
              <button
                onClick={() => removeStudent(student.studentId)}
                className="text-red-500 hover:text-red-700 cursor-pointer hover:rotate-265 transition-all duration-300"
                title="Remove student"
              >
                <X size={25} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

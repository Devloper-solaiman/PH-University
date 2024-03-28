import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "Dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "Offered Course",
    element: <OfferedCourse />,
  },
];

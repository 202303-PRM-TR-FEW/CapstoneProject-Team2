"use client"
import CourseDescription from "@/components/CourseDescription"

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center ml-8">
        <CourseDescription />
      </div>
    </div>
  )
}

export default page

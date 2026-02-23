import { Button } from "@/components/ui/button";
import { CourseCard } from "./course-card";
import { ArrowRight } from "lucide-react";

export default function VideoCoursesSection() {
  return (
    <section className="py-30">
        <div className="max-w-[1600px] mx-auto w-full px-4">
            <div className="text-center mb-10">
                <h2 className="text-content-slate-medium mb-3">Video Courses</h2>
                <p className="text-content-slate-medium type-body-l max-w-[650px] mx-auto">
                Want to kickstart your professional career in blockchain? These courses will
                prepare you to get hired as blockchain developer.
                </p>
            </div>
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {courses.map((course) => <CourseCard key={course.id} title={course.title} desc={course.desc} duration={course.duration} image={course.image} />)}
            </div>
            <div className="text-center">
                <Button variant="gradient">
                    All Courses <ArrowRight width={14} height={14}/>
                </Button>
            </div>
        </div>
    </section>
  );
}

const courses = [
    {
        id: 1,
        duration: "3-hour course",
        title: "Blockchain basics",
        desc: "Learn how blockchains and smart contracts work, create a wallet, and sign your first transaction.",
        image: "/images/course-1.png",
    },
    {
        id: 2,
        duration: "5-hour course",
        title: "Advanced Smart Contracts",
        desc: "Deep dive into Solidity, security patterns, and complex decentralized application logic.",
        image: "/images/course-2.png",
    },
    {
        id: 3,
        duration: "4-hour course",
        title: "DeFi Infrastructure",
        desc: "Understand liquidity pools, AMMs, and how to build Decentralized Finance protocols.",
        image: "/images/course-3.png",
    },
    {
        id: 4,
        duration: "4-hour course",
        title: "Lightchain for AI Developers",
        desc: "Learn how to integrate Lightchain with AI models and build decentralized AI applications.",
        image: "/images/course-1.png",
    }
];
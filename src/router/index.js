import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

import mp from "@/views/mp";
import pt from "@/views/pt";
import ep from "@/views/ep";
import em from "@/views/em";
import pra from "@/views/pra";
import ee from "@/views/ee";
import training_program from "@/components/ep/training_program";
import class_schedule from "@/components/ep/class_schedule";
import teaching_material from "@/components/ep/teaching_material";
import course_selection from "@/components/ep/course_selection";
import score from "@/components/ep/score";
import enrollment from "@/components/ep/enrollment";
import exam_query from "@/components/em/exam_query";
import special_situation from "@/components/em/special_situation";
import delayed_exam from "@/components/em/delayed_exam";
import social_exam from "@/components/em/social_exam";
import practice_query from "@/components/pra/practice_query";
import practice_credit from "@/components/pra/practice_credit";
import diploma_project from "@/components/pra/diploma_project";
import academic_activity from "@/components/pra/academic_activity";
import innovative_entrepreneurship from "@/components/pra/innovative_entrepreneurship";
import evaluate from "@/components/ee/evaluate";
import complaint from "@/components/ee/complaint";
import profile from "@/components/profile";
import main_page from "@/views/main_page";
import pra_credit from "@/components/pra/application-form/pra_credit";

const routes = [
    {
        path: '/', component: main_page,
        redirect: '/mp',
        children:
            [
                {path: '/mp', component: mp,},
                {path: '/pt', component: pt,},
                {
                    path: '/ep', component: ep,
                    redirect: '/ep/training_program',
                    children: [
                        {path: 'training_program', component: training_program},
                        {path: 'class_schedule', component: class_schedule},
                        {path: 'teaching_material', component: teaching_material},
                        {path: 'course_selection', component: course_selection},
                        {path: 'score', component: score},
                        {path: 'enrollment', component: enrollment},
                    ]
                },
                {
                    path: '/em', component: em,
                    redirect: '/em/exam_query',
                    children: [
                        {path: 'exam_query', component: exam_query},
                        {path: 'delayed_exam', component: delayed_exam},
                        {path: 'special_situation', component: special_situation},
                        {path: 'social_exam', component: social_exam},
                    ]
                },
                {
                    path: '/pra', component: pra,
                    redirect: '/pra/practice_query',
                    children: [
                        {path: 'practice_query', component: practice_query},
                        {path: 'practice_credit', component: practice_credit},
                        {path: 'diploma_project', component: diploma_project},
                        {path: 'academic_activity', component: academic_activity},
                        {path: 'innovative_entrepreneurship', component: innovative_entrepreneurship},
                    ]
                },
                {
                    path: '/ee', component: ee,
                    redirect: '/ee/evaluate',
                    children: [
                        {path: 'evaluate', component: evaluate},
                        {path: 'complaint', component: complaint},
                    ]
                },
            ]
    },
    {path: '/about_me', component: profile},
    {path: '/test', component: pra_credit}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router



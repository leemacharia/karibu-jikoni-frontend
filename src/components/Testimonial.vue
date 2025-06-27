<script setup>
import{ref} from 'vue';
const courses = ref([
    {
    name: "Computer Science",
    school: "School of Computing and Engineering",
    description: "Best for students interested in software development, data science, and AI.",
    intake: "July 2025"
    },
     {
    name: "Mechanical Engineering",
    school: "School of Engineering",
    description: "Ideal for those passionate about designing and building machines.",
    intake: "July 2025"
    },
     {
    name: "Business and IT",
    school: "School of Business",
    description: "Perfect for future leaders in management, finance, and entrepreneurship.",
    intake: "July 2025"
    },
     {
    name: "Medicine",
    school: "School of Medicine and Health Sciences",
    description: "For those dedicated to healthcare and medical research.",
    intake: "July 2025"
    },
     {
    name: "Architecture",
    school: "School of Architecture and Design",
    description: "Great for creative minds interested in urban planning and design.",
    intake: "July 2025"
    },
    {
    school: "Communication and Media",
    name: "Media Studies",
    description: "For aspiring journalists, filmmakers, and media professionals.",
    intake: "July 2025"
    },
     {
    name: "Data science and Analytics",
    school: "School of Data Science",
    description: "For those who want to turn data into actionable insights.",
    intake: "July 2025"
    },
    {
    name: "Education",
    school: "School of Education",
    description: "For those passionate about teaching and shaping future generations.",
    intake: "July 2025"
    },
    {
    name: "Psychology",
    school: "School of Social Sciences",
    description: "For those interested in understanding human behavior and mental processes.",
    intake: "July 2025"
    },
    {
    name: "Environmental Science",
    school: "School of Environmental Studies",
    description: "For those committed to sustainability and environmental protection.",
    intake: "July 2025"
    },
])
    // Add more courses as needed


</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                
<v-card color = "indigo-lighten-2">
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
        {{course.description}}
        </v-card-text>
        <v-card-text>
        Intake: {{course.intake}}
        </v-card-text>
      </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
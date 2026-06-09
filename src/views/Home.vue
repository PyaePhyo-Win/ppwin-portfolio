<template>
  <div id="home">
    <Hero />
    <AboutSection id="about" class="py-16" />
    <ExperienceSection class="py-16" />
    <EducationSection class="py-16" />
    <ProjectsSection id="projects" class="py-16" />
    <SkillsSection id="skills" class="py-16" />
    <ContactSection id="contact" class="py-16" />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import AboutSection from '../components/AboutSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<template>
  <div id="home" class="pb-12 md:pb-20">
    <Hero />
    <AboutSection id="about" />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection id="projects" />
    <SkillsSection id="skills" />
    <ContactSection id="contact" />
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

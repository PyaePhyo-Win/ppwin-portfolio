<template>
  <section class="container w-full mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Get in Touch</h2>
    <div class="bg-white w-full dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-12 transition-colors duration-300">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            @blur="validateField('name')"
            :class="inputClass('name')"
            class="mt-1 p-2 block w-full rounded-md shadow-sm sm:text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300 min-h-[40px]"
          />
          <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            @blur="validateField('email')"
            :class="inputClass('email')"
            class="mt-1 p-2 block w-full rounded-md shadow-sm sm:text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300 min-h-[40px]"
          />
          <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            @blur="validateField('message')"
            :class="inputClass('message')"
            rows="5"
            class="mt-1 p-2 block w-full rounded-md shadow-sm sm:text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
          ></textarea>
          <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
        </div>

        <button
          type="submit"
          :disabled="!isFormValid"
          class="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        >
          Send Message
        </button>

        <p v-if="successMessage" class="mt-4 text-green-600 text-center">{{ successMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  message: '',
});

const successMessage = ref('');

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateField = (field: 'name' | 'email' | 'message') => {
  errors[field] = ''; // Clear previous error

  if (field === 'name' && !form.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(form.email)) {
      errors.email = 'Invalid email format.';
    }
  }

  if (field === 'message') {
    if (!form.message.trim()) {
      errors.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
  }
};

const inputClass = (field: 'name' | 'email' | 'message') => {
  const baseClasses = 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';
  const invalidClasses = 'border-red-500 focus:ring-red-500 focus:border-red-500';
  const validClasses = 'border-green-500 focus:ring-green-500 focus:border-green-500';

  if (errors[field]) {
    return `${baseClasses} ${invalidClasses}`;
  }
  // Only apply green border if field has been touched AND is valid
  if (form[field].trim() && !errors[field]) {
    if (field === 'email' && !validateEmail(form.email)) {
      return baseClasses; // Don't make it green if email is not valid yet
    }
    return `${baseClasses} ${validClasses}`;
  }
  return baseClasses;
};


const isFormValid = computed(() => {
  const isNameValid = form.name.trim().length > 0;
  const isEmailValid = validateEmail(form.email);
  const isMessageValid = form.message.trim().length >= 10;

  return isNameValid && isEmailValid && isMessageValid;
});

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = '';
  });
  successMessage.value = '';
};

const submitForm = () => {
  // Validate all fields to show errors if any
  validateField('name');
  validateField('email');
  validateField('message');

  if (isFormValid.value) {
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', form);
    successMessage.value = 'Your message has been sent successfully!';
    setTimeout(() => {
      resetForm();
    }, 3000); // Reset after 3 seconds
  } else {
    successMessage.value = 'Please correct the errors in the form.';
  }
};
</script>